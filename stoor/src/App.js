import React, { useState } from 'react';
import Header from './header'
import Sidebar from './sidebar'
import { Route } from 'react-router-dom';
import './App.css';
import InventoryForm from './InventoryMain';
import TextField from './CreateInventory';
import Log from './Log'
import InputLogs from './CreateLog'




function App() {

  const [fetchInventory, setFetchInventory] = useState(false);
  const [fetchLog, setFetchLog] = useState(false);

  return (
    <div className="App">
      
      <Header />
      <Sidebar />
      <Route exact path='/'>
      <div className="tables">
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
