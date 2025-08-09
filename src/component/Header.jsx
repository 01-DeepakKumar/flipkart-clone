// Header.jsx
import React from 'react';
import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)({
  backgroundColor: '#2874f0',
  height: 55,
});

const LogoContainer = styled(Box)({
  marginLeft: '12%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  lineHeight: 1,
});

const SubHeading = styled(Typography)({
  fontSize: 10,
  fontStyle: 'italic',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
});

const PlusImage = styled('img')({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const Wrapper = styled(Box)({
  marginLeft: 'auto', // Pushes it to the right
  display: 'flex',
  alignItems: 'center',
});

const Header = () => {
  const logoUrl =
    'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const plusIconUrl =
    'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader position="static">
      <Toolbar style={{ minHeight: 55, padding: '0 12%' }}>
        {/* Logo + Explore Plus */}
        <LogoContainer>
          <img src={logoUrl} alt="Flipkart" style={{ width: 75 }} />
          <Box display="flex" alignItems="center">
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
            </SubHeading>
            <PlusImage src={plusIconUrl} alt="Plus" />
          </Box>
        </LogoContainer>

        {/* Search Box */}
        <Search />

        {/* Right Side Buttons */}
        <Wrapper>
          <CustomButtons />
        </Wrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
