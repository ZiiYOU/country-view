import React from "react";
import { CountryType } from "../types/CountryType";

interface CardType {
  country: CountryType;
}

const CountryCard: React.FC<CardType> = ({ country }) => {
  return (
    <div>
      <img src={country.flags.png} alt="" />
      <div>{country.name.common}</div>
      <div>{`in ${country.region}`}</div>
    </div>
  );
};

export default CountryCard;
