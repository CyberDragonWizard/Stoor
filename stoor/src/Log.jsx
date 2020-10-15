import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Update from './UpdateButton'
import LogDeleteIcon from './LogDeleteIcon'
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import './App.css'
import 'fontsource-montserrat';


function LogForm() {
  const [logs, setLog] = useState([]);
  const [fetchLog, setFetchLog] = useState(false);


  useEffect(() => {
    const getInventory = async () => {
      const airtableURL = `https://api.airtable.com/v0/appVQlG6hFTjjeMQ9/log`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setLog(response.data.records);
    };
    getInventory();
  }, []);

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#c76b2e',
    color: 'white',
    position: 'relative',
  
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
    maxHeight: 700,
    marginLeft: '300px',
    marginTop: '200px',
    overflow: 'auto',
    '@media(max-width: 1025px)': {
      width: 600,
      maxHeight: 800,
      marginLeft: '100px',
      marginTop: '200px',
    },
    '@media(max-width: 700px)': {
      width: '400px',
      marginLeft: '50px',

    }
  },
  font: {
    fontFamily: 'Montserrat',
    fontSize: '20px',
    '@media(max-width: 550px)': {
      fontSize: '12px',
    }
  },
});


  const classes = useStyles();

  return (
    <div>
      <form>
      <Paper elevation={3} className={classes.table}>
    <TableContainer>
      <Table className={classes.data} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell></StyledTableCell>
            <StyledTableCell className={classes.font}>Item</StyledTableCell>
            <StyledTableCell className={classes.font} align="right">Distributor</StyledTableCell>
            <StyledTableCell className={classes.font} align="right">Date</StyledTableCell>
            <StyledTableCell className={classes.font} align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log) => (
            <StyledTableRow key={log.log}>
              <LogDeleteIcon 
              key={log.id}
              log={log}
              fetchLog={fetchLog}
              setFetchLog={setFetchLog}
              />
              <StyledTableCell component="th" scope="row">
                {log.fields.item}
              </StyledTableCell>
              <StyledTableCell align="right">{log.fields.distributor}</StyledTableCell>
              <StyledTableCell align="right">{log.fields.date}</StyledTableCell>
              <StyledTableCell align="right">{log.fields.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
          
        </TableBody>
      </Table>
      
    </TableContainer>
    <Update/>
    </Paper> 
    </form>
    
    </div>
  )
}

export default LogForm;