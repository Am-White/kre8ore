// ContactForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import emailjs from 'emailjs-com';
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { SiGenius } from "react-icons/si";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID'         // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log(result.text);
      setSuccess(true);
      setError(false);
    }, (error) => {
      console.log(error.text);
      setSuccess(false);
      setError(true);
    });
  };

  return (
    <>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', maxWidth: 800, margin: 'auto' }}
    >
      <Typography id="contact" sx={{fontSize:{xs:'50px', sm:'70px', md:'90px'} }} gutterBottom textAlign="center" my="25px">Contact</Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
        InputLabelProps={{ style: { color: 'white', fontSize: '25px' } }}
        InputProps={{ style: { backgroundColor: 'rgba(00, 00, 00, 0.7)', fontSize: '20px', fontFamily: 'garamond-regular', paddingTop: '10px' } }}
        variant="filled" color="error" focused 
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
        InputLabelProps={{ style: { color: 'white', fontSize: '25px' } }}
        InputProps={{ style: { backgroundColor: 'rgba(06, 06, 06, 0.7)', fontSize: '20px', fontFamily: 'garamond-regular', paddingTop: '10px'  } }}
        variant="filled" color="error" focused 
      />
      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        margin="normal"
        required
        multiline
        rows={4}
        InputLabelProps={{ style: { color: 'white', fontSize: '25px' } }}
        InputProps={{ style: { backgroundColor: 'rgba(06, 06, 06, 0.7)', fontSize: '20px', fontFamily: 'garamond-regular', marginTop: '10px'  } }}
        variant="filled" color="error" focused 
      />
      <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor:'rgba(206, 206, 206, 0.3)', '&:hover': {backgroundColor: 'red'} }}>
        Send
      </Button>
      {success && <Typography color="green" sx={{ mt: 2 }}>Message sent successfully!</Typography>}
      {error && <Typography color="red" sx={{ mt: 2 }}>Failed to send message. Please try again.</Typography>}
    </Box>
    <Box>
    <Grid container columns={{ xs: 12 }} sx={{textAlign:'center', justifyContent:'space-between', margin:'auto', width: '100%', marginTop: {xs:'50px', md:'100px'}, marginBottom: '50px'}}>
      <Grid item xs={2} sm={2} md={2}>
        <a title="TikTok" href="https://www.tiktok.com/@kre8ore" style={{textDecoration: 'none'}}>
      <AiFillTikTok size = '60px' style={{color:"white"}}/>
      </a>
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
      <a title="Genius" href="/" style={{textDecoration: 'none'}}>
      <SiGenius size = '60px' color="white"/>
      </a>
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
      <a title="Instagram" href="https://www.instagram.com/kre8ore?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" style={{textDecoration: 'none'}}>
      <FaSquareInstagram size = '60px' color="white"/>
      </a>
      </Grid>
      <Grid item xs={2} sm={2} md={2}>
      <a title="Spotify" href="https://open.spotify.com/playlist/0m3Zqb5Whw3yNUvay9k7g8?si=PAfNFCH7R3uk87cMOsMAoQ&pi=u-aUePah_GRxud&nd=1&dlsi=19da009660e94f64" style={{textDecoration: 'none'}}>
      <FaSpotify size = '60px' color="white"/>
      </a>
      </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default ContactSection;