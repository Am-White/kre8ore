import React from 'react';
import { Typography } from '@mui/material';
import MusicSection from './MusicSection.tsx';
import VideoSection from './VideoSection.tsx';
import ContactSection from './ContactSection.tsx';

const MainPage = () => {
  return (
    <main color="white" >
    <div style={{height:"100vh"}}>
      <Typography className="hover-title" gutterBottom textAlign="center" my="25px" mt="100px" sx={{fontSize:{xs:'80px', sm:'100px', md:'120px'}, color:'white', '&:hover': {color: 'red',cursor:'default'},  letterSpacing: '4px', }}>
        Kre8ore
      </Typography>
    </div>
      <MusicSection id="music"/>
      <VideoSection id="videos"/>
      <ContactSection id="contact"/>
    </main>
  );
};

export default MainPage;
