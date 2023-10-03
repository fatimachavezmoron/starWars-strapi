import { useState, useEffect } from 'react';
import ImageGallery from "react-image-gallery";
import useFetchData from '../../hooks/useFetchData';

const Gallery = () => {
  const postsData = useFetchData('http://localhost:1337/api/descriptions?populate=*');
  const [parsedData, setParsedData] = useState([])

  useEffect(() => {
    (async () => {
      try{
        const res = await fetch('http://localhost:1337/api/images?populate=*');
        const json = await res.json();
        const newData = json.data.reduce((acc, cur) => {
  
          const imagesArray = cur.attributes.image.data.reduce((acc, cur) => {
            return [...acc, 
              {
                original: `http://localhost:1337${cur.attributes.url}`, 
                thumbnail: `http://localhost:1337${cur.attributes.formats.thumbnail.url}` 
              }]
          }, [])
          return [...acc,{title: cur.attributes.title, images: imagesArray }]
        }, [] )

        setParsedData(newData)
      } catch (err) {
        console.log("error", err)
      }

    })();
  }, [])

  
  return (
    <>
    <div className='galleryCont'>
      <div className='imageCont' >
      {parsedData.map(item =>
        (
          <div key={item.id}>
            <h1 style={{color:'white', padding:'20px 0'}}>{item.title}</h1>
            <div className='contImageGallery'>
            <ImageGallery
              items={item.images}
              additionalClass="myImg"
            />
            </div>
          </div>
        )
      )}
      </div>
      <div className='textCont'>
      {postsData.result && postsData.result.data && postsData.result.data.map(description => (
        <div key={description.id} style={{paddingTop:'30px'}}>
          <h1>{description.attributes.title}</h1>
          <p style={{textAlign:'justify'}}>{description.attributes.about}</p>
          <img src={`http://localhost:1337${description.attributes.img.data[0].attributes.url}`} 

          alt='post image' 
          height={320} 
          width={420} 
          style={{
            borderRadius: '10px', 
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            marginLeft: '110px',
            marginBottom: '40px',
            marginTop: '30px' 
          }}
          />
        </div>
      ))}
      </div>
    </div>

    </>
  )
}

export default Gallery;