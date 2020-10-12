import React from 'react';
// import createItem from './CreateItem'
import Header from './header'
import Sidebar from './sidebar'
import './App.css';
import InventoryForm from './InventoryMain';
import TextField from './CreateInventory'



function App() {
  return (
    
    <div className="App">
      <Header />
      <Sidebar />
      <InventoryForm />
      <TextField />
    </div>
  );
}

export default App;
