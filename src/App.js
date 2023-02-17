import HomePage from "./components/HomePage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import AddProduct from "./components/dashboard/adminDashboard/products/AddProduct";
import Navbar from "./common/Navbar";
import ManageProducts from "./components/dashboard/adminDashboard/products/ManageProducts";
import ProductsGrid from "./components/Category/ProductsGrid";
import ProductDetails from "./components/Category/ProductDetails";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import React from "react";
import AddBlogs from "./components/dashboard/adminDashboard/blogs/AddBlogs";
import BlogDetails from "./components/blog/BlogDetails";
import Blogs from "./components/blog/Blogs";
import SignIn from "./auth/SignIn";
import Register from "./auth/Register";
import AuthProvider from "./contexts/AuthProvider";
import Admin from "./components/dashboard/Dashboard";
import useAuth from "./hooks/useAuth";
import NotFound from "./components/Form/NotFound";
import Properties from "./components/allProduct/Properties";
import Allproduct from "./components/allProduct/Allproduct";

function App() {
  const user = useAuth();

  const PrivateRoute = ({ children }) => {
    const user = useAuth(); // isauth() returns true or false based on localStorage

    return user ? children : <Navigate to="/sign-in" />;
  };

  return (
    <>
      <Router>
        {" "}
        <AuthProvider>
          <Navbar />

          <FloatingWhatsApp
            phoneNumber="+8801968003566"
            accountName="Abdullah Al Mamun"
            avatar="https://res.cloudinary.com/djejkfzz6/image/upload/v1674560417/h6qehpsowyg4p6dpwyqr.jpg"
          />

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignIn />} />
            {/* <Route path="/sign-up" element={<Register />} /> */}
            {/* <Route path="/about" element={<About />} /> */}

            <Route path="*" element={<NotFound />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/dashboard/*" element={<Admin />} />
            <Route path="/manage-properties" element={<AddProduct />} />
            <Route path="/manage-blogs" element={<AddBlogs />} />

            <Route exact path="/search/:id" element={<Allproduct />} />

            <Route exact path="/properties" element={<Properties />} />

            <Route exact path="/blogs/:id" element={<BlogDetails />} />

            <Route path="/manage-products" element={<ManageProducts />} />
            <Route path="/manage-products" element={<ManageProducts />} />
            <Route exact path="/category/:id" element={<ProductsGrid />} />
            <Route exact path="/details/:key" element={<ProductDetails />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
