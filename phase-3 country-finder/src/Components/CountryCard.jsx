import React from "react";

function CountryCard({ country }) {
  return (
    <div className="border rounded shadow p-3 bg-white">
      
      <img className="w-full h-32 object-cover mb-2"
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

