import React from 'react'
import Layout from '../components/layout'
import gmail from '../images/020-gmail.svg';
import linkedin from '../images/linkedin.svg';

const Contact = () => {
    return (
        <>
        <Layout>
            <div className="flex flex-col mt-10 md:mt-16 lg:mt-20 mb-16">
                <p className="font-bold text-gray-600 text-xl md:text-3xl lg:text-4xl text-center">Contact</p>
                <div className="flex mt-10 md:mt-16 px-4 md:px-16 lg:px-40 items-center">
                    <img src={gmail} alt="" className="w-8 md:w-16 lg:w-20" />
                    <p className="text-base md:text-2xl lg:text-4xl font-semibold text-gray-600 ml-4">Nuruljaelani96@gmail.com</p>
                </div>
                <div className="flex mt-4 md:mt-6 px-4 md:px-16 lg:px-40 items-center">
                    <img src={linkedin} alt="" className="w-8 md:w-16 lg:w-20" />
                    <p className="text-base md:text-2xl lg:text-4xl font-semibold text-gray-600 ml-4">
                        <a href="https://linkedin.com/in/nurul-jaelani">https://linkedin.com/in/nurul-jaelani</a>
                    </p>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Contact