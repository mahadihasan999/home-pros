import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
function About() {
  return (
    <>
      <div className="md:mx-auto md:container px-4">
        <div className="pt-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center pb-12">
              <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 className="tetext-xlxt-2xl lg:text-4xl md:leading-snug tracking-tighter f-f-l font-black">
                    Welcome To HomePros
                  </h1>
                  <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">
                    HomePros first dedicated rental portal and pioneer PropTech
                    startup in Bangladesh that founded in backend 2013 and
                    launched its official website in 2015. We believe only
                    technology can make people life easy and simple. Our mission
                    ‘to provide a better experience about Buy-Rent-Invest in the
                    real estate industry in Bangladesh’.
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                    <Link
                      to="/properties"
                      className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700"
                    >
                      Lets Get Started
                    </Link>
                    <div className="pl-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="#D53F8C"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="https://res.cloudinary.com/djejkfzz6/image/upload/v1676722245/x9gaxesx5irbyfnwc7if.jpg"
                  alt="-coverimage"
                />
                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                  <div className="text-center w-full sm:w-full mb-8">
                    <div className="flex items-center">
                      <h1 className=" -xlxt-2xl lg:text-4xl md:leading-snug tracking-tighter f-f-l font-black">
                        Everything You Need
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-32 pt-16">
            <div className="mx-auto">
              <div className="flex flex-wrap flex-row-reverse items-center">
                <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                  <div className="py-2 text-color">
                    <h1 className="text-2xl lg:text-4xl tracking-tighter md:leading-snug f-f-l font-black">
                      Our vision is very simple
                    </h1>
                    <h2 className="text-lg lg:text-xl leading-7 md:leading-10 f-f-r py-8">
                      ‘solve people’s real estate problems through PropTech’.
                      Nowadays people are getting very busy and every second are
                      valuable cause time is money. They haven’t enough time to
                      search apartment or office To-Let in different locations,
                      as well as property owner wants to Sell or Rent their
                      property without any annoying call from To-Let or
                      signboards at their very important office meeting time or
                      their personal moment. In this situation, we believe only
                      PropTech can give them the best solution
                    </h2>
                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                      <Link
                        to="/properties"
                        className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700"
                      >
                        Lets Get Started
                      </Link>
                      <div className="pl-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                            fill="#D53F8C"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                  <img
                    className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                    src="https://res.cloudinary.com/djejkfzz6/image/upload/v1676722242/ore8e05ttztbsgwfmlw3.jpg"
                    alt="cover-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
