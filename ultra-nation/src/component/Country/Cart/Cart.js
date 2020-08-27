import React from 'react';

const Cart = (props) => {
    const count=props.countryCount;
    //const totalPopulation=count.reduce((total,country)=>total+ country.population,0);
    let totalPopulation=0;
    for(let i=0; i<count.length;i++){
        const country=count[i];
        totalPopulation=country.area+totalPopulation;
    }
    return (
        <div>
            <h2>This Cart : {count.length}</h2>
    <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;