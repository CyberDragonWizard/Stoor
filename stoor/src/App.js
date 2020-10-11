import React from 'react';
// import createItem from './CreateItem'
// import Inventory from './Inventory'
import Header from './header'
import Sidebar from './sidebar'
import './App.css';
import CustomizedTables from './InventoryForm';


function App() {
  return (
    
    <div className="App">

      <Header />
      <Sidebar />
      <CustomizedTables />

    </div>
  );
}

export default App;
