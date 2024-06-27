import React from "react";
import { CountryType } from "../types/CountryType";

interface CardType {
  country: CountryType;
}

const CountryCard: React.FC<CardType> = ({ country }) => {
  return (
    <div className="bg-white p-2 rounded-2xl cursor-pointer hover:scale-105">
      <img className="h-32 m-auto rounded-2xl" src={country.flags.png} alt="" />
      <div className="text-lg bold m-2">{country.name.common}</div>
      <div className="flex justify-end text-sm text-gray-500">{`in ${country.region}`}</div>
    </div>
  );
};

export default CountryCard;
