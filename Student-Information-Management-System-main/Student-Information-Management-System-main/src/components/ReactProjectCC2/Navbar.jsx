import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ toggleSidebar }) => {

  const navigate=useNavigate();
  const onchange=()=>{
      navigate('/home');
  }
  const onchoose=()=>{
      navigate('/choose');
  }
  const signout=()=>{
      navigate('/');
  }

  return (
    <>
    <AppBar position="fixed" style={{backgroundColor:'darkblue'}}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
            Student Information Management System
        </Typography> 
        <Button onClick={onchange} style={{color:'white',marginLeft:'750px'}}>Home</Button>
        <Button onClick={onchoose} style={{color:'white'}}>Contact US</Button>
        <Button onClick={signout} style={{color:'white'}}>Sign Out</Button>
      </Toolbar>
    </AppBar>
    </>

  );
};
export default Navbar;

