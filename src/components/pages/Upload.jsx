import React, { useState } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos, como file, title, description y price, a través de una solicitud HTTP o realizar la acción deseada.
  }

  return (
    <div className='uploadCont'>
      <div className='formCont'>
        <div className='inputCont'>
          <FormGroup onSubmit={handleSubmit}>
            <Label for="title">Title</Label>
            <Input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <Label for="description">Description</Label>
            <Input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

            <Label for="price">Price</Label>
            <Input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />

            <Label for="file">Image</Label>
            <Input type="file" id="file" onChange={handleFileChange} />

            <Button type="submit">Submit</Button>
          </FormGroup>
        </div>
      </div>
    </div>
  );
}

export default Upload;
