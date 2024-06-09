import React from 'react';
import { Typography, Box } from '@mui/material';
import { useEffect } from 'react';


const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <Box sx={{margin:{sm:'20px', md:'40px'}, textAlign:'center', marginTop:{xs:'100px', sm:'100px', md:'150px', lg:'150px'}}}> 
      <Typography className="hover-title" sx={{fontSize:{xs:'50px', sm:'70px', md:'90px'}, color:'red', '&:hover': {color:'red',cursor:'default'}}}>Zach Kendall</Typography>
      <Typography sx={{fontSize:{xs:'15px', sm:'20px'},fontFamily: 'garamond-regular', padding:{md:'20px', lg:'40px'}, marginBottom:'50px'}}> 
        A 25 year old self taught Musician, Producer, Composer, Writer and Mix Engineer living
        in Los Angeles. Over 12 years playing the guitar and 5 years full time in the music
        industry. I spend my time absorbing and channeling art that inspires me into a sort of
        organized noise.
        <br/>
        <br/>
        I started my creative journey as a young first grader obsessed with theatrical heavy
        music
        -
        especially slipknot. I would spend my summers obsessing over any interview,
        studio footage, live performance and production methods videos and
        books on my
        favorite bands. At the same time I was heavily into horror and big production movies
        and the SFX that brought them to life. Sculpting masks and costumes from various
        materials I found around the house or outside, I as well obsessed over bringing the
        theatrics to life in my own way. My love for the whimsical dark went hand in hand with
        my mothers love for Disney and Tim Burton movies, often playing them throughout the
        year. Family life was rough at times and taught me so much about being independent
        and looking inward for comfort and exploring how I felt through various arts when often
        there was no outlet. I became very emotionally aware from a young age and have since
        gained my own taste in how others capture and express their interpretations of
        these life
        experiences.
        <br/>
        <br/>
        I was introduced to the underground rap scene from a school friend and it quickly
        piqued my interest. I began learning music production and from my first few beats I
        gained some notice. I combined all the musical elements I grew up loving with heavy
        808s and trap drums. I carved out a unique style during the boom of the soundcloud era
        but quickly learned I wanted to do so much more. I started grabbing clips from some of
        my favorite films, animes, games, anything with intense moments, and muting them
        while I wrote my own scores. I finished my HS credits in a technical college called
        DigiPen where I learned the “school way” of sound design and basic theory. It only
        fueled the fire of wanting to combine my love of film, costume and visual art with my
        deep passion for music.
        <br/>
        <br/>
        Now I love to experiment with the fastly evolving production methods while
        simultaneously learning and practicing classic techniques. It's helped me stay grounded
        and give a bit of a smoother perspective on how the
        end consumer will take the
        evolution. I'm fascinated with blending genres in a natural feeling way while serving the
        art in a collaborative setting. I understand how to capture emotional themes and
        moments through sound design and writing, as well as the
        power of the basics like
        silence and simplicity. Some of the greatest films, video games, and moments in culture
        Kre8ore About.docx
        were colored with the art of the imaginary that is music and I hope to add my touch and
        help inspire the next wave of musicians as I was inspired.
      </Typography>
    </Box>
  );
};

export default AboutPage;
