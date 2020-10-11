import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
    render() {
        const inventory = this.state.inventory;
        const render = inventory.map((airtable, index) => 
        <div> 
        <h3>{airtable.fields.item}</h3>
        <h2>{airtable.fields.price}</h2>
        <h2>{airtable.fields.category}</h2>
        <h2>{airtable.fields.amount}</h2>
        <h2>{airtable.fields.amount}</h2>
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