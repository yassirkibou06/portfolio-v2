/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { LuEye, LuEyeOff } from "react-icons/lu";

const UpcomingProjects = () => {
    const upcomingData = [
        {
            name: "Woodmart e-commerce website",
            desc: "Explore cutting-edge technology on our e-commerce site powered by Next.js and Tailwind CSS. Browse a curated selection of TVs, laptops, and more. Experience seamless navigation with Swiper, making your online shopping journey both sleek and efficient.",
            link: "https://woodmart-01-ecommerce.vercel.app",
            img: "../assets/images/p6.png",
            tag: [
                { name: "Next.js" },
                { name: "Tailwind CSS" },
                { name: "Swiper" },
                { name: "Framer motion" }
            ]
        }
    ]

    return (
        <motion.div className="relative mt-16 mb-5">
            <motion.div
                initail={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 50, transition: { duration: 0.7 } }}
                exit={{ opacity: 0, x: -300, transition: { duration: 0.7 } }}
                className="mb-24 flex items-center justify-center py-1 md:p-2 absolute top-11 bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900 text-white w-40 md:w-56 rounded-full">
                <motion.h2 className="text-center font-semibold text-base md:text-xl">UPCOMING</motion.h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-32 px-10 md:px-16">
                {upcomingData.map((item, index) => (
                    <motion.div key={index}
                        initial={{ opacity: 0, x: -500, transition: { duration: 1 } }}
                        animate={index === 0 ? { opacity: 1, x: 0, transition: { duration: 1 } }
                            : index === 1 ? { opacity: 1, x: 0, transition: { duration: 1.2 } }
                                : index === 2 ? { opacity: 1, x: 0, transition: { duration: 1.4 } } : { opacity: 1, x: 0, transition: { duration: 1.6 } }}
                        className="shadow-lg bg-white grid-cols-1 grid md:grid-cols-cards gap-5 py-2 px-3 rounded-xl">
                        <div className="left pt-5">
                            <h2 className="font-semibold text-base md:text-xl mb-2">{item.name}</h2>
                            <p className="text-gray-500 font-medium text-sm mb-3">
                                {item.desc}
                            </p>
                            <ul className="flex gap-2 flex-wrap pt-3">
                                {item.tag.map((tag, index) => (
                                    <li key={index} className="span-tag">{tag.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="right h-[300px] relative">
                            <img className="rounded-xl h-full object-cover" src={item.img} alt="" />
                            <a target="_blank" href={item.link} className="cursor-pointer absolute bottom-2 right-2 rounded-full w-8 h-8 border-orange-600 hover:bg-[#ffffff33] border-2 flex items-center justify-center">
                                <LuEye className="text-orange-600" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default UpcomingProjects;


/*
<div key={index} className="shadow-lg bg-white grid grid-cols-1 md:grid-cols-cards gap-5 py-2 px-3 rounded-xl relative">
                        {/**overlay.... }
                        <div className="overlay"></div>
                        <div className="left pt-5">
                            <h2 className="font-semibold text-base md:text-xl mb-2">{item.name}</h2>
                            <p className="text-gray-500 font-medium text-sm mb-3">
                                {item.desc}
                            </p>
                            <ul className="flex gap-2 flex-wrap pt-3">
                                {item.tag.map((tag, index) => (
                                    <li key={index} className="span-tag">{tag.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="right h-[280px] relative">
                            <img className="rounded-xl h-full object-cover" src={item.img} alt="" />
                            <a target="_blank" href={item.link} className="cursor-pointer absolute bottom-2 right-2 rounded-full w-8 h-8 border-orange-600 hover:bg-[#ffffff33] border-2 flex items-center justify-center">
                                <LuEyeOff  className="text-orange-600" />
                            </a>
                        </div>
                    </div>*/