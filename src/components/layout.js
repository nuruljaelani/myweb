import React from "react"
import { Link } from "gatsby";
import instagram from "../images/instagram.svg"
import github from "../images/github-logo.svg"
import linkedin from "../images/linkedin.svg"

export default function Layout({ children }) {
  return (
    <div>
        <nav className="w-full px-4 md:px-20 lg:px-40 items-center py-4 flex justify-between bg-white">
            <div className="flex w-1/2 md:w-2/3 lg:w-4/6">
                <p className="font-extrabold text-xl md:text-3xl bg-green-500 px-2 rounded-l text-white">N</p>
                <p className="font-extrabold text-xl md:text-3xl border border-green-500 rounded-r px-2 text-green-500">J</p>
            </div>
            <div className="flex w-1/2 md:w-1/3 lg:w-2/6 justify-between text-sm md:text-base lg:justify-around">
                <div className="text-green-600 font-semibold hover:text-green-400">
                        <Link to="/">Home</Link>
                </div>
                <div className="text-green-600 font-semibold hover:text-green-400">
                        <Link to="/about">About</Link>
                </div>
                <div className="text-green-600 font-semibold hover:text-green-400">
                        <Link to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
        <main>
            {children}
        </main>
        <hr />
        <footer className="mb-4 px-4 md:px-16 lg:px-40 flex justify-center py-4">
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
    </div>
  )
}