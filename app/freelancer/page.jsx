/* eslint-disable @next/next/no-img-element */
"use client"
import Message from "@/components/Message";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineInsertLink } from "react-icons/md";


const page = () => {
    const data = [
        {
            name: "Upwork",
            link: "https://www.upwork.com/freelancers/~0186f0668ef84f829c",
            img: "/assets/images/u1.jfif"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/yassir-kibou",
            img: "/assets/images/u2.jpg"
        },
        {
            name: "Github",
            link: "https://github.com/yassirkibou06",
            img: "/assets/images/u3.jpg"
        }
    ];

    return (
        <motion.div className="relative h-screen">
            <motion.div
                initail={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 50, transition: { duration: 0.7 } }}
                exit={{ opacity: 0, x: -300, transition: { duration: 0.7 } }}
                className="mb-24 flex items-center justify-center py-1 md:p-2 absolute top-11 bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900 text-white w-40 md:w-56 rounded-full">
                <motion.h2 className="text-center font-semibold text-base md:text-xl">MY PROFILES</motion.h2>
            </motion.div>
            {/**content */}
            <div className="pt-36 px-10 md:px-16 grid grid-rows-3 gap-6">
                {data.map((item, index) => (
                    <motion.div key={index}
                        initial={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                        animate={index === 0 ? { opacity: 1, x: 0, transition: { duration: 1 } }
                            : index === 1 ? { opacity: 1, x: 0, transition: { duration: 1.2 } }
                                : index === 2 ? { opacity: 1, x: 0, transition: { duration: 1.4 } } : { opacity: 1, x: 0, transition: { duration: 1.6 } }}
                        className="bg-white rounded-2xl shadow-lg py-2 px-3 flex justify-between items-center">
                        <div className="flex items-center gap-5 md:gap-12">
                            <img className="w-16 h-16 rounded-full object-cover" src={item.img} alt="" />
                            <h2 className="font-semibold text-gray-500 text-base md:text-lg">Explore my profile on {item.name}</h2>
                        </div>
                        <div>
                            <a href={item.link} className="border-gray-600 border w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white">
                                <MdOutlineInsertLink className="" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/**message */}
            <Message />
        </motion.div>
    )
}

export default page