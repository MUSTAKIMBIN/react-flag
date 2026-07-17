import React from "react";

const Country = ({ country }) => {
  const { name, population, flags, region } = country;
  console.log(country);
  return (
    <div id="country-container">
      <div>
        <img src={flags.flags.png} alt={flags.flags.alt} />
      </div>
      <h2>{name.common}</h2>
      <p>Total Population : {population.population}</p>
      <p>region : {region.region}</p>
    </div>
  );
};

export default Country;
