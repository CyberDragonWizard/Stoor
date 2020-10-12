import React, { useState } from "react";
import axios from "axios";

function UpdateReview(props) {
  const [item, setItem] = useState(props.inventory.fields.item);
  const [price, setPrice] = useState(props.inventory.fields.price);
  const [category, setCategory] = useState(props.inventory.fields.author);
  const [amount, setAmount] = useState(props.inventory.fields.amount);

  const handleSubmit = async (e) => {
    // prevent page reload.
    e.preventDefault();
    // we have to make a fields object that holds the item, text and author
    const fields = {
      item,
      price,
      category,
      amount,
    };
    // make a POST request to our endpoint to create new data
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/inventory/${props.inventory.id}`;
    // await axios.methodName(URL, request.body??, options)
    await axios.put(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    // make another GET request?????
    props.setFetchItems(!props.fetchItems);
    // clear out our inputs so we can type something new in
    setItem("");
    setPrice("");
    setCategory("");
    setAmount("");
  };

  return (
    <form className="update-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        type="text"
        placeholder="title"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <label htmlFor="text">Text:</label>
      <input
        name="text"
        type="text"
        placeholder="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="author">Author:</label>
      <input
        name="author"
        type="text"
        placeholder="author"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">HAHA NICE</button>
    </form>
  );
}

export default UpdateReview;