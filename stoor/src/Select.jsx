import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom'
import 'fontsource-montserrat';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  font : {
      color: 'white',
      fontFamily: 'Montserrat'
  }
}));

export default function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.font} htmlFor="grouped-select">CATEGORY</InputLabel>
        <Select className={classes.font} defaultValue="" id="grouped-select">
          <MenuItem value="">
              <em></em>
          </MenuItem>
          <MenuItem value={1}><Link to='/beer'>Beer</Link></MenuItem>
          <MenuItem value={2}><Link to='/wine'>Wine</Link></MenuItem>
          <MenuItem value={3}><Link to='/food'>Food</Link></MenuItem>
          <MenuItem value={4}><Link to='/liquor'>Liquor</Link></MenuItem>
          <MenuItem value={5}><Link to='/soft-drink'>Soft drink</Link></MenuItem>
          <MenuItem value={6}><Link to='/clothing'>Clothing</Link></MenuItem>
          <MenuItem value={7}><Link to='/toiletries'>Toiletries</Link></MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}