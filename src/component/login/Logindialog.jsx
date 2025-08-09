import React from 'react';
import Dialog from '@mui/material/Dialog';
import { TextField, Box, styled, Button, Typography } from '@mui/material';

const Component = styled(Box)({
  height: '70vh',
  width: '90vh',
  display: 'flex',
});

const Image = styled(Box)({
  backgroundColor: '#2874f0',
  height: '100%',
  width: '40%',
  padding: '45px 35px',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '25px 35px',
  flex: 1,
  '& > div, & > button, & > p': {
    marginTop: 15,
  },
});

const LoginButton = styled(Button)({
  textTransform: 'none',
  backgroundColor: '#FB641B',
  color: '#fff',
  height: 48,
  borderRadius: 2,
});

const RequestOTP = styled(Button)({
  textTransform: 'none',
  backgroundColor: '#fff',
  color: '#2874f0',
  height: 48,
  borderRadius: 2,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
});

const Text = styled(Typography)({
  color: '#878787',
  fontSize: 12,
});

const CreateAccount = styled(Typography)({
  fontSize: 14,
  color: '#2874f0',
  fontWeight: 500,
  textAlign: 'center',
  cursor: 'pointer',
});

const Logindialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        <Image>
          <Typography variant="h5" style={{ fontWeight: 600 }}>Login</Typography>
          <Typography style={{ marginTop: 20 }}>Get access to your Orders, Wishlist and Recommendations</Typography>
          <img 
            src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_f9fc50.png'
            alt="login-illustration" 
            style={{ width: 200, marginTop: 40 }}
          />
        </Image>
        <Wrapper>
          <TextField variant="standard" label="Enter Email / Mobile number" />
          <TextField variant="standard" label="Enter Password" type="password" />
          <Text>
            By continuing, you agree to Flipkart's <span style={{ color: '#2874f0' }}>Terms of Use</span> and{' '}
            <span style={{ color: '#2874f0' }}>Privacy Policy</span>.
          </Text>
          <LoginButton>Login</LoginButton>
          <Typography style={{ textAlign: 'center' }}>OR</Typography>
          <RequestOTP>Request OTP</RequestOTP>
          <CreateAccount>New to Flipkart? Create an account</CreateAccount>
        </Wrapper>
      </Component>
    </Dialog>
  );
};

export default Logindialog;
