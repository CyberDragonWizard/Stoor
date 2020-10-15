import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LogButton from './LogButton'
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

export default function InputLogs(props) {
  const [item, setItem] = useState();
  const [distributor, setDistributor] = useState();
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      item,
      distributor,
      date,
      amount,
    };
    const airtableURL = `https://api.airtable.com/v0/appVQlG6hFTjjeMQ9/log`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    props.setFetchLog(!props.fetchLog);
    setItem("");
    setDistributor("");
    setDate("");
    setAmount("");
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        
      <form className='inputbox' onSubmit={handleSubmit}>
      <h3>Log Item</h3>
        <TextField
          id="standard-full-width"
          value={item}
          label="Ordered Item"
          style={{ margin: 8 }}
          placeholder="Ordered Item"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setItem(e.target.value)}
        />
        <TextField
          id="standard-full-width"
          value={distributor}
          label="Distributor"
          style={{ margin: 8 }}
          placeholder="Distributor"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setDistributor(e.target.value)}
        />
        <TextField
          id="standard-full-width"
          value={date}
          label="Date"
          style={{ margin: 8 }}
          placeholder="Date Ordered"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setDate(e.target.value)}
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
        <LogButton type='submit'/>
        
      </form>
      </Paper>
    </div>
  );
}