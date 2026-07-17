import React, { Suspense } from "react";
import Countries from "./Components/countries/Countries";

const countriesPromise = fetch(
  `https://openapi.programming-hero.com/api/all`,
).then((res) => res.json());

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
};

export default App;
