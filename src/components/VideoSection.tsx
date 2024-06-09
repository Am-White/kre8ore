import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import ReactPlayer from 'react-player';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
}

const VideoSection: React.FC<YouTubeVideoProps> = ({ videoId, title, id }) => {
  return (
    <Container>
      <Typography id={id} sx={{fontSize:{xs:'50px', sm:'70px', md:'90px'} }} gutterBottom textAlign="center" my="25px" mt="150px">
        Videos
      </Typography>
     
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: '40px' }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=akPbu6TOx2E`}
        frameBorder="0"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: '40px' }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=YDk8UJt0_8c`}
        frameBorder="0"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: '40px'}}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=rMsqlkdEnEU`}
        frameBorder="0"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: '150px'}}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=HltALJQI47g`}
        frameBorder="0"
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    </div>
    </Container>
  );
};

export default VideoSection;
