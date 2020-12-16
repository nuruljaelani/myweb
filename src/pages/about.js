import React from 'react'
import img from '../images/IMG_20200729_100337@0,75x.jpg'
import Layout from "../components/layout.js"

const About = () => {
    return (
        <>
        <Layout>
            <div className="flex flex-col justify-center mt-10 md:mt-16 lg:mt-20 items-center">
                <p className="font-bold text-gray-600 text-xl md:text-3xl lg:text-4xl">About Me</p>
                <div className="flex my-10 md:my-16">
                    <img src={img} alt="" className="w-40 md:w-72 lg:w-120" />
                    <div className="text-gray-500 text-sm md:text-lg lg:text-2xl font-medium ml-3 md:ml-6 mt-2 md:mt-4 px-2 md:px-6 lg:px-10">
                        My name is Nurul Jaelani. I'm Junior Web Developer. Some of technologies that i am working on are HTML, CSS, Javascript, Reactjs, Vuejs, Nodejs and basic Laravel.
                        I also have basic knowledge of Adobe Photoshop and Adobe Illustrator.
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default About