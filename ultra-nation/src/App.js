import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './component/Country/Country';
import Cart from './component/Country/Cart/Cart';
function App() {
  const [countries,setCountries]=useState([]);
  const [countryCount,setCountryCount]=useState([]);
  const handleAddClick=(country)=>{
    const newCountryCount=[...countryCount,country];
    setCountryCount(newCountryCount);
  }
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
    .catch(error=>console.log(error));
},[])
  return (
    <div className="App">
      <h3 >countries Loaded : {countries.length}</h3>
  <h3>Country Added : {countryCount.length}</h3>
  <Cart countryCount={countryCount}></Cart>
      <ul>
  {countries.map(country=><Country country={country} key={country.alpa3Code} handleAddCountry={handleAddClick}></Country>)}
      </ul>

    </div>
  );
}

export default App;
