import React from 'react';
import './OrderForm.css'; // Import your CSS file for the popup if needed

const PopupForm = ({ selectedColor, selectedColorName, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Enquiry Form</h2>
        <form id="order-form" className="order-form" action="https://getform.io/f/bnleknyb" method="POST">
        <p>
          Selected Color: <span style={{ backgroundColor: selectedColor }} className="selected-color" name="color"></span>
          <span>{selectedColorName}</span>
        </p>
          <label htmlFor="company-name">Company Name:</label>
          <input type="text" id="company-name" placeholder="Enter company name" required name="name"/>

          <label htmlFor="company-name">Company Email:</label>
          <input type="email" id="company-name" placeholder="Enter company Email" required name="email"/>
          
          <label htmlFor="select-item">Select Item:</label>
          <select id="select-item" required name="materials">
            <option value="" disabled selected>Select item</option>
            <option value="aluminium">Aluminium</option>
            <option value="stainless-steel">Stainless Steel</option>
            <option value="mild-steel">Mild Steel</option>
          </select>
          
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" placeholder="Enter quantity" required name="quantity"/>
          
          <div id="file-upload-container">
            <label htmlFor="file-upload">Product Image:</label>
            <input type="file" id="file-upload" required name="image"/>
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
