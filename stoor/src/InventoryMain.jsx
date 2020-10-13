import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Update from './UpdateButton'
import Checkbox from './Checkbox'
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import './App.css'
import 'fontsource-montserrat';


function InventoryForm() {
  const [items, setItems] = useState([]);
  const [fetchItems, setFetchItems] = useState();
  

  useEffect(() => {
    const getInventory = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inventory`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setItems(response.data.records);
    };
    getInventory();
  }, [fetchItems]);

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#c76b2e',
    color: 'white',
  
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    width: 800,
    maxHeight: 1000,
    marginLeft: '300px',
    marginTop: '100px',
    border: '1px solid black'
    

  },
  font: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
  },
});


  const classes = useStyles();

  return (
    <div> 
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell className={classes.font}></StyledTableCell>
            <StyledTableCell className={classes.font}>Item</StyledTableCell>
            <StyledTableCell className={classes.font} align="right">Price</StyledTableCell>
            <StyledTableCell className={classes.font} align="right">Category</StyledTableCell>
            <StyledTableCell className={classes.font} align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <StyledTableRow key={item.item}>
              <Checkbox />
              <StyledTableCell component="th" scope="row">
                {item.fields.item}
              </StyledTableCell>
              <StyledTableCell align="right">{item.fields.price}</StyledTableCell>
              <StyledTableCell align="right">{item.fields.category}</StyledTableCell>
              <StyledTableCell align="right">{item.fields.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
          
        </TableBody>
      </Table>
      <Update />
    </TableContainer>
    
    </div>
  )
}

export default InventoryForm;