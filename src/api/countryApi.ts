import axios from "axios";
import { CountryType } from "../types/CountryType";

const getCountryList = async (): Promise<CountryType[]> => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
};

export { getCountryList };
