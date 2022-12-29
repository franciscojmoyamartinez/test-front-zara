import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
        var arrayDDD = res.data.results;
        arrayDDD.shift();
        setEpisodes(arrayDDD);
      })
      .catch(() => {
      });
  };
  let milisegundosAHoras = (trackTimeMillis) => {
    let seconds = Math.floor(trackTimeMillis / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    return `${minutes}:00`;
  }

  return (

    <Card sx={{ width: 900 }}>
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
            Episodes: {Array.isArray(arrayEpisodes) ? arrayEpisodes.length : 0}
        </Typography>
      </CardContent>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className="prueba" size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

            {Array.isArray(arrayEpisodes)
            ? arrayEpisodes.map((row) => (
              <TableRow key={row.trackId}>
              <TableCell component="th" scope="row">
                  {row.trackName}
              </TableCell>
              <TableCell align="right">{moment(row.releaseDate).format('DD/MM/YYYY')}</TableCell>
              <TableCell align="right">{milisegundosAHoras(row.trackTimeMillis)}</TableCell>
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