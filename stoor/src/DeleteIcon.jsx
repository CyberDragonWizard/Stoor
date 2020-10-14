import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes(props) {

  const [deleted, setDeleted] = useState();

  const handleDelete = async () => {
    setDeleted(true);
    setTimeout(async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inventory/${props.item.id}`;
      await axios.delete(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      props.setFetchInventory(!props.fetchInventory);
      setDeleted(false);
    }, 800);
  };
  const classes = useStyles();

  return (
    <div>
        <IconButton aria-label="delete" className={classes.margin} onClick={handleDelete}>
        {deleted}
          <DeleteIcon
          item={props.item}
          fetchInventory={props.fetchInventory}
          setFetchInventory={props.setFetchInventory}
           />
        </IconButton>
    </div>
  );
}