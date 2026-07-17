import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const allCountries = use(countriesPromise);
  const countries = allCountries.countries;
  const [totalVisited, setTotialVisted] = useState(0);
  return (
    <div>
      <h2>Countries page {countries?.length} total countries</h2>
      <h3>Total Visted Countries : {totalVisited}</h3>
      <div id="countres-container">
        {countries.map((country, idx) => (
          <Country
            country={country}
            totalVisited={totalVisited}
            setTotialVisted={setTotialVisted}
            key={idx}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
