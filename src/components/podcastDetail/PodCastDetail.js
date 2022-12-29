import React from 'react';
import Sidebar from './Sidebar';
import { Box } from '@mui/material';
import ListEpisodes from './ListEpisodes';
const PodcastDetail = (props) => {
    return (
        <div style={{ width: '100%'}}>
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