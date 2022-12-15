import React, { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import MyModal from "../components/MyModal";

function ViewAndEditPage() {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);
  const [selectedValue, setSelectedValue] = useState();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  const deletePackage = (value) => {
    console.log("SELECTED VALUEE TO DELTEEE", value);
    setFavorites((packages) => {
      const filteredPackages = packages.filter(
        (packageName) => packageName !== value
      );
      console.log("filteredPackages: ", filteredPackages);
      localStorage.setItem("favorites", JSON.stringify(filteredPackages));
      return filteredPackages;
    });
    setSelectedValue("");
    setIsOpen(false);
  };

  return (
    <div className="px-10">
      {isOpen ? (
        <MyModal
          isOpen={isOpen}
          bodyText={"Are you sure you want to delete this item?"}
          onDelete={deletePackage(selectedValue)}
          onCancel={setIsOpen(false)}
        />
      ) : null}
      <Button
        classNames={"mt-10"}
        label={<KeyboardBackspaceIcon />}
        onClick={() => navigate("/search")}
      />

      <h1 className="text-2xl my-8">Welcome to Favorite NPM Packages</h1>
      <div className="flex">
        <div className="flex-1 border-r-0 border-l-2 p-2 border-t-2 border-b-0 pl-2 pr-4">
          <label htmlFor="package" className={"font-bold"}>
            Package Name
          </label>
        </div>
        <div className="flex-1 border-r-2 border-l-2 p-2 border-t-2 border-b-0 pl-2">
          <label htmlFor="deleteaction" className={"font-bold"}>
            Actions
          </label>
        </div>
      </div>
      <div>
        {favorites.length > 0 &&
          favorites.map((item, index) => {
            return (
              <div className="flex overflow-y-scroll" key={index}>
                <div className="pl-2 flex-1 border-r-2 border-l-2 p-2 border-t-2 border-b-2">
                  <p>{item}</p>
                </div>

                <Button
                  classNames={
                    "flex-1 border-r-2 border-b-2 border-t-2 flex items-center pl-2"
                  }
                  label={<DeleteIcon />}
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedValue(item);
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ViewAndEditPage;
