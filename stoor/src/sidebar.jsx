import React from 'react';
import Menu from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GroupSelected from './Select'
import './App.css';
import 'fontsource-montserrat';

const Sidebar = () => {
    const useStyles = makeStyles({

        font: {
        fontFamily: 'Montserrat',
        paddingTop: '30px',
        color: 'white',
        },
    });
        
    const classes = useStyles();

    return (
        <div>
        <Menu class='appbar' position='static'>
            <Typography className={classes.font} variant='h5'>
                <Button className={classes.font} href="#text-buttons" color="primary">
                Inventory
                </Button>
            </Typography>
            <GroupSelected className={classes.font}/>
        </Menu>
        </div>
        
    )
}

export default Sidebar;