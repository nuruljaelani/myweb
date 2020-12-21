import React from 'react'
import { Helmet } from "react-helmet"
import instagram from "../images/instagram.svg"
import github from "../images/github-logo.svg"
import linkedin from "../images/linkedin.svg"
import img from '../images/IMG_20200729_100337@0,5x.jpg'
import Layout from "../components/layout.js"


const About = () => {
    return (
        <>
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Me</title>
            </Helmet>
            <div className="bg-gradient-to-r from-green-200 to-white w-full h-80 md:h-96 lg:h-128 relative z-10 flex justify-center">
                <div className="flex flex-col mx-auto mt-10 md:mt-20 lg:mt-32 px-3 md:px-6 items-center bg-white z-40 w-4/5 md:w-3/4 rounded-3xl absolute">
                    <p className="font-bold text-gray-600 text-xl md:text-3xl lg:text-4xl z-40 my-4 lg:my-10">About Me</p>
                    <div className="flex flex-col md:flex-row my-2 z-40 items-center">
                        <img src={img} alt="" className="w-auto md:w-64 lg:w-100 rounded-xl" />
                        <div className="text-gray-500 text-sm md:text-lg lg:text-2xl font-medium mt-4 pl-2 md:pl-4 lg:pl-6">
                            My name is Nurul Jaelani. I'm Junior Web Developer. Some of technologies that i am working on are HTML, CSS, Javascript, Reactjs, Vuejs, Nodejs and basic Laravel.
                            I also have basic knowledge of Adobe Photoshop and Adobe Illustrator.
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <footer className="mb-4 px-4 md:px-16 lg:px-40 flex justify-center py-4 items-center z-50 absolute w-full inset-x-0 -bottom-20 md:-bottom-10 lg:-bottom-32 bg-white">
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

export default About