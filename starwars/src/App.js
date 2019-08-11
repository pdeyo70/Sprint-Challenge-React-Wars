import React, { useState, useEffect } from 'react';
import CardCont from './components/CardCont';
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(() => {
  const fetchData = async() => {
    await axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        setData(res.data.results)
      })
  };
  fetchData()
},
[])

console.log(data)



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardCont data={data} />
    </div>)
}

export default App;
