import React from 'react';

const Country = ({ country }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        style={{ width: '100px', height: 'auto' }}
      />
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
      <p><strong>Continent:</strong> {country.continents[0]}</p>
      <p><strong>Sub-region:</strong> {country.subregion || 'N/A'}</p>
    </div>
  );
};

export default Country;
