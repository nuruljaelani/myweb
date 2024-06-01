"use client";
import Image from "next/image";
import React from "react";
import rr from "public/img/projects/Risk-Resolution.png";
import simcal from "public/img/projects/SIMCal-PT-TÜV-NORD-Indonesia.png";
import eduskill from "public/img/projects/eduskill.png";
import tokoIkan from "public/img/projects/toko-ikan.png"
import { Building2 } from "lucide-react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="bg-white py-10 md:py-20 rounded-b-[8rem]">
      <div className="flex flex-col max-w-5xl mx-auto gap-6">
        <span className="font-bold text-xl tracking-tight">Last Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            className="border border-stone-700 rounded-xl p-4 hover:shadow-lg hover:ring-1 ring-stone-500"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <span className="border-b-2 border-stone-600 font-semibold">
                  Company Profile
                </span>
                <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                  <Building2 size={12} />
                  <span className="text-[0.60rem] font-medium">Company</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Image src={rr} alt="" className="w-full" />
                <p className="text-sm tracking-tighter">Company Profile</p>
                <div className="flex gap-2">
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    React Js
                  </div>
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    Tailwind Css
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="border border-stone-700 rounded-xl p-4 hover:shadow-lg hover:ring-1 ring-stone-500"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <span className="border-b-2 border-stone-600 font-semibold">
                  Information Systems
                </span>
                <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                  <Building2 size={12} />
                  <span className="text-[0.60rem] font-medium">Company</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Image src={simcal} alt="" className="w-full" />
                <p className="text-sm tracking-tighter">
                  Information Systems for Calibration Lab PT Tuvnord Indonesia
                </p>
                <div className="flex gap-2">
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    React Js
                  </div>
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    Bootstrap
                  </div>
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    Express Js
                  </div>
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    Postgres Sql
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="border border-stone-700 rounded-xl p-4 hover:shadow-lg hover:ring-1 ring-stone-500"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <span className="border-b-2 border-stone-600 font-semibold">
                  Online Course Web
                </span>
                <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                  <Building2 size={12} />
                  <span className="text-[0.60rem] font-medium">Personal</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Image src={eduskill} alt="" className="w-full" />
                <p className="text-sm tracking-tighter">
                  Slicing design from figma
                </p>
                <div className="flex gap-2">
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    React Js
                  </div>
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    Next Js
                  </div>
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    Tailwind Css
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="border border-stone-700 rounded-xl p-4 hover:shadow-lg hover:ring-1 ring-stone-500"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <span className="border-b-2 border-stone-600 font-semibold">
                  Fish Store
                </span>
                <div className="flex items-center gap-2 border rounded-md px-2 py-1">
                  <Building2 size={12} />
                  <span className="text-[0.60rem] font-medium">Personal</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Image src={tokoIkan} alt="" className="w-full" />
                <p className="text-sm tracking-tighter">
                  Slicing design from figma
                </p>
                <div className="flex gap-2">
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    React Js
                  </div>
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    Next Js
                  </div>
                  <div className="bg-stone-400 text-white py-1 px-2 text-[0.60rem] rounded-md">
                    Tailwind Css
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
