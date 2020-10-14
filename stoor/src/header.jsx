import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import Typography from '@material-ui/core/Typography';
import 'fontsource-montserrat';





function Header() {
    
const useStyles = makeStyles({

    font: {
    fontFamily: 'Montserrat',
    letterSpacing: '5px'
    },
    icon: {
        fontSize: '60px',
        marginTop: '10px',
        marginRight: '20px'

    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});
    
const classes = useStyles();
    
    return(
        <AppBar class='header'>
            <div className={classes.div}>
            <FormatListBulletedOutlinedIcon className={classes.icon}/>
            <Typography className={classes.font} variant='h2'>
                Store Manager
            </Typography>   
            </div> 
        </AppBar> 
    )
}

export default Header;