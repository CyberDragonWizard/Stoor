import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';





const header = () => {
    
// const useStyles = makeStyles({

//     table: {
//     maxWidth: 1200,
//     margin: '0 auto',
//           },
//     font: {
//     fontFamily: 'Courier New, Courier, monospace !important',
//     fontSize: '15px',
//     },
// });

// const classes = useStyles();

    return(
        <AppBar class='header'>
            <Typography variant='h2'>
                Stoor
            </Typography>
        </AppBar>
    )
}

export default header;