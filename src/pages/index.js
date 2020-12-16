import { Link } from "gatsby";
import * as React from "react"
import Layout from "../components/layout,js";
import image from "../images/IMG_20200729_100337@3.png"

const HomePage = () => {

    return (
        <>
        <Layout>
            <div className="h-80 md:h-96 lg:h-128 px-4 md:px-20 lg:px-40">
                <div className="flex w-full items-center justify-between">
                    <div className="flex flex-col w-1/2">
                        <p className="text-gray-400 text-lg md:text-2xl lg:text-3xl">Hello</p>
                        <p className="text-gray-700 text-2xl md:text-4xl lg:text-6xl font-extrabold my-1 md:my-2">I'm Nurul Jaelani</p>
                        <p className="text-lg md:text-3xl lg:text-4xl font-semibold text-gray-500">Full-stack Web Developer</p>
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
        </>
    )

}

export default HomePage;
