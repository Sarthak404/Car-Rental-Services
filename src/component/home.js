import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Assuming you have already initialized Firebase in a separate file
import '../component/home.css';
import CarList from './listcar';
import Footer from './footer';





const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Track the user's login status
  const [userEmail, setUserEmail] = useState(null); // Store the email of the logged-in user

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true); // If a user is logged in, set loggedIn state to true
        setUserEmail(user.email); // Set the email of the logged-in user
      } else {
        setLoggedIn(false); // If no user is logged in, set loggedIn state to false
        setUserEmail(null); // Clear the email of the logged-in user
      }
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    // Clear user authentication state from browser storage
    localStorage.removeItem('user');
    setLoggedIn(false); // Update loggedIn state to false
    // Redirect to login page after logout
    window.location.href = '/';
  };

  return (
    <div>
      <nav>
        <ul>
          <div className='logo'>
            <text>BookCars</text>
          </div>
          <div className='link'>
            <li>
              <Link to="/add"> + Add Car</Link>
            </li>
            <li>
              <Link to="/bookedcars">Booked Cars</Link>
            </li>
            {loggedIn && (
              <li>
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            )}
          </div>
        </ul>
      </nav>
      <div>
        {loggedIn && (
          <li className='welcome'>
            <span >Welcome to BookCars {userEmail} !!</span>
          </li>
        )}
        <h2 className='title'>Cars Available</h2>
      </div>
      <div>
        <CarList />
      </div>
      <div>
        <Footer/>
      </div>


    </div>

  );
};

export default Home;
