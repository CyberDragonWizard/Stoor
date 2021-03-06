import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddButton from './AddButton'
import Paper from '@material-ui/core/Paper'; 
import './App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '30px',
    color: 'black',
    marginRight: '100px',
    marginTop: '300px',
    '@media(max-width: 865px)': {
      marginTop: '20px',
      marginLeft: '120px'
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '20px',
  },
}));

export default function LayoutTextFields(props) {
  const [item, setItem] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [amount, setAmount] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      item,
      price,
      category,
      amount,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inventory`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    props.setFetchInventory(!props.fetchInventory);
    setItem("");
    setPrice("");
    setCategory("");
    setAmount("");
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        
      <form className='inputbox' onSubmit={handleSubmit}>
      <h3>Create Item</h3>
        <TextField
          id="standard-full-width"
          value={item}
          label="Item"
          style={{ margin: 8 }}
          placeholder="New Item"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setItem(e.target.value)}
        />
        <TextField
          id="standard-full-width"
          value={price}
          label="Price"
          style={{ margin: 8 }}
          placeholder="Price"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          id="standard-full-width"
          value={category}
          label="Category"
          style={{ margin: 8 }}
          placeholder="Category"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          id="standard-full-width"
          value={amount}
          label="Amount"
          style={{ margin: 8 }}
          placeholder="Amount"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setAmount(e.target.value)}
        />
        <AddButton type='submit'/>
        
      </form>
      </Paper>
    </div>
  );
}