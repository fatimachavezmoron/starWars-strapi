import axios from 'axios';
import {  Input, Button } from 'reactstrap';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];


const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleFileChange = (file) => {
    console.log(file)
    setSelectedFile(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 1. Enviar el archivo al servidor Strapi
    let fileData = new FormData();
    fileData.append("files", selectedFile);

    axios.post("http://localhost:1337/api/upload", fileData)
      .then((response) => {
        const fileId = response.data[0].id;

        // 2. Enviar los datos del formulario junto con el ID del archivo a Strapi
        const formData = { data: {} }
        formData.data.title = title;
        formData.data.description = description;
        formData.data.price = price;
        formData.data.image = fileId;

        console.log('formData', formData)
        
        axios.post("http://localhost:1337/api/products", formData)
          .then((response) => {
            console.log("Formulario enviado con éxito", response.data);
          })
          .catch((error) => {
            console.error("Error al enviar el formulario", error);
          });
      })
      .catch((error) => {
        console.error("Error al subir el archivo", error);
      });
  };

  return (
    <div className='uploadCont'>
      <div className='formCont'>
        <div className='inputCont'>
          <form onSubmit={handleFormSubmit}>
            <p>Title</p>
            <Input type="text" value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Title" />
            <br />
            <p>Description</p>
            <textarea
              value={description}
              style={{ height: '150px', width: '300px', color: 'black' }} 
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows={4} 
              cols={50} 
            />
            <br />
            <p>Price</p>
            <Input type="number" value={price} 
            onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            <br />
            <p>Image</p>
            <FileUploader handleChange={handleFileChange} types={fileTypes} />
            <br />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upload;
