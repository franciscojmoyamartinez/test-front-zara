import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import '../../components/listPodcasts/list.css'
const Item = (data) => {
  const { podcast } = data;

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '200px',
    height: '100px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    fontSize: '12px',
  }));
  const Span = styled('span')({
    display: 'block',
  });
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    position: 'relative',
    maxWidth: '100px',
    borderRadius: '50%',
    top: '20px',
  });
  return (
    <Link to={`/podcast/${podcast.podcastId}`} 
          state={{ podcast }}
          style={{ textDecoration: 'none' }}
          >
      <div className='box-div'>
        <Img src={podcast.img}></Img>
        <Item>
          <Span sx={{ fontWeight: 'bold'}}>{podcast.title}</Span>
          <Span>Author: {podcast.author}</Span>
        </Item>
      </div>
    </Link> 
  );
};

export default Item;
