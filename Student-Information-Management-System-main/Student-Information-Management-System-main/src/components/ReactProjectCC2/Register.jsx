import React from 'react';
import './Register.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate('/home'); 
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{marginLeft:'400px'}}>
        <div className='container'>
          <div>
            <label>Register Number</label>
            <input type='text' required />
          </div>
          <div>
            <label>Email</label>
            <input type='text' required />
          </div>
          <div>
            <label>Password</label>
            <input type='password' required />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type='password' required />
          </div>
          <div>
            <Button variant="contained" type='submit'>Register</Button>
          </div>
          <div>
            Already have an account?
            <Button variant="outlined" style={{marginLeft:'5px'}} onClick={() => navigate('/login')}>Sign in</Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Register;
