import React, { useState, useEffect, useCallback } from 'react';
import CustomNav from '../CustomNav';
import ImageGallery from 'react-image-gallery';

const Gallery = () => {
  const [parsedData, setParsedData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:1337/api/images?populate=*');
      const json = await res.json();
      const newData = json.data.reduce((acc, cur) => {
        const imagesArray = cur.attributes.image.data.reduce((acc, cur) => {
          return [
            ...acc,
            {
              original: `http://localhost:1337${cur.attributes.url}`,
              thumbnail: `http://localhost:1337${cur.attributes.formats.thumbnail.url}`,
            },
          ];
        }, []);
        return [...acc, { title: cur.attributes.title, images: imagesArray }];
      }, []);
      setParsedData(newData);
    } catch (err) {
      console.log('error', err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <CustomNav />
      {parsedData.map((item) => (
        <div key={item.id}>
          <h1 style={{ color: 'white', padding: '20px 0' }}>{item.title}</h1>
          <div className='contImageGallery'>
            <ImageGallery items={item.images} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Gallery;
