import React from "react";

const Country = ({ country }) => {
  const { name, population } = country;
  return (
    <div id="country-container">
      <h2>{name.common}</h2>
      <p>Total Population : {population.population}</p>
    </div>
  );
};

export default Country;
