import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';
import { collection, getDoc, addDoc, doc,getDocs,deleteDoc } from 'firebase/firestore'; // Updated import
import { useNavigate } from 'react-router-dom';
import '../component/list.css';


const CarList = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'cars'));
                const carData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCars(carData);
            } catch (error) {
                console.error('Error fetching cars', error);
            }
        };

        fetchData();
    }, []);

    const handleBookNow = async (carId, index) => {
        try {
            // Get the car document reference from Firestore
            const carRef = doc(firestore, 'cars', carId);
            const carDoc = await getDoc(carRef);
            const carData = carDoc.data();
    
            // Add the car data to the bookedCars collection in Firestore
            await addDoc(collection(firestore, 'bookedCars'), carData);
    
            // Delete the car document from the cars collection
            await deleteDoc(carRef);
    
            // Update the state to remove the booked car
            const updatedCars = cars.filter((_, i) => i !== index);
            setCars(updatedCars);
    
            // Optionally, you can show a success message
            alert('Car booked successfully!');
        } catch (error) {
            // Handle errors
            console.error('Error booking car', error);
            alert('Error booking car');
        }
    };
    

    return (
        <div className="forests-container">
            {cars.map((car, index) => (
                <div key={index} className="forest-card">
                    <h3>Car name: {car.carName}</h3>
                    <img src={car.imageUrl} alt={car.carName} onClick={() => navigate(`/${car.id}`)} />
                    <h3>Price: {car.price}</h3>
                    <h3>Model Year: {car.modelYear}</h3>
                    <h3>Status: {car.status}</h3>
                    <button onClick={() => handleBookNow(car.id, index)} disabled={car.status === 'unavailable'}>
                        Book Now
                    </button>
                    <Link to={`/${car.id}`} className='but'>View</Link>
                </div>
            ))}
            
        </div>
    );
};

export default CarList;
