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
    <Card sx={{ height: 500, margin: '10px 200px 0 200px', width: 1/4, flexGrow: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={podcastData.img}
          sx={{ width: 150, margin: '10px auto'}}
        />
        <Divider sx={{margin: '20px 0'}}/>
        <CardContent>
          <Typography gutterBottom variant="body1" component="div" sx={{fontWeight: 'bold'}}>
              {podcastData.title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            <div style={{fontStyle: 'italic'}}>by {podcastData.author}</div>
          </Typography>
          <Divider sx={{margin: '20px 0'}}/>
          <Typography variant="caption" color="text.secondary">
              <div style={{fontWeight: 'bold', fontSize: 14}}>Description:</div>
              <div style={{fontStyle: 'italic'}}>{podcastData.description}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>  
  );
}

export default Sidebar;