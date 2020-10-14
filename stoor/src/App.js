import React, { useState, useEffect } from 'react';
import Header from './header'
import Sidebar from './sidebar'
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import InventoryForm from './InventoryMain';
import TextField from './CreateInventory';
import Log from './Log'
import InputLogs from './CreateLog'




function App() {
  const [inventory, setInventory] = useState([]);
  const [fetchInventory, setFetchInventory] = useState(false);
  const [fetchLog, setFetchLog] = useState(false);

  useEffect(() => {
    const getInventory = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inventory`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setInventory(response.data.records);
    };
    getInventory();
  }, [fetchInventory]);
  return (
    <div className="App">
      
      <Header />
      <Sidebar />
      <Route exact path='/'>
      <div class="tables">
        <div>
      <InventoryForm
        fetchInventory={fetchInventory}
        setFetchInventory={setFetchInventory}
       />
       </div>
       <div>
      <TextField 
      fetchInventory={fetchInventory}
      setFetchInventory={setFetchInventory}
      />
      </div>
      </div>
      </Route>
    <Route exact path='/log'>
      <div class='tables'>
        <div>
      <Log
      fetchLog={fetchLog} 
      setFetchLog={setFetchLog}
      />
      </div>
      <div>
        <InputLogs 
        fetchLog={fetchLog} 
        setFetchLog={setFetchLog}
        />
      </div>
      </div>
    </Route>
    

    </div>
  );
}

export default App;
