import React from 'react'
import useFetchData from '../../hooks/useFetchData'

const UploadFiles = () => {
  const productData = useFetchData('http://localhost:1337/api/products?populate=*');
  
  return (
    <div>
      {productData.result && productData.result.data && productData.result.data.map(product => (
        <div key={product.id} style={{ paddingTop: '30px' }}>
          <h1 style={{ marginTop: '30px', marginBottom: '30px' }}>{product.attributes.title}</h1>
          <p style={{ textAlign: 'justify' }}>{product.attributes.description}</p>
          <p style={{ textAlign: 'justify', fontSize: '24px' }}>€{product.attributes.price},00</p>
          
          {product.attributes.image.data.map((image, index) => (
            <img
              key={index}
              src={`http://localhost:1337${image.attributes.url}`}
              alt={`post image ${index}`}
              height={320}
              width={420}
              style={{
                borderRadius: '10px',
                boxShadow: '2px 2px 4px rgba(98, 98, 101, 0.8)',
                marginBottom: '40px',
                marginTop: '30px',
                marginRight: '30px'
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default UploadFiles
