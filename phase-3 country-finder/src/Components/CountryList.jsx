import React from 'react'
import CountryCard from './CountryCard'


function CountryList({ countries}) { //from get data function we have data array which is filld with all countries
  return (
    <div className='flex justify-around'>
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
  