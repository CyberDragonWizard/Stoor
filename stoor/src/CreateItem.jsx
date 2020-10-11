// import React, { Component } from 'react';
// import axios from 'axios';
// import './App.css';

// class createItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             item,
//             price,
//             cate
//         }

//     }
//     async handleSubmit(e) {
//         e.preventDefault();
//         const fields = {
//             item,
//             price,
//             category,
//             amount,
//         };

//         const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inventory`;

//         await axios.post(
//             airtableURL,
//             { fields },
//             {
//                 headers: {
//                   Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
//                 },
//               }
//         )
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label htmlFor='new-item'>New Item:</label>
//                 <input
//                     name='item'
//                     type='text'
//                     placeholder='Item'
//                     value={item}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//             </form>
//         )
//     }
// }

// export default createItem