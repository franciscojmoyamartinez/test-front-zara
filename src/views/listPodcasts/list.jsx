import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

const template = (component) => {
    const { classes } = component.props;
    const {
        data,
    } = component.state;
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {data.map( (podcast, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item>{podcast.name.label}</Item>
                </Grid>
            ))}
            </Grid>
        </Box>
    );
};

export default template;
