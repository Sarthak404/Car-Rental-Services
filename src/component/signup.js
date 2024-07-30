import React, { useState } from 'react';
import { auth } from '../firebase'; // Assuming you have already initialized Firebase in a separate file
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../component/signup.css'
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Use createUserWithEmailAndPassword from auth
      // Alert user of successful registration
      alert('Registration Successful');
      // Redirect to login screen after successful registration
      window.location.href = '/login';
    } catch (error) {
      alert('Registration Failed');
    }
  };

  return (
    <div className='signupform'>
      <h2>Sign Up</h2>
      <div className='labell'>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className='labell'>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="button" onClick={handleSignUp}>Sign Up</button>

      {error && <p>{error}</p>}
      <p>Already have an account? <Link to="/" className='signup'>Login</Link></p>
    </div>
  );
};

export default SignUp;
