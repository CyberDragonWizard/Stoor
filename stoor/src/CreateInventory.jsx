import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import OutlinedButton from './AddButton'
import './App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '30px',
    color: 'black'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25px',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <div>
      <h3>Create Item</h3>
        <TextField
          id="standard-full-width"

          style={{ margin: 18 }}
          placeholder="New Item"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Item"
          style={{ margin: 18 }}
          placeholder="Price"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Item"
          style={{ margin: 18 }}
          placeholder="Category"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="standard-full-width"
          label="Item"
          style={{ margin: 18 }}
          placeholder="Amount"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <OutlinedButton />
      </div>
    </div>
  );
}