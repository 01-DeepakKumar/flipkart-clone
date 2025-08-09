import React, { useState } from 'react';
import { Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logindialog from './login/Logindialog';


const Wrapper = styled(Box)({
  display: 'flex',
  marginLeft: 'auto',
  alignItems: 'center',
  gap: '20px',
  color: '#fff',
});

const LoginButton = styled(Button)({
  backgroundColor: '#ffffff',
  color: '#2874f0',
  textTransform: 'none',
  padding: '5px 40px',
  boxShadow: 'none',
  borderRadius: 2,
  fontWeight: 600,
});

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <LoginButton variant="contained" onClick={openDialog}>
        Login
      </LoginButton>

      <Typography style={{ fontSize: 14 }}>Become a Seller</Typography>
      <Typography style={{ fontSize: 14 }}>More</Typography>
      <Box display="flex" alignItems="center">
        <ShoppingCartIcon />
        <Typography style={{ marginLeft: 5, fontSize: 14 }}>Cart</Typography>
      </Box>

      <Logindialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
