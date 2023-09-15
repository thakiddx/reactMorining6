import React, { useState } from 'react';
import './App.css'

function HouseDisplay({ houses }) {
  return (
    <div>
      {houses.map((house, index) => (
        <div key={index}>
          <h2>{house.name}</h2>
          <p>Address: {house.address}</p>
          <p>Price: ${house.price}</p>
          <p>Status: {house.isSold ? 'Sold' : 'Available'}</p>
        </div>
      ))}
    </div>
  );
}

  function Home() {
    const  [houses, setHouses] = useState([
      {
        name: 'Lakeside Villa',
        address: '123 Lake St, Watertown, MA',
        price: 1000000,
        isSold: false,
      },
      {
        name: 'Mountain Retreat',
        address: '456 Mountain Rd, Boulder, CO',
        price: 750000,
        isSold: true,
      },
      {
        name: 'Downtown Apartment',
        address: '789 Main St, Seattle, WA',
        price: 500000,
        isSold: false,
      },
    ]);
  
  
    return (
      <div>
        <h1>Welcome to My House Listings</h1>
        <HouseDisplay houses={houses} />
      </div>
    );
  }

  function App() {
    return (
      <div className='App'>
        <Home />
      </div>
    );
  }
 

export default App;
