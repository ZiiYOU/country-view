import React, { useState } from "react";
import { getCountryList } from "../api/countryApi.ts";
import { CountryType } from "../types/CountryType.ts";
import CountryCard from "./CountryCard.tsx";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const getCountryData = async () => {
    try {
      const data: CountryType[] = await getCountryList();
      setCountries(data);
      console.log(data);
    } catch (error) {
      console.log("error =>", error);
    }
  };

  getCountryData();
  return (
    <>
      <div>Country</div>
      <div>
        {countries.map((country: CountryType) => {
          return <CountryCard key={country.name.common} country={country} />;
        })}
      </div>
    </>
  );
};

export default CountryList;
