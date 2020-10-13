import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withTheme } from '@material-ui/styles';
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
          <MenuItem value={1}>Beer</MenuItem>
          <MenuItem value={2}>Wine</MenuItem>
          <MenuItem value={3}>Food</MenuItem>
          <MenuItem value={4}>Liquor</MenuItem>
          <MenuItem value={5}>Soft drink</MenuItem>
          <MenuItem value={6}>Clothing</MenuItem>
          <MenuItem value={7}>Toiletries</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}