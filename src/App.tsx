import React from "react";
import CountryList from "./components/CountryList";
import "./index.css";

const App = () => {
  return (
    <div className="grid place-items-center bg-slate-50 px-40">
      <CountryList />
    </div>
  );
};

export default App;
