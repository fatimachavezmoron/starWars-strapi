
import useFetchData from '../../hooks/useFetchData';
import CustomNav from '../CustomNav';


const Gallery = () => {
  const imagesData = useFetchData('http://localhost:1337/api/images?populate=*');

  console.log(imagesData.result);
  if (imagesData.loading) return <p>Loading...</p>;
  if (imagesData.error) return <p>Error</p>;
  
  return (
    <>
    <CustomNav />
    {imagesData.result && imagesData.result.data && imagesData.result.data.map(item =>
      (
        <div key={item.id}>
          <div>
            <h1 style={{color:'white', padding:'20px 0'}}>{item.attributes.title}</h1>
          </div>
          <div>
            {item.attributes.image.data.map((imageData, index) => (
              <img
                key={index}
                src={`http://localhost:1337${imageData.attributes.url}`}
                alt="post image"
                className='imagesGallery'
              />
            ))}
          </div>
        </div>
      )
      
      )}
    </>
  )
}

export default Gallery;