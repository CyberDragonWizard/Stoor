import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: '#c76b2e',
    },
  },
}));

const OutlinedButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">Update</Button>
      
    </div>
  );
}

export default OutlinedButtons;