import React from 'react'
import useFetchData from '../../hooks/useFetchData';

const Ships = () => {
  const shipData = useFetchData('http://localhost:1337/api/ships?populate=*');
  return (
    <div>
        {shipData.result && shipData.result.data && shipData.result.data.map(ship => (
        <div key={ship.id} style={{paddingTop:'30px'}}>
          <h1 style={{marginTop:'30px', marginBottom:'30px'}}>{ship.attributes.title}</h1>
          <p style={{textAlign:'justify'}}>{ship.attributes.about}</p>
          <img src={`http://localhost:1337${ship.attributes.img.data[0].attributes.url}`} 
          alt='post image' 
          height={320} 
          width={420} 
          style={{
            borderRadius: '10px', 
            boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            marginBottom: '40px',
            marginTop: '30px'
          }}
          />
        </div>
      ))}
    </div>
  )
}

export default Ships