import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import 'fontsource-roboto';

const header = () => {
    return (
        <div>
        <AppBar class='appbar' position='static'>
            <Typography variant='h2'>
                Stoor
            </Typography>
        </AppBar>
        </div>
        
    )
}

export default header;