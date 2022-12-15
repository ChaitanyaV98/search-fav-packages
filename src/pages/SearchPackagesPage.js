import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchPackagesPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [favPackages, setFavPackages] = useState([]);
  const [favDescription, setFavDescription] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleDescription = (event) => {
    setFavDescription(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favPackages));
  }, [favPackages]);

  useEffect(() => {
    if (query) {
      try {
        axios
          .get("https://api.npms.io/v2/search", {
            params: {
              q: query,
              size: 25,
            },
          })
          .then((response) => {
            setResults(response.data.results);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (e) {
        console.log("ERRORRRRR", e);
      }
    }
  }, [query]);
  return (
    <div className="px-10">
      <Button
        classNames={"mt-8"}
        label={<KeyboardBackspaceIcon />}
        onClick={() => navigate("/")}
      />
      <div className="mt-10">
        <label htmlFor="query">Search for NPM Packages</label>
        <input
          id="query"
          type="text"
          value={query}
          className={
            "border-2 border-slate-400 w-full outline-none p-2 rounded"
          }
          onChange={handleQueryChange}
          placeholder="Search for npm packages here"
        />
      </div>

      <p className="font-bold my-4">Results of Search</p>

      {results.length === 0 ? (
        <label>Currently there are no packages available</label>
      ) : (
        <ul>
          <div className="overflow-y-scroll h-36 items-center justify-items-center ">
            {results.map((result, index) => (
              <div className="flex gap-2 " key={index}>
                <input
                  // type="radio"
                  type="checkbox"
                  value={result.package.name}
                  id={result.package.name}
                  name={result.package.name}
                  onChange={({ currentTarget: { value } }) => {
                    setFavPackages([...favPackages, value]);
                  }}
                />
                <li key={result.package.name}>
                  <a href={result.package.links.npm}>{result.package.name}</a>
                </li>
              </div>
            ))}
          </div>
          {favPackages?.length > 0 ? (
            <div className="mt-8">
              <label>Why is this your Favorite? </label>
              <textarea
                label="Why is this your fav?"
                rows={4}
                onChange={handleDescription}
                className="border-2 flex-start border-slate-400 w-full outline-none  rounded p-2"
              />
            </div>
          ) : null}

          <div className="flex flex-1 justify-end">
            <Button
              label="Submit"
              onClick={() => {
                if (favPackages.length === 0 || favDescription === "") {
                  alert(
                    "Please check if you have selected the package and entered the description"
                  );
                } else {
                  navigate("/favorite");
                }
              }}
              classNames="bg-indigo-500 px-5 py-2 rounded text-white w-40 cursor-pointer mt-5"
            />
          </div>
        </ul>
      )}
    </div>
  );
}

export default SearchPackagesPage;
