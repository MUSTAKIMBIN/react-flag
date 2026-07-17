import React, { useState } from "react";

const Country = ({ country, totalVisited, setTotialVisted }) => {
  const { name, population, flags, region } = country;
  //   console.log(country);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    if (visited) {
      setTotialVisted(totalVisited - 1);
    } else {
      setTotialVisted(totalVisited + 1);
    }
    setVisited(!visited);
  };
  return (
    <div id="country-container" className={`${visited && "visited"}`}>
      <div>
        <img src={flags.flags.png} alt={flags.flags.alt} />
      </div>
      <h2>{name.common}</h2>
      <p>Total Population : {population.population}</p>
      <p>region : {region.region}</p>
      <button onClick={handleVisited}>
        {visited ? "Visted" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
