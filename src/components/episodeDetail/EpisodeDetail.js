import React from 'react';
import Sidebar from '../podcastDetail/Sidebar';
import { Box } from '@mui/material';
import Info from './Info';
import BreadCrumb from '../common/BreadCrumb';
const EpisodeDetail = (props) => {
    return (
        <div style={{ width: '100%'}}>
          <BreadCrumb />
          <Box
            sx={{ display: 'flex', p: 1, borderRadius: 1 }}
          >
            <Sidebar />
            <Info />
          </Box>
        </div>
    );
}

export default EpisodeDetail;