import React from "react";
import Banner from "../common/Banner";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import Faq from "../pages/Faq/Faq";
import OurPartnerShip from "../pages/OurPartnerShip";
import TopSelling from "../pages/TopSelling";
import Blogs from "./blog/Blogs";
import Category from "./Category/Category";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <TopSelling />
      <Blogs />
      <OurPartnerShip />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
