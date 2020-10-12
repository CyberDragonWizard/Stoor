import React from 'react';
import Menu from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import './App.css';
import 'fontsource-montserrat';

const sidebar = () => {
    return (
        <div>
        <Menu class='appbar' position='static'>
            <Typography variant='h4'>
                Inventory
            </Typography>
        </Menu>
        </div>
        
    )
}

export default sidebar;