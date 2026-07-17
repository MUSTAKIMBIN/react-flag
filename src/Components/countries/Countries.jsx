import React, { use } from "react";

const Countries = ({ countriesPromise }) => {
  const allCountries = use(countriesPromise);
  const countries = allCountries.countries;
  return (
    <div>
      <h2>Countries page {countries?.length} total countries</h2>
      <div id="country-container"></div>
    </div>
  );
};

export default Countries;
