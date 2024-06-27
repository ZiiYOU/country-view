import React, { useEffect, useState } from "react";
import { getCountryList } from "../api/countryApi.ts";
import { CountryType } from "../types/CountryType.ts";
import CountryCard from "./CountryCard.tsx";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="text-3xl m-20">Country</div>
      <div className="grid grid-cols-2 grid-flow-row gap-8 md:grid-cols-4">
        {countries.map((country: CountryType) => {
          return <CountryCard key={country.name.common} country={country} />;
        })}
      </div>
    </>
  );
};

export default CountryList;
