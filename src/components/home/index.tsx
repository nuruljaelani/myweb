"use client";
import Image from "next/image";
import React from "react";
import profileImg from "public/img/img_2.png";
import { TypeAnimation } from "react-type-animation";
import { Dribbble, Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFE8C8] to-[#FFFAE6] rounded-b-[8rem]">
      <nav className="mx-auto max-w-5xl py-6 flex justify-between">
        <span className="text-xl font-bold">Jay</span>
        <div className="flex tracking-tighter text-sm">
          <span>Project&nbsp;/&nbsp;</span>
          <span>About&nbsp;/&nbsp;</span>
          <span>Contact</span>
        </div>
      </nav>
      <div className="flex mx-auto max-w-5xl w-full py-16 h-[33rem] gap-10">
        <div className="flex flex-col w-3/5 items-center justify-center">
          <div className="w-full flex flex-col gap-6">
            <TypeAnimation
              sequence={[
                `Hello.. I'm Jay\n`,
                1000,
                `Hello.. I'm Jay\nFrontend Developer`,
                1000,
                `Hello.. I'm Jay\nBackend Developer`,
                1000,
                `Hello.. I'm Jay\nFullstack Developer`,
                5000,
              ]}
              wrapper="span"
              // speed={50}
              repeat={Infinity}
              preRenderFirstString={true}
              className="font-extrabold text-2xl md:text-3xl lg:text-4xl"
              style={{ whiteSpace: "pre-line", display: "block" }}
            />
            <p className="tracking-tight">
              I&apos;m a fullstack developer based in West Java. Currently,
              I&apos;m focused on building web and mobile applications.
            </p>
            <motion.button
              className="border rounded-xl py-2 px-4 border-slate-700 w-fit active:bg-stone-100"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
            >
              Contact Me
            </motion.button>
            <div className="flex gap-4">
              <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                <Linkedin />
              </motion.button>
              <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                <Github />
              </motion.button>
              <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                <Dribbble />
              </motion.button>
              <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
                <Instagram />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="w-2/5 relative">
          <motion.div
            className="block absolute"
            initial={{ rotate: 0 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ ease: "easeIn", duration: 10 }}
          >
            <Image src={profileImg} alt="" className="w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Index;
