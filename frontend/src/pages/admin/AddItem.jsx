import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './additem.css'
import axios from '../../axios';
const AddItem = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("done");
    console.log(image);
    axios.post("/add-new-item",{name,description,category,price,image}).then(()=>{
    }).catch(error => {
        console.error("Error adding item:", error);
        // Handle the error (e.g., show a user-friendly message)
      });
    // Navigate back to the home page after submitting the item
    navigate('/');
  };

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Image:
          <input type="file" value={image} onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;