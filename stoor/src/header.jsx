import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import 'fontsource-montserrat';





function Header() {
    
const useStyles = makeStyles({

    font: {
    fontFamily: 'Montserrat',
    },
});
    
const classes = useStyles();
    
    return(
        <AppBar class='header'>
            <Typography className={classes.font} variant='h2'>
                Stoor
            </Typography>    
        </AppBar> 
    )
}

export default Header;