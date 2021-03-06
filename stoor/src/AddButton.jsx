import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      backgroundColor: '#c76b2e',
      color: 'white',
    },
  },
}));

const OutlinedButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button type='submit 'variant="outlined">Add to Inventory</Button>
      
    </div>
  );
}

export default OutlinedButton;