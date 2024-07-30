import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore methods for adding documents
import { db } from '../firebase'; // Import the Firestore database instance
import '../component/addcar.css';
import Footer from './footer';
const AddCarForm = () => {
  const [carName, setCarName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [status, setstatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new car object
    const newCar = {
      carName,
      imageUrl,
      price: parseFloat(price), // Convert price to number
      modelYear: parseInt(modelYear),
      status // Convert modelYear to number
    };

    try {
      // Add the new car to Firestore
      const docRef = await addDoc(collection(db, 'cars'), newCar);

      // Get the ID of the added document
      const carId = docRef.id;

      // Include the ID in the newCar object
      const carWithId = { ...newCar, id: carId };



      console.log('Document written with ID: ', carId);
      alert('Car added');

      // Clear input fields after submission
      setCarName('');
      setImageUrl('');
      setPrice('');
      setModelYear('');
      setstatus('');

      // Optionally, you can show a success message to the user
    } catch (error) {
      console.error('Error adding document: ', error);
      // Optionally, you can show an error message to the user
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className='addcarform'>
        <h2>Add Car</h2>
        <div className='labell'>
          <label>Car Name:</label>
          <input
            type="text"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            required
          />
        </div>
        <div className='labell'>
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div className='labell'>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className='labell'>
          <label>Model Year:</label>
          <input
            type="number"
            value={modelYear}
            onChange={(e) => setModelYear(e.target.value)}
            required
          />
        </div>
        <div className='labell'>
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Car</button>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AddCarForm;
