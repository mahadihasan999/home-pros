import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import Skeleton from "./Skeleton";

const Blogs = () => {
  const [page, setPage] = useState(0);
  const [displayBlogs, setDisplayBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const size = 6;
  useEffect(() => {
    fetch(
      `https://home-server.malihatabassum.com/blogs?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDisplayBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  const [loading, setLoading] = useState(false);
  //loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="bg-gray-100 pb-6">
      <section id="pagination" className="container mx-auto px-4  ">
        <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold text-gray-800 text-center py-6">
          Latest Blog
        </h1>
        <div className="flex items-center justify-center py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-8 md:gap-6 gap-4 py-2">
            {displayBlogs?.map((item) =>
              loading ? <Skeleton /> : <BlogItem key={item._id} {...item} />
            )}
          </div>
        </div>
        <a href="#pagination">
          <div className="pagination flex justify-center items-center gap-2">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={
                  number === page
                    ? "selected bg-lime-500 px-2 text-white rounded"
                    : "bg-lime-100 text-gray-500 px-2 rounded "
                }
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </a>
      </section>
    </div>
  );
};

export default Blogs;
