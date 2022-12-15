import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl mx-10 my-8">Welcome to Favorite NPM Packages</h1>
      <div className="border border-2 border-slate-500 border-solid mx-10">
        <div className="flex items-center flex flex-col py-20">
          <div className="flex-1">
            <h2 className="text-center">
              You don't have any favs yet. Please add.
            </h2>
          </div>
          <div className="flex flex-1 justify-end">
            <Button
              label="Add Fav"
              onClick={() => navigate("/search")}
              classNames="bg-indigo-500 px-5 py-2 rounded text-white w-40 cursor-pointer mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
