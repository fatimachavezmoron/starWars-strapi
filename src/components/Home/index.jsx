
import CustomNav from '../CustomNav'
import { userData } from '../../helpers';
import useFetchData from '../../hooks/useFetchData';

const Home = () => {
  const {username} = userData();
  const postsData = useFetchData('http://localhost:1337/api/posts?populate=*');
  // console.log(postsData.result);

  if (postsData.loading) return <p>Loading...</p>;
  if (postsData.error) return <p>Error</p>;
  

  return (
    <>
      <div className='home'>
        <CustomNav />
        <div >
          <h2 style={{ marginTop: '20px'}}>Welcome {username} !</h2>
        </div>
        {postsData.result && postsData.result.data && postsData.result.data.map(post => (
        <div key={post.id} style={{paddingTop:'30px'}}>
          <h1>{post.attributes.title}</h1>
          <img src={`http://localhost:1337${post.attributes.image.data.attributes.formats.thumbnail.url}`} 
          alt='post image' 
          width={250} 
          style={{
            borderRadius: '10px', 
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            marginBottom: '20px'
          }}
          />
          <p style={{textAlign:'justify'}}>{post.attributes.description}</p>
        </div>
      ))}
      </div>
    </>
  )
}

export default Home