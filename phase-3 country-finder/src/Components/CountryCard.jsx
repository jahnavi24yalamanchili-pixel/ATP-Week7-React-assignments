import React from "react";

function CountryCard({ country }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "200px" }}>
      
      <img
        src={country.flags.png}
        alt={country.name.common}
        width="100%"
      />

      <h3>{country.name.common}</h3>

      <p><strong>Capital:</strong> {country.capital?.[0]}</p>

      <p><strong>Population:</strong> {country.population}</p>

      <p><strong>Region:</strong> {country.region}</p>

    </div>
  );
}

export default CountryCard;

