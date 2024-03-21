/* eslint-disable @next/next/no-img-element */
"use client"
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { EffectCoverflow, Scrollbar } from 'swiper/modules';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { IoLogoCss3 } from "react-icons/io";
import { FaStar, FaReact, FaSass } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbComponents } from "react-icons/tb";
import { MdOutlineSwipe } from "react-icons/md";
import AboutMe from "@/components/AboutMe";


const page = () => {
    const data = [
        {
            name: 'HTML&HTML5',
            img: <FaHtml5 size={40} className="text-orange-600" />,
            desc: "Markup language",
            code: "html"
        },
        {
            name: 'CSS&CSS3',
            img: <IoLogoCss3 size={40} className="text-blue-600" />,
            desc: "Stylesheet language",
            code: "css"
        },
        {
            name: 'JAVASCRIPT',
            img: <SiJavascript size={40} className="text-yellow-600" />,
            desc: "Scripting language",
            code: "js"
        },
        {
            name: 'REACT.JS',
            img: <FaReact size={40} className="text-blue-400" />,
            desc: "JavaScript library",
            code: "react"
        },
        {
            name: 'NEXT.JS',
            img: <SiNextdotjs size={40} className="text-black" />,
            desc: "React framework",
            code: "next"
        },
        {
            name: 'TAILWIND.CSS',
            img: <SiTailwindcss size={40} className="text-blue-400" />,
            desc: "CSS framework",
            code: "tailwind"
        },
        {
            name: 'SHADCNUI',
            img: <TbComponents size={40} className="text-blue-400" />,
            desc: "Collection/Ui components",
            code: "ui"
        },
        {
            name: 'SASS',
            img: <FaSass size={40} className="text-pink-600" />,
            desc: "CSS preprocessor",
            code: "sass"
        }
    ];

    const arrowVariants = {
        initial: { y: 0 },
        animate: { y: 20 },
    };

    return (
        <motion.div className="relative overflow-hidden">
            <motion.div
                initail={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 50, transition: { duration: 0.7 } }}
                exit={{ opacity: 0, x: -300, transition: { duration: 0.7 } }}
                className="flex items-center justify-center py-1 md:p-2 absolute top-11 bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900 text-white w-40 md:w-48 rounded-full">
                <motion.h2 className="text-center font-semibold text-base md:text-xl">ABOUT ME</motion.h2>
            </motion.div>
            <motion.div
                animate={{ opacity: 1, right: 20, transition: { duration: 0.7 } }}
                exit={{ opacity: 0, transition: { duration: 0.7 } }}
                className="absolute opacity-0 -right-36 mt-2 md:mt-0"
            >
                <div className="absolute top-24 right-16 w-[15rem] h-[15rem] md:w-[12rem] md:h-[29rem] z-[15] ">
                    <img className="object-cover w-full h-full rounded-full " src="../../assets/images/yas.png" alt="" />
                </div>
                <div className="z-[14] absolute top-24 right-48 rounded-full bg-gray-300 w-40 h-40 md:w-32 md:h-96"></div>
            </motion.div>
            {/*content*/}
            <motion.p
                initail={{ opacity: 0, y: -500 }}
                animate={{ opacity: 1,y: 2, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 0.7 } }}
                className="font-medium tracking-wider leading-7 w-[80%] md:w-[60%] ml-10 md:ml-16 pt-96 md:pt-56">
                👋 I am Yassir, a dedicated Front-end developer with a passion for crafting exceptional digital experiences.
                With over 3 years of hands-on experience, I am committed to pushing the boundaries of my skills and delivering excellence in every project I undertake.
                My journey in the world of web development has been marked by successfully overcoming diverse challenges,
                allowing me to accumulate valuable expertise along the way.
            </motion.p>
            <motion.div
                variants={arrowVariants}
                initial="initial"
                animate="animate"
                className="absolute top-[38%] md:top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-700"
                transition={{ repeat: Infinity, duration: 2.5, repeatType: 'reverse' }}
            >
                <MdOutlineKeyboardDoubleArrowDown size={40} />
            </motion.div>
            {/* More info */}
            <AboutMe />
            {/* Skills */}
            <motion.div
                initail={{ opacity: 0, x: -300 }}
                animate={{ opacity: 1, x: 50, transition: { duration: 0.7 } }}
                exit={{ opacity: 0, x: -300, transition: { duration: 0.7 } }}
                className="mt-36 md:mt-48 flex items-center justify-center p-1 md:py-2 bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900 text-white w-40 md:w-48 rounded-full">
                <motion.h2 className="text-center font-semibold text-base md:text-xl">MY SKILLS</motion.h2>
            </motion.div>
            <div className="bg-white mx-16 mb-20 mt-16 py-9 px-8 rounded-lg relative">
                <span className="text-base md:text-sm absolute top-2 right-2 rounded-lg bg-blue-600 text-white text-center py-1 px-3 font-semibold">
                    <MdOutlineSwipe />
                </span>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -50,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    speed={1000}
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar, EffectCoverflow]}
                    className="mySwiper mt-5"
                >
                    {data.map((item, index) => (
                        <>
                            <SwiperSlide className="w-[200px] relative">
                                <div className="flex ml-2">
                                    <div
                                        className={`shadow-sm mt-4 w-24 h-24 rounded-3xl flex items-center justify-center 
                                    ${item.code === "html" ? "bg-orange-100 "
                                                : item.code === "css" ? "bg-blue-100"
                                                    : item.code === "js" ? "bg-yellow-100"
                                                        : item.code === "react" ? "bg-green-100"
                                                            : item.code === "next" ? "bg-gray-100"
                                                                : item.code === "tailwind" ? "bg-purple-100"
                                                                    : item.code === "ui" ? "bg-black"
                                                                        : item.code === "sass" ? "bg-pink-100" : "bg-red-100"}`}>
                                        {item.img}
                                    </div>
                                    <div className="flex flex-col mt-8 ml-5">
                                        <p className="font-semibold mt-1 tracking-wider">{item.name}</p>
                                        <p className={`text-sm ${item.code === "next" ? "text-gray-600"
                                            : item.code === "html" ? "text-orange-600"
                                                : item.code === "css" ? "text-blue-600"
                                                    : item.code === "js" ? "text-yellow-600"
                                                        : item.code === "react" ? "text-green-600"
                                                            : item.code === "ui" ? "text-black"
                                                                : item.code === "sass" ? "text-pink-600"
                                                                    : item.code === "tailwind" ? "text-purple-600" : "text-red-600"}`}>{item.desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </motion.div>
    )
}

export default page;