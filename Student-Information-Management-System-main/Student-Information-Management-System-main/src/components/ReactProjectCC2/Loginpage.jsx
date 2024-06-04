import React, { useState } from 'react';
import './Loginpage.css';
import './first.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const onHandleRegister = () => {
    navigate('/register');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='containerlogin'>
          <div>
            <label>Enter username</label>
            <input type='text' onChange={(event) => { setUsername(event.target.value) }} required />
          </div>
          <div>
            <label>Enter password</label>
            <input type='password' required />
          </div>
          <div>
            <Button variant="contained" type='submit'>Login</Button>
          </div>
          <div>
            Don't Have an Account?
            <Button variant="contained" style={{ marginLeft: '5px' }} onClick={onHandleRegister}>Register</Button>
          </div>
        </div>
      </form>
        <p style={{marginBottom:'100px',height:'50px', width:'100%',backgroundColor:'lightgray',marginTop:'160px',position:'fixed'}}>Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</p>

    </>
  );
};

export default Loginpage;
