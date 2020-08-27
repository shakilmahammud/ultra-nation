import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flag,population,area,region}=props.country
   const handleAddCountry=props.handleAddCountry;
    return (
        <div className="country-container">
            <h3> Country name : {name}</h3>
            <img src={flag} alt=""/>
           <p>country Population :{population}</p>
    <p><small>Region : {region}</small></p>
            <p> Country Area :{area}</p>
            <button onClick={handleAddCountry}>Added</button>
        </div>
    );
};

export default Country;