import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';

const Info = (props) => {
  const { state } = useLocation();
  let episodeData = state.episode;
  return (
    <Card sx={{ width: 900, overflow: 'hidden', height: '1%', margin: '14px 250px 0 0' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: 'bold'}}>
              {episodeData.trackName}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
              {episodeData.description}
          </Typography>
          <Divider sx={{margin: '20px 0'}}/>
          <Typography variant="caption" color="text.secondary">
            <audio src={episodeData.episodeUrl} controls="controls"  preload="none"></audio>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>  
  );
}

export default Info;