/* eslint-disable @next/next/no-img-element */
"use client"
import UpcomingProjects from '@/components/UpcomingProjects';
import { motion } from 'framer-motion';
import { LuEye } from "react-icons/lu";

const page = () => {
  const data = [
    {
      name: "Landing page",
      desc: "Simple marketing landing page, I used HTML and CSS to build it.",
      link: "https://yassirkibou06.github.io/marketing-page/",
      img: "/assets/images/p1.jpg",
      tag: [
        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
        {
          name: "Javascript",
        }
      ]
    },
    {
      name: "Movie App",
      desc: "A multi-page movie website with dedicated sections for Home, TV Series, and Movies, built using React, HTML, CSS",
      link: "https://yassirkibou06.github.io/movie-app/#/",
      img: "/assets/images/p2.jpg",
      tag: [
        {
          name: "React"
        },
        {
          name: "HTML"
        },
        {
          name: "CSS"
        }
      ]
    },
    {
      name: "Japan Explorer",
      link: "https://yassirkibou06.github.io/japan-app/#/",
      desc: "Discover Japan's iconic cities with this React.js app. Immerse yourself in the beauty of Tokyo, Kyoto, and more. Built with React, HTML, CSS, and Swiper for seamless navigation.",
      img: "/assets/images/p3.jpg",
      tag: [
        {
          name: "React"
        },
        {
          name: "HTML"
        },
        {
          name: "CSS"
        },
        {
          name: "Swiper"
        }
      ]
    },
    {
      name: "Food landing page",
      desc: "Discover the essence of Arabic cuisine on this Next.js website. Tailwind CSS ensures a visually stunning presentation, while Framer Motion adds delightful animations. Explore the flavors at",
      link: "https://landing-food.vercel.app/",
      img: "/assets/images/p4.jpg",
      tag: [
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" }
      ]
    },
    {
      name: "One page animtion",
      desc: "Discover animation page with Next.js . Tailwind CSS ensures a visually stunning presentation, while Framer Motion adds delightful animations. Explore the flavors at",
      link: "https://beats-sage.vercel.app/",
      img: "/assets/images/p5.png",
      tag: [
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" }
      ]
    }
  ]

  return (
    <motion.div className="relative mb-10">
      <motion.div
        initail={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 50, transition: { duration: 0.7 } }}
        exit={{ opacity: 0, x: -300, transition: { duration: 0.7 } }}
        className="mb-24 flex items-center justify-center py-1 md:p-2 absolute top-11 bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900 text-white w-40 md:w-56 rounded-full">
        <motion.h2 className="text-center font-semibold text-base md:text-xl">MY PORTFOLIO</motion.h2>
      </motion.div>
      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-32 px-10 md:px-16">
        {data.map((item, index) => (
          /* cards */
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
            <div className="right h-[260px] relative">
              <img className="rounded-xl h-full object-cover" src={item.img} alt="" />
              <a target="_blank" href={item.link} className="cursor-pointer absolute bottom-2 right-2 rounded-full w-8 h-8 border-orange-600 hover:bg-[#ffffff33] border-2 flex items-center justify-center">
                <LuEye className="text-orange-600" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      {/**Upcoming .... */}
      <UpcomingProjects />
    </motion.div>
  )
}

export default page