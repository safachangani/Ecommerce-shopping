import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './additem.css'; // Importing CSS styles
import axios from '../../axios'; // Importing Axios instance

const AddItem = () => {
  const navigate = useNavigate(); // Hook for navigation

  // State variables to hold form data
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null); // State to hold image file

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(); // Creating a FormData object to send form data
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('image', image); 

    try {
      // Sending a POST request to the server with form data
      await axios.post('/add-new-item', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Handle success if needed

    } catch (error) {
      console.error('Error adding item:', error);
      // Handle the error (e.g., show a user-friendly message)
    }

    // Navigate back to the home page after submitting the item
    navigate('/');
  };

  return (
    <div>
      <h1>Add Item</h1>
      {/* Form for adding a new item */}
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        {/* Input fields for name, description, category, price, and image */}
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
          <input type="file" name='image' onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;
