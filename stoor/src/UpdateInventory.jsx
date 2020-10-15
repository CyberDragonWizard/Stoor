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
    marginTop: '300px'
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
    await axios.put(
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
 handleSubmit();
}