import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Assuming you have already initialized Firebase in a separate file
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../component/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // Track the user's login status

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true); // If a user is logged in, set loggedIn state to true
      } else {
        setLoggedIn(false); // If no user is logged in, set loggedIn state to false
      }
    });

    // Cleanup function to unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Alert user of successful login
      alert('Login Successful');
      // Reset email and password fields
      setEmail('');
      setPassword('');
      window.location.href = '/home';
    } catch (error) {
      alert('Invalid Credentials');
    }
  };



  return (
    <div className='loginform'>
      <h2>Login</h2>
      <div className='labell'>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className='labell'>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit" onClick={(e) => handleLogin(e)}>Login</button>

      <p>Don't have an account? <Link to="/signup" className='signup'>Sign Up</Link></p>
      
      
    </div>
  );
};

export default Login;
