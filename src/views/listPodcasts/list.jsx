import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBar from '../../components/listPodcasts/SearchBar';
import Item
  from './item';
import BreadCrumb from '../../components/common/BreadCrumb';
import { CircularProgress } from '@mui/material';
const template = (component) => {
  const {
    data
  } = component.state;
  return (
    <div>
      <BreadCrumb />
      {data.length == 0 ?
        <CircularProgress sx={{ width: '20px !important', height: '20px !important', position: 'absolute', right: '100px', top: 20}}/>
       : ''}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={12} className='grid-box' sx={{ display: 'flex', justifyContent: 'flex-end', margin: '20px 80px'}}>
            <span style={{ backgroundColor: '#4570b4', color: '#fff', borderRadius: '25%', width: '28px', height: '20px', padding: '5px', marginRight: '10px', textAlign: 'center', fontWeight: 'bold'}}>{data.length}</span>
            <SearchBar keyword="Filter Podcast..."/>
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
