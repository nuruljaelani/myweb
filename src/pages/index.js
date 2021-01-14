import { Link } from "gatsby";
import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout.js";
import image from "../images/IMG_20200729_100337@0,75x.png"
import instagram from "../images/instagram.svg"
import github from "../images/github-logo.svg"
import linkedin from "../images/linkedin.svg"

const HomePage = () => {

    return (
        <>
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
            <div className="h-80 md:h-96 lg:h-128 px-4 md:px-20 lg:px-40 bg-gradient-to-r from-green-200 to-white">
                <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col w-1/2">
                        <p className="text-gray-400 text-lg md:text-2xl lg:text-3xl">Hello</p>
                        <p className="text-gray-700 text-2xl md:text-4xl lg:text-6xl font-extrabold my-1 md:my-2">I'm Nurul Jaelani</p>
                        <p className="text-lg md:text-3xl lg:text-4xl font-semibold text-gray-500"></p>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold w-28 rounded py-2 mt-6 shadow-lg focus:outline-none text-xs md:text-base">
                            <Link to="/contact">Get In Touch</Link>
                        </button>
                    </div>
                    <div className="w-1/2 my-8">
                        <img src={image} alt="" className="float-right opacity-30 h-52 w-40 md:w-60 lg:w-96 md:h-72 lg:h-112" />
                    </div>
                </div>
            </div>
        </Layout>
        <hr />
        <footer className="mb-4 px-4 md:px-16 lg:px-40 flex justify-center py-4 items-center">
          <div className="font-medium text-gray-600">
            &copy; 2020 |
          </div>
          <div className="flex ml-2">
            <a href="https://instagram.com/jay_qz" target="_">
              <img src={instagram} alt="" className="w-4 md:w-6 mr-2" />
            </a>
            <a href="https://linkedin.com/in/nurul-jaelani" target="_">
              <img src={linkedin} alt="" className="w-4 md:w-6 mr-2" />
            </a>
            <a href="https://github.com/nuruljaelani" target="_">
              <img src={github} alt="" className="w-4 md:w-6" />
            </a>
          </div>
        </footer>
        </>
    )

}

export default HomePage;
