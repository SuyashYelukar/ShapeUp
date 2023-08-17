import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="30px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      {/* <img src="" alt="ShapeUp" style={{ width: '200px', height: '41px' }} /> */}
      <h1>ShapeUp</h1>
    </Stack>
    <Typography   mt="41px" textAlign="center" pb="10px">Contact No : +91-9131469783</Typography>
    <Typography   textAlign="center" pb="40px">Email : suyashyelukar2001@gmail.com</Typography>
  </Box>
);

export default Footer;