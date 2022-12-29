import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBar from '../../components/listPodcasts/SearchBar';
import Item
  from './item';
const template = (component) => {

  const {
    data,
  } = component.state;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={12} className='grid-box'>
            <span>{data.length}</span>
            <SearchBar/>
          </Grid>
          {data.map((podcast, index) => (
            <Grid item md={3} key={index} className='grid-box'>
              <Item podcast={podcast}></Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default template;
