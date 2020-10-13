import React, { useState, useEffect } from 'react';
import Header from './header'
import Sidebar from './sidebar'
import './App.css';
import axios from 'axios';
import InventoryForm from './InventoryMain';
import TextField from './CreateInventory';




function App() {
  const [inventory, setInventory] = useState([]);
  const [fetchInventory, setFetchInventory] = useState(false);

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

    </div>
  );
}

export default App;
