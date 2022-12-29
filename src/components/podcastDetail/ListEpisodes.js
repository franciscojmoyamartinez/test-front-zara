import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import listReq from '../../api/getListEpisodes';
import moment from 'moment';

const ListEpisodes = (props) => {
  const [arrayEpisodes, setEpisodes] = React.useState(null);
  const { state } = useLocation();
  let podcastData = state.podcast;

  useEffect(() => {
    listRequest(podcastData.podcastId);
  }, [podcastData.podcastId]);

  let listRequest = (id) => {
    listReq(id)
      .then((res) => {
        let arrayDDD = res.data.results;
        arrayDDD.shift();
        setEpisodes(arrayDDD);
      })
      .catch(() => {
      });
  };
  let milisegundosAHoras = (trackTimeMillis) => {
    let seconds = Math.floor(trackTimeMillis / 1000);
    let minutes = Math.floor(seconds / 60);
    return `${minutes}:00`;
  }

  return (

    <Card sx={{ width: 900, margin: '14px 250px 0 0' }}>
      <CardContent className='css-11xur9t-MuiPaper-root-MuiTableContainer-root'>
        <Typography gutterBottom variant="body1" component="div" sx= {{ fontWeight: 'bold'}}>
            Episodes: {Array.isArray(arrayEpisodes) ? arrayEpisodes.length : 0}
        </Typography>
      </CardContent>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className="prueba" size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold'}}>Title</TableCell>
                <TableCell sx={{ fontWeight: 'bold'}}>Date</TableCell>
                <TableCell sx={{ fontWeight: 'bold'}}>Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {Array.isArray(arrayEpisodes)
            ? arrayEpisodes.map((row) => (
              <TableRow key={row.trackId}>
              <TableCell component="th" scope="row">
                  <Link to={`/podcast/${podcastData.podcastId}/episode/${row.trackId}`} 
                        state={{ podcast: podcastData, episode: row }}
                        style={{ textDecoration: 'none' }}
                        >{row.trackName}</Link>
              </TableCell>
              <TableCell>{moment(row.releaseDate).format('DD/MM/YYYY')}</TableCell>
              <TableCell>{milisegundosAHoras(row.trackTimeMillis)}</TableCell>
              </TableRow>
            )): null}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default ListEpisodes;