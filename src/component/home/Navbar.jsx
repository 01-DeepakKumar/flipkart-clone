import React from 'react';
import { navData } from '../../constants/data';
import { Box, styled, Typography } from '@mui/material';

const Component = styled(Box)({
  display: 'flex',
  margin: '55px 130px 0px 130px',
  justifyContent: 'space-between',
  textAlign: 'center',
});

const Container = styled(Box)({
  padding: '12px 8px',
});

const Text = styled(Typography)({
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'inherit',
});

const Navbar = () => {
  return (
    <Component>
      {navData.map(data => (
        <Container key={data.title}>
          <img src={data.url} alt={data.title} style={{ width: 64 }} />
          <Text>{data.title}</Text>
        </Container>
      ))}
    </Component>
  );
};

export default Navbar;
