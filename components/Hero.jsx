/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";
import { MdArrowOutward, MdOutlineArrowForward } from "react-icons/md";


const Hero = () => {
    const [showDiv1, setShowDiv1] = useState(false);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);

    return (
        <div className="px-5 md:px-16 mt-16 mb-5 flex flex-col md:grid md:grid-cols-6 md:grid-rows-hero gap-y-4 gap-x-5">
            {/* div 1 */}
            <motion.div
                onMouseEnter={() => setShowDiv1(true)}
                onMouseLeave={() => setShowDiv1(false)}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                className="bg-glass h-[310px] w-full md:h-auto z-10 col-span-4 rounded-3xl relative overflow-hidden"
            >
                <motion.div
                    transition={{ duration: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showDiv1 ? 1 : 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.7 } }}
                    className={`absolute z-[50] top-0 left-0 w-full h-full box-hover`}>
                </motion.div>
                <div className="z-0 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[750px] h-[350px]">
                    <img
                        src="/assets/images/a-3.jpg"
                        alt="hero"
                        className="rounded-full w-full h-full"
                    />
                </div>
                <div className="z-[52] absolute">
                    <motion.h2
                        transition={{ duration: 0.2 }}
                        animate={showDiv1 ? { scale: 1.1 } : { scale: 1 }}
                        className="ml-10 mt-14 text-white font-semibold text-4xl md:text-5xl tracking-wide w-[50%]">
                        3 Years in the Code Forge
                    </motion.h2>
                    <motion.p
                        transition={{ duration: 0.2 }}
                        animate={showDiv1 ? { scale: 1.1 } : { scale: 1 }}
                        className="absolute left-[45%] md:left-[60%] text-sm md:text-base top-48 md:top-60 text-white w-[50%]">
                        Hello, I&apos;m Yassir, a seasoned Front-end Developer with a three-year
                        journey in the ever-evolving world of web development.
                    </motion.p>
                    <Link href="/about" className="absolute top-64 left-12 md:left-24 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-glass rounded-full">
                        <MdArrowOutward size={20} />
                    </Link>
                </div>
            </motion.div>
            {/* div 2 */}
            <motion.div
                onMouseEnter={() => setShowDiv2(true)}
                onMouseLeave={() => setShowDiv2(false)}
                initial={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1.3 } }}
                className="border-2 border-white rounded-3xl relative overflow-hidden">
                <motion.div
                    transition={{ duration: 0.5 }}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: showDiv2 ? 1 : 0, y: showDiv2 ? 0 : 100 }}
                    exit={{ opacity: 0, transition: { duration: 0.7 }, y: 100 }}
                    className="absolute z-[50] bottom-0 left-0 w-full h-[200px] bg-white/80 rounded-3xl"></motion.div>
                <img className="object-cover rounded-3xl w-full h-full" src="/assets/images/a-2.jfif" alt="hero" />
                <div className="absolute top-32 left-3 z-[52]">
                    <motion.h2
                        transition={{ duration: 0.3 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showDiv2 ? 1 : 0, y: showDiv2 ? 0 : 30, transition: { duration: 0.5 } }}
                        exit={{ opacity: 0 }}
                        className="mt-20 md:mt-14 font-semibold text-xl tracking-wide">
                        My Portfolio
                    </motion.h2>
                    <motion.p
                        //transition={{ duration: 0.5 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showDiv2 ? 1 : 0, y: showDiv2 ? 0 : 20, transition: { duration: 0.4 } }}
                        exit={{ opacity: 0 }}
                        className="mt-3 text-gray-400 font-medium text-sm w-[90%]">
                        Showcasing my web development journey and creations
                    </motion.p>
                    <Link href="/work" className="absolute top-40 md:top-36 right-3 flex items-center justify-center w-9 h-9 bg-white hover:bg-glass rounded-full">
                        <MdArrowOutward size={18} />
                    </Link>
                </div>
            </motion.div>
            {/* div 3 */}
            <motion.a
                href="/freelancer"
                onMouseEnter={() => setShowDiv3(true)}
                onMouseLeave={() => setShowDiv3(false)}
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1.6 } }}
                className="border-2 border-white rounded-3xl relative overflow-hidden">
                <motion.div
                    transition={{ duration: 0.5 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showDiv3 ? 1 : 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.7 } }}
                    className={`absolute z-[50] top-0 left-0 w-full h-full box-hover`}>
                </motion.div>
                <img className="object-cover rounded-3xl w-full h-full" src="/assets/images/a-6.jpg" alt="hero" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[51]">
                    <motion.h2
                        transition={{ duration: 0.7 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showDiv3 ? 1 : 0, y: showDiv3 ? 0 : 10, rotate: 90 }}
                        exit={{ opacity: 0 }}
                        className="mt-0 md:mt-14 font-semibold text-white transform rotate-90 text-xl md:text-3xl tracking-widest">
                        FREELANCER
                    </motion.h2>
                </div>
            </motion.a>
            {/* div 4 */}
            <motion.div
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                className="border-2 flex flex-col justify-between col-span-2 bg-gray-100 border-white rounded-3xl relative overflow-hidden py-2 px-3">
                <div className="flex justify-between items-center">
                    <span className="border border-black rounded-3xl py-1 px-2 font-medium text-xs ">skills</span>
                    <Link href="/about" className="flex items-center justify-center w-8 h-8 bg-white hover:bg-glass rounded-full">
                        <MdOutlineArrowForward size={17} />
                    </Link>
                </div>
                <div className="flex justify-between items-center md:mt-0 mt-5">
                    <p className="text-xs text-gray-400 w-[60%] ">A showcase of my versatile skills in web development and more.</p>
                    <h2 className="font-bold text-4xl">+5</h2>
                </div>
            </motion.div>
            {/* div 5 */}
            <motion.div
                initial={{ opacity: 0, x: -600 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 1.3 } }}
                className="bg-blue-600 border-2 flex flex-col justify-between col-span-2 border-white rounded-3xl relative overflow-hidden py-2 px-3">
                <div className="flex justify-between items-center">
                    <span className="border text-white border-white rounded-3xl py-1 px-2 font-medium text-xs ">upcoming</span>
                    <Link href="/work" className="flex items-center justify-center w-8 h-8 bg-white hover:bg-glass rounded-full">
                        <MdOutlineArrowForward size={17} />
                    </Link>
                </div>
                <div className="flex justify-between items-center text-white md:mt-0 mt-5">
                    <p className="text-xs w-[80%] ">Stay tuned for exciting projects and updates. The future holds a world of possibilities!</p>
                    <h2 className="font-bold text-4xl">+2</h2>
                </div>
            </motion.div>
            { /* div 6 */}
            <motion.div 
            initial={{ opacity: 0,x: -700 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1.6 } }}
            className="bg-gray-100 border-2 flex flex-col justify-between col-span-2 border-white rounded-3xl relative overflow-hidden py-2 px-3">
                <div className="flex justify-between items-center">
                    <span className="border text-black border-black rounded-3xl py-1 px-2 font-medium text-xs ">contact me</span>
                    <Link href="/contact" className="flex items-center justify-center w-8 h-8 bg-white hover:bg-glass rounded-full">
                        <MdOutlineArrowForward size={17} />
                    </Link>
                </div>
                <div className="flex justify-between items-center md:mt-0 mt-5">
                    <p className="text-xs text-gray-400 ">Get in touch for collaboration and inquiries.</p>
                    <h2 className="font-bold text-4xl">+2</h2>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero;
