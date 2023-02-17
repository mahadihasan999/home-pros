import { useEffect, useState } from "react";
const useBlogs = (url) => {
  const [blog, setBlog] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  useEffect(() => {
    const url = "http://localhost:5000/blogs";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error);
        setBlog(data.blogs);
        setloading(false);
      });
  }, [url]);
  return { blog, setBlog, loading, error };
};
export default useBlogs;
