import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Label from "../../../Form/Label";
import TextField from "../../../Form/TextField";
import Button from "../../../Form/Button";
import ManageProducts from "../products/ManageProducts";
import ManageBlogs from "./ManageBlogs";
const AddBlogs = () => {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [summary, setSummery] = useState("");
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [image, setImageData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("excerpt", excerpt);
    formData.append("date", date);
    formData.append("image", image);

    fetch("https://home-server.malihatabassum.com/blogs", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully Added!");
          //   navigate("/dashboard");
          setTitle("");
          setExcerpt("");
          setSummery("");
          setLoading(false);
        } else {
          toast.error("This didn't work.");
        }
      });
  };

  //post to database

  function handleOpenWidget() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "djejkfzz6",
        uploadPreset: "rents-bd",
      },

      (error, result) => {
        if (!error && result && result.event === "success") {
          setImageData(result.info.url);
        }
      }
    );

    //open widget
    myWidget.open();
  }
  return (
    <div className="container mx-auto lg:py-20 -mt-28">
      <Toaster />
      <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold text-gray-800 text-center py-3">
        Add New Blog
      </h1>
      <form
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6  mx-2"
        onSubmit={handleSubmit}
      >
        {/* title and description  */}

        <div className="flex flex-col space-y-2">
          <Label htmlFor="title" text="Title" />
          <TextField
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <Label htmlFor="summary" text="Summary" />
          <textarea
            id="Excerpt"
            cols="28"
            rows="3"
            value={summary}
            className="border border-gray-200  py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
            required
            onChange={(e) => setSummery(e.target.value)}
          ></textarea>
          {/* description  */}
          <Label htmlFor="Excerpt" text="Description" />
          <textarea
            id="Excerpt"
            cols="30"
            rows="4"
            value={excerpt}
            className="border border-gray-200  py-3 px-4 w-full focus:outline-none ring-red-200 transition duration-500 focus:ring-4 resize-none"
            required
            onChange={(e) => setExcerpt(e.target.value)}
          ></textarea>
        </div>

        <div className="mt-8 flex flex-col gap-2 items-start justify-start">
          <div onClick={handleOpenWidget} className="flex gap-3">
            <button
              onClick={() => {
                setLoading(true);
              }}
              className="bg-gray-100 border border-gray-400 px-6 py-2 rounded"
              type="button"
            >
              {loading ? (
                <div class="flex justify-center items-center">
                  {image ? (
                    <span class="visually-hidden">Uploaded done</span>
                  ) : (
                    <span class="visually-hidden">Loading...</span>
                  )}
                </div>
              ) : (
                <span className="text-gray-600">Choose File</span>
              )}
            </button>

            <div className="px-6 flex items-center flex-no-wrap">
              <div className="">
                <div
                  className="w-12 h-12 bg-cover bg-center 
                
                rounded-md"
                >
                  <img
                    src={image}
                    alt={image}
                    className="h-full w-full overflow-hidden object-cover rounded border-2 border-white dark:border-gray-700 shadow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Button text="Add Blog" type="submit" />
          </div>
        </div>
      </form>
      <ManageBlogs />
    </div>
  );
};

export default AddBlogs;
