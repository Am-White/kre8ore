import React from 'react';
import '../App.css';
import { Container, Typography, Box } from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Streams from '../images/streams.png'; 

/*JUKEHOST- EMAILJS- NAVIGATION- SCROLL- FOOTER*/
const audioSource1 = [
  { src: "https://audio.jukehost.co.uk/f2fS9fqzHnghisEsRH48SJDsPU59xFOm", title: "In God V.3" },
  { src: "http://example.com/audio2.mp3", title: "Audio Track 2" },
  { src: "http://example.com/audio3.mp3", title: "Audio Track 3" },
  { src: "http://example.com/audio4.mp3", title: "Audio Track 4" },
  { src: "http://example.com/audio5.mp3", title: "Audio Track 5" }
];

const audioSource2 = [
  { src: "http://example.com/audio2.mp3", title: "Audio Track 1" },
  { src: "http://example.com/audio2.mp3", title: "Audio Track 2" },
  { src: "http://example.com/audio3.mp3", title: "Audio Track 3" },
  { src: "http://example.com/audio4.mp3", title: "Audio Track 4" },
  { src: "http://example.com/audio5.mp3", title: "Audio Track 5" }
];

const audioSource3 = [
  { src: "http://example.com/audio2.mp3", title: "Audio Track 1" },
  { src: "http://example.com/audio2.mp3", title: "Audio Track 2" },
  { src: "http://example.com/audio3.mp3", title: "Audio Track 3" },
  { src: "http://example.com/audio4.mp3", title: "Audio Track 4" },
  { src: "http://example.com/audio5.mp3", title: "Audio Track 5" }
];

const audioSource4 = [
  { src: "http://example.com/audio2.mp3", title: "Audio Track 1" },
  { src: "http://example.com/audio2.mp3", title: "Audio Track 2" },
  { src: "http://example.com/audio3.mp3", title: "Audio Track 3" },
  { src: "http://example.com/audio4.mp3", title: "Audio Track 4" },
  { src: "http://example.com/audio5.mp3", title: "Audio Track 5" }
];

const audioSource5 = [
  { src: "http://example.com/audio2.mp3", title: "Audio Track 1" },
  { src: "http://example.com/audio2.mp3", title: "Audio Track 2" },
  { src: "http://example.com/audio3.mp3", title: "Audio Track 3" },
  { src: "http://example.com/audio4.mp3", title: "Audio Track 4" },
  { src: "http://example.com/audio5.mp3", title: "Audio Track 5" }
];

const MusicSection: React.FC = ({id}) => {
  return (
    <Container >
      <Box textAlign="center" sx={{ margin:'auto',maxWidth:{sm:'70%', md:'50%'}}}>
        <img src={Streams} alt="Example" style={{ width: '100%' }} />
      </Box>
      <Typography id={id} sx={{fontSize:{xs:'50px', sm:'70px', md:'90px'} }} gutterBottom textAlign="center" my="25px">
        Music
      </Typography>

      <div id="genre1" >
        <Typography variant="h5" gutterBottom textAlign="center" my="25px">Genre 1</Typography>
        {audioSource1.map((audio, index) => (
          <div key={index}>
            <h3>{audio.title}</h3>
            <AudioPlayer
              autoPlay={false} // autoPlay only the first one
              src={audio.src}
              onPlay={e => console.log(`Playing: ${audio.src}`)}
              style={{ background:'none', boxShadow: 'none'}}
              // other props here
            />
          </div>
        ))}
      </div>

      <div id="genre2">
        <Typography variant="h5" gutterBottom textAlign="center" my="25px" mt="60px">Genre 2</Typography>
        {audioSource2.map((audio, index) => (
          <div key={index}>
            <h3>{audio.title}</h3>
            <AudioPlayer
              autoPlay={false} // autoPlay only the first one
              src={audio.src}
              onPlay={e => console.log(`Playing: ${audio.src}`)}
              style={{ background:'none' }}
              // other props here
            />
          </div>
        ))}
      </div>
      
      <div id="genre3">
        <Typography variant="h5" gutterBottom textAlign="center" my="25px" mt="60px">Genre 3</Typography>
        {audioSource3.map((audio, index) => (
          <div key={index}>
            <h3>{audio.title}</h3>
            <AudioPlayer
              autoPlay={false} // autoPlay only the first one
              src={audio.src}
              onPlay={e => console.log(`Playing: ${audio.src}`)}
              style={{ background:'none' }}
              // other props here
            />
          </div>
        ))}
      </div>

      <div id="genre4">
        <Typography variant="h5" gutterBottom textAlign="center" my="25px" mt="60px">Genre 4</Typography>
        {audioSource4.map((audio, index) => (
          <div key={index}>
            <h3>{audio.title}</h3>
            <AudioPlayer
              autoPlay={false} // autoPlay only the first one
              src={audio.src}
              onPlay={e => console.log(`Playing: ${audio.src}`)}
              style={{ background:'none' }}
              // other props here
            />
          </div>
        ))}
      </div>

      <div id="genre5">
        <Typography variant="h5" gutterBottom textAlign="center" my="25px" mt="60px">Genre 5</Typography>
        {audioSource5.map((audio, index) => (
          <div key={index}>
            <h3>{audio.title}</h3>
            <AudioPlayer
              autoPlay={false} // autoPlay only the first one
              src={audio.src}
              onPlay={e => console.log(`Playing: ${audio.src}`)}
              style={{ background:'none' }}
              // other props here
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MusicSection;
