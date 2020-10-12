import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Update from './UpdateButton'
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import './App'
import 'fontsource-roboto';


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

const StyledTableRow = withStyles(() => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#e8e8e8',
    },
  },
}))(TableRow);

// function inventoryData(item, price, category, amount) {
//   return { item, price, category, amount };
// }

// const rows = [
//   inventoryData('Budlight (bottle)', '$11.99 (case)' , 'Beer', 8),
//   inventoryData('Budweiser (bottle)', '$11.99 (case)', 'Beer', 9),
//   inventoryData('Black Ankle', '$39.99 (bottle)', 'Wine', 5),
//   inventoryData('Lettuce', '$1.99 (head)', 'Food', 12),
//   inventoryData('Tomatoes', '$10.00 (box)', 'Food', 3),
// ];

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
    margin: '0 auto',
    
  },
  font: {
    fontFamily: 'Courier New, Courier, monospace !important',
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
            <StyledTableCell className={classes.font}>Item</StyledTableCell>
            <StyledTableCell className={classes.font} align="right">Price</StyledTableCell>
            <StyledTableCell className={classes.font} align="right">Category</StyledTableCell>
            <StyledTableCell className={classes.font} align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <StyledTableRow key={item.item}>
              <StyledTableCell component="th" scope="row">
                {item.item}
              </StyledTableCell>
              <StyledTableCell key={item.id} item={item} fetchItems={fetchItems} setFetchItems={setFetchItems} align="right">{item.price}</StyledTableCell>
              <StyledTableCell align="right">{item.category}</StyledTableCell>
              <StyledTableCell align="right">{item.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
      
    </TableContainer>
    <Update />
    </div>
  )
}

export default InventoryForm;