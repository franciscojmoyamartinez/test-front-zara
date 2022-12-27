import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Item
 from './item';
const template = (component) => {
  const {
    data,
  } = component.state;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {data.map((podcast, index) => (
          <Grid item md={3} key={index} className='grid-box'>
            <Item podcast={podcast}></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default template;
