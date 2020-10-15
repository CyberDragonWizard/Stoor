import React from 'react';
import Menu from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import 'fontsource-montserrat';

const Sidebar = () => {
    const useStyles = makeStyles({

        font: {
        fontFamily: 'Montserrat',
        color: 'white',
        textDecoration: 'none',
        },
        text: {
        fontFamily: 'Montserrat',
        color: 'white',
        textDecoration: 'none',
        marginRight: '15px',
        fontSize: '17px'
        },
        nav: {
            display: 'flex',
            flexDirection: 'column',
            '@media(max-width: 1025px)': {
                flexDirection: 'row'
            }
        }
        

    });
        
    const classes = useStyles();

    return (
        <div>
        <Menu class='appbar' position='relative'>
            <Typography className={classes.font} variant='h5'>
                <nav className={classes.nav}>
                <Button className={classes.font} href="#text-buttons" color="primary">
                <Link className={classes.text} to='/'>Inventory</Link>
                </Button>
                <Button className={classes.font} href="#text-buttons" color="primary">
                <Link className={classes.text} to='/log'>LOG</Link>
                </Button>
                </nav>
            </Typography>
        </Menu>
        </div>
        
    )
}

export default Sidebar;