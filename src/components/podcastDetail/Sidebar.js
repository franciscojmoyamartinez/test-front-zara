import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';


const Sidebar = (props) => {
  const { state } = useLocation();
  let podcastData = state.podcast;
  
  return (
    <Card sx={{ width: 150, flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={podcastData.img}
          alt="green iguana"
          sx={{ width: 150, margin: '10px auto'}}
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
              {podcastData.title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
              by {podcastData.author}
          </Typography>
          <Divider />
          <Typography variant="caption" color="text.secondary">
              <strong>Description:</strong>
              {podcastData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
      
  );
}

export default Sidebar;