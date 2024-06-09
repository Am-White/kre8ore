import React from 'react';
import { Container, Typography, Link, Box, Grid } from '@mui/material';
import { GiCrossedSwords } from "react-icons/gi";

const Footer: React.FC = () => {
  return (
    <Container sx={{paddingTop:'50px'}}>
      <Box variant="body2" color="red" align="center">
        <Typography variant="h4" >Kre8ore</Typography >
        <Typography variant="body" > "s kafhds kja lfhiew qpg hej iwqp" - fdsafdsa fdsf</Typography >
        <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 12, md: 12 }} sx={{fontFamily: 'garamond-regular', paddingTop:'25px'}}>
          <Grid item xs={4}>
            <Link href="/privacy-policy" sx={{ textDecorationColor:'red', color:'red'}}> Privacy Policy </Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/terms" sx={{ textDecorationColor:'red', color:'red'}}> Terms of use</Link>
          </Grid>
          <Grid item xs={4}>
            <Link href="/accessibility" sx={{ textDecorationColor:'red', color:'red'}}> Accessibility Statement </Link>
          </Grid>
        </Grid>
        <Typography sx={{fontFamily: 'garamond-regular', marginTop:'10px'}}> © Kre8ore Productions 2024</Typography>
        <Box sx={{ marginTop: '10px', marginBottom: '-20px' }}>
          <Typography sx={{ letterSpacing: '2px', textAlign: 'center' }}>
            <Box className='hidden-credits' sx={{ display: 'inline-flex', alignItems: 'center' }}>
                <GiCrossedSwords size='20px' style={{ marginRight: '10px' }} />
                Website created by Amethyst White
                <GiCrossedSwords size='20px' style={{ marginLeft: '10px' }}  />
            </Box>
          </Typography>
        </Box>

      </Box>
    </Container>
  );
};

export default Footer;
