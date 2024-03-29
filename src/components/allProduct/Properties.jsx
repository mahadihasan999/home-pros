import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

const Properties = () => {
  const { products } = useProducts();
  return (
    <div>
      <div className="mx-auto container py-20 px-2">
        <a href="#home">
          <button className="text-sm font-bold">
            Home/ <span className="font-normal">All Products</span>
          </button>
        </a>
        <div className="text-center py-4">
          <h1 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center ">
            All Properties
          </h1>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-2">
          {products?.map((data) => (
            <div>
              <Link to={`/details/${data.propertyID}`}>
                <div className="lg:w-72 md:w-64 lg:mb-0 mb-8  shadow ">
                  <div>
                    {data.images.slice(0, 1).map((data) => (
                      <img
                        src={data.photo_url}
                        alt={data[0]}
                        className="w-full h-44"
                      />
                    ))}
                  </div>
                  <div className="bg-gray-50 ">
                    <div className="flex items-center justify-between px-4 pt-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-bookmark"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                        </svg>
                      </div>
                      <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                        <p className="text-xs text-yellow-500">Featured</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold">{data.title}</h2>
                      </div>

                      <div className="flex mt-4">
                        <div>
                          <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                            {data.bed}bed & {data.bath} bath
                          </p>
                        </div>
                        <div className="pl-2">
                          <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                            {data.size}Sq Ft
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between py-4">
                        <h2 className="text-lime-700 text-xs font-semibold">
                          {data.address},{data.city}
                        </h2>
                        <h3 className="text-lime-700 text-xl font-semibold">
                          ৳{data.price}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
