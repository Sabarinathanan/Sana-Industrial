import React, { useState } from 'react';
import './OrderForm.css'; // Import your CSS file for the popup if needed
import axios from 'axios';

const PopupForm = ({ selectedColor, selectedColorName, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyEmail: '',
    materials: '',
    quantity: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('color', selectedColor);
    data.append('colorName', selectedColorName);
    data.append('name', formData.companyName);
    data.append('email', formData.companyEmail);
    data.append('materials', formData.materials);
    data.append('quantity', formData.quantity);
    data.append('image', formData.file);

    try {
      const response = await axios.post('https://getform.io/f/bnleknyb', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Enquiry Form</h2>
        <form id="order-form" className="order-form" onSubmit={handleSubmit}>
          <p>
            Selected Color: <span style={{ backgroundColor: selectedColor }} className="selected-color"></span>
            <span>{selectedColorName}</span>
          </p>
          <label htmlFor="company-name">Company Name:</label>
          <input type="text" id="company-name" placeholder="Enter company name" required name="companyName" value={formData.companyName} onChange={handleChange} />

          <label htmlFor="company-email">Company Email:</label>
          <input type="email" id="company-email" placeholder="Enter company Email" required name="companyEmail" value={formData.companyEmail} onChange={handleChange} />
          
          <label htmlFor="select-item">Select Item:</label>
          <select id="select-item" required name="materials" value={formData.materials} onChange={handleChange}>
            <option value="" disabled>Select item</option>
            <option value="aluminium">Aluminium</option>
            <option value="stainless-steel">Stainless Steel</option>
            <option value="mild-steel">Mild Steel</option>
          </select>
          
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" placeholder="Enter quantity" required name="quantity" value={formData.quantity} onChange={handleChange} />
          
          <div id="file-upload-container">
            <label htmlFor="file-upload">Product Image:</label>
            <input type="file" id="file-upload" required name="image" onChange={handleFileChange} />
          </div>
          
          <div className='flex'>
            <button type="submit" className='submit-btn'>Submit</button>
            <button type="button" id="close-button" className='close-btn' onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
