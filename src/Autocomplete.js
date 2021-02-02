import React, { useState } from "react";

const cities = ["Paris", "Marseille", "Lyon", "Poitiers"];

const Autocomplete = () => {
  const [suggestions, setSuggestions] = useState([]);

  const [userValue, setUserValue] = useState("");

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <input
        type="text"
        value={userValue}
        onChange={(e) => {
          setUserValue(e.target.value);
          setSuggestions(
            cities.filter((city) => {
              if (e.target.value[0] === city[0]) {
                return true;
              }
            })
          );
        }}
      />
      {suggestions.length > 0 && (
        <ul className={"autocompleteContainer"}>
          {suggestions.map((city) => (
            <li
              className={"autocompleteElement"}
              onClick={() => {
                setUserValue(city);
                setSuggestions([]);
              }}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Autocomplete;
