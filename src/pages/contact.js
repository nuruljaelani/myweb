import React from 'react'
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import gmail from '../images/020-gmail.svg';
import linkedin from '../images/linkedin.svg';
import instagram from "../images/instagram.svg"
import github from "../images/github-logo.svg"

const Contact = () => {
    return (
        <>
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
            </Helmet>
            <div className="bg-gradient-to-r from-green-200 to-white w-full h-80 md:h-96 lg:h-128 absolute z-10">
                <div className="flex flex-col justify-center mx-auto mt-10 md:mt-20 lg:mt-32 px-3 items-center bg-white z-40 w-3/4 rounded-3xl">
                    <p className="font-bold text-gray-600 text-xl md:text-3xl lg:text-4xl z-40 my-4 md:my-10">Contact</p>
                    <div className="flex flex-col my-0 md:my-4 z-40">
                        <div className="flex items-center my-4 lg:my-8">
                            <img src={gmail} alt="" className="w-4 md:w-8 lg:w-12" />
                            <p className="ml-2 md:ml-3 text-base md:text-2xl lg:text-3xl text-gray-600 font-semibold">nuruljaelani96@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <footer className="mb-4 px-4 md:px-16 lg:px-40 flex justify-center py-4 items-center z-50 absolute w-full inset-x-0 -bottom-0 md:-bottom-2 bg-white">
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
        </Layout>
        </>
    )
}

export default Contact