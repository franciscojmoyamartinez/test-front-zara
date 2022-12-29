import React from 'react';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';
import ListEpisodes from './ListEpisodes';
import BreadCrumb from '../common/BreadCrumb';
const PodcastDetail = (props) => {
    return (
        <div style={{ display: 'inline-block', width: '100%'}}>
          <BreadCrumb />
          <Box
            sx={{ display: 'flex', p: 1, borderRadius: 1 }}
          >
            <Sidebar />
            <ListEpisodes />
          </Box>
        </div>
    );
}

export default PodcastDetail;