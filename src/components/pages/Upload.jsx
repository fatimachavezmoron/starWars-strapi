import axios from 'axios';
import {  Input, Button } from 'reactstrap';
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { toast } from 'react-toastify'

const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];


const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isFormValid, setIsFormValid] = useState(false); 

  const handleFileChange = (file) => {
    setSelectedFile(file);
    console.log(file)
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // 1. Enviar el archivo al servidor Strapi
    let fileData = new FormData();
    for (const key in selectedFile) {
      fileData.append("files", selectedFile[key])
    };

    axios.post("http://localhost:1337/api/upload", fileData)
      .then((response) => {
        const fileId = response.data.map((file) => file.id);
        console.log(fileId)
        // 2. Enviar los datos del formulario junto con el ID del archivo a Strapi
        const formData = { data: {} }
        formData.data.title = title;
        formData.data.description = description;
        formData.data.price = price;
        formData.data.image = fileId;
        
        axios.post("http://localhost:1337/api/products", formData)
          .then((response) => {
            toast.success('Post successfully!', {
              hideProgressBar: true,
              theme: "dark",
              position: toast.POSITION.TOP_CENTER
            })
          })
          .catch((error) => {
            toast.error("error uploading the form", error);
          });
      })
      .catch((error) => {
        toast.error("Error uploading file",{
          hideProgressBar: true,
          theme: "dark",
          position: toast.POSITION.TOP_CENTER
        }, error);
      });
  };

  const handleInputChange = () => {
    if (title && description && price && selectedFile) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
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
            <FileUploader handleChange={handleFileChange} types={fileTypes} multiple={true} />
            <br />
            <Button type="submit" 
            // disabled={!isFormValid}
            >Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Upload;
