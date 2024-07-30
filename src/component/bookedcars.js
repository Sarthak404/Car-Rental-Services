import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs, deleteDoc,doc } from 'firebase/firestore'; // Updated import
import { useNavigate } from 'react-router-dom';
import '../component/booked.css';
import Footer from './footer';

const Bookedcar = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'bookedCars'));
                const carData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setCars(carData);
            } catch (error) {
                console.error('Error fetching cars', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (carId) => {
        try {
            // Delete the car document from the bookedCars collection
            await deleteDoc(doc(firestore, 'bookedCars', carId));

            // Update the state to remove the deleted car
            const updatedCars = cars.filter(car => car.id !== carId);
            setCars(updatedCars);
        } catch (error) {
            // Handle errors
            console.error('Error deleting car', error);
        }
    };

    return (
        <div>
            <h2 className='title'>Booked Cars</h2>
            <div className="forests">
                {cars.map((car, index) => (
                    <div key={index} className="forest-card">
                        <h3>Car name: {car.carName}</h3>
                        <img src={car.imageUrl} alt={car.carName} onClick={() => navigate(`/${car.id}`)} />
                        <h3>Price: {car.price}</h3>
                        <h3>Model Year: {car.modelYear}</h3>
                        <button onClick={() => handleDelete(car.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Bookedcar;
