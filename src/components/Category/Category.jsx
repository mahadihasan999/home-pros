import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";

import { Link } from "react-router-dom";
import TextField from "../Form/TextField";

const Category = () => {
  const { products } = useProducts();
  const [location, setLocaton] = useState("Dhanmondi");
  const [propertyType, setPropertyType] = useState("Furnished Apartment");

  let queary;

  // const queary = location + cut + propertyType;

  if (location && propertyType) {
    queary = location + "&" + propertyType;
  } else {
    queary = propertyType;
  }

  console.log(queary);
  const key1 = "Commercial Space";
  const key2 = "Residential Apartment";
  const key3 = "Furnished Apartment";
  const key4 = "Luxury Collection";
  const key5 = "Office Space";
  const key6 = "Shop & Restaurants Space";
  return (
    <div className="bg-gray-100 py-10 px-4 ">
      <div className="py-2 lg:pb-6 md:pb-6 flex items-center justify-center ">
        <select
          name="location"
          id="location"
          value={location}
          onChange={(e) => setLocaton(e.target.value)}
          className="py-2  border"
        >
          <option value="Dhanmondi">Dhanmondi</option>
          <option value="Banani">Banani</option>
          <option value="Gulsan">Gulsan</option>
          <option value="Purbacal">Purbacal</option>
          <option value="Mohammadpur">Mohammadpur</option>
        </select>

        <select
          name="category"
          id="category"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="py-2  border"
        >
          <option value="Furnished Apartment">Furnished Apartment</option>
          <option value="Residential Apartment">Residential Apartment</option>
          <option value="Commercial Space">Commercial Space</option>
          <option value="Office Space">Office Space</option>
          <option value="Luxury Collection">Luxury Collection</option>
          <option value="Shop & Restaurants Space">
            Shop & Restaurants Space
          </option>
        </select>

        <Link
          to={`/search/${queary}`}
          className="py-2  bg-lime-600 text-gray-100 px-4 hidden lg:block md:block "
        >
          Search
        </Link>
      </div>
      <div className="text-center">
        <Link
          to={`/search/${queary}`}
          className="py-2 mb-4 bg-lime-600 text-gray-100 px-4 block lg:hidden md:hidden mx-32"
        >
          Search
        </Link>
        <h1 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center pb-6">
          What You Want?
        </h1>
      </div>
      <div className="mx-auto container flex items-center justify-center">
        <div
          className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-2 gap-4 text-center text-gray-100 "
          id="home"
        >
          <Link
            to={`/category/${key1}`}
            className="cursor-pointer hover:shadow hover:scale-105 py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-lime-600 shadow shadow-lime-600  text-lime-600"
          >
            <div className="mb-2">
              <img
                className="h-[50px]"
                src="https://img.icons8.com/wired/64/40C057/client-company--v2.png"
              />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center ">
              Commercial Space
            </h2>
          </Link>
          <Link
            to={`/category/${key2}`}
            className="cursor-pointer hover:shadow hover:scale-105 py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-lime-600 shadow shadow-lime-600  text-lime-600"
          >
            <div className="mb-2">
              <img src="https://img.icons8.com/ios/50/40C057/building-with-rooftop-terrace.png" />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center ">
              Residential Apartment
            </h2>
          </Link>
          <Link
            to={`/category/${key3}`}
            className="cursor-pointer hover:shadow hover:scale-105 py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-lime-600 shadow shadow-lime-600  text-lime-600"
          >
            <div className="mb-2">
              <img src="https://img.icons8.com/ios/50/40C057/apartment.png" />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center ">
              Furnished Apartment
            </h2>
          </Link>
          <Link
            to={`/category/${key4}`}
            className="cursor-pointer hover:shadow hover:scale-105 py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-lime-600 shadow shadow-lime-600  text-lime-600"
          >
            <div className="mb-2">
              <img
                className="h-[50px]"
                src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/40C057/external-office-building-city-life-icongeek26-outline-icongeek26.png"
              />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center mx-2">
              Luxury Collection
            </h2>
          </Link>
          <Link
            to={`/category/${key5}`}
            className="cursor-pointer hover:shadow hover:scale-105 py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-lime-600 shadow shadow-lime-600  text-lime-600"
          >
            <div className="mb-2">
              <img src="https://img.icons8.com/ios/50/40C057/skyscrapers.png" />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center ">
              Office Space
            </h2>
          </Link>
          <Link
            to={`/category/${key6}`}
            className="cursor-pointer hover:shadow hover:scale-105  py-6 xl:px-4 rounded xl:w-60 w-40 flex justify-center items-center flex-col text-lime-600 shadow shadow-lime-600  text-lime-600"
          >
            <div className="mb-2">
              <img
                className="h-[50px]"
                src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/40C057/external-restaurant-public-service-photo3ideastudio-lineal-photo3ideastudio.png"
              />
            </div>

            <h2 className="dark:gray-white text-xl font-semibold text-center ">
              Restaurants Space
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
