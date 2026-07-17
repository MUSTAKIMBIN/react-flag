import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const allCountries = use(countriesPromise);
  const countries = allCountries.countries;
  return (
    <div>
      <h2>Countries page {countries?.length} total countries</h2>
      <div id="countres-container">
        {countries.map((country, idx) => (
          <Country country={country} key={idx}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
