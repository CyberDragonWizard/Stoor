import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import './App'
import 'fontsource-roboto';

class Inventory extends Component {
    constructor() {
        super();
        this.state= {
            inventory: []
        }
    }
    async inventoryList () {
        const airTableUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inventory`;
        const response = await axios.get(airTableUrl, {
            headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}` },
        });
        this.setState ({ inventory: response.data.records })
    }
    async componentDidMount() {
        await this.inventoryList()
    }

    const StyledTableCell = withStyles(() => ({
        head: {
          backgroundColor: '#c76b2e',
          color: 'white',
          borderTopLeftRadius: '2px',
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles(() => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#e3e3e3',
          },
        },
      }))(TableRow);
    render() {
        const inventory = this.state.inventory;
        const render = inventory.map((airtable, index) => 
        <div> 
        {/* <h3>{airtable.fields.item}</h3>
        <h2>{airtable.fields.price}</h2>
        <h2>{airtable.fields.category}</h2>
        <h2>{airtable.fields.amount}</h2> */}
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
          {rows.map((row) => (
            <StyledTableRow key={row.item}>
              <StyledTableCell component="th" scope="row">
                {row.item}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
        
        )
        return (
          <div>
              {render}
          </div>
        );
      }
}

export default Inventory;