/* eslint-disable @next/next/no-img-element */
"use client"
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { MdOutlineMarkEmailUnread, MdCall } from "react-icons/md";

const page = () => {
  return (
    <div className="relative">
      <motion.div
        initail={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 50, transition: { duration: 0.7 } }}
        exit={{ opacity: 0, x: -300, transition: { duration: 0.7 } }}
        className="mb-24 flex items-center justify-center py-1 md:p-2 absolute top-11 bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900 text-white w-40 md:w-56 rounded-full">
        <motion.h2 className="text-center font-semibold text-base md:text-xl">CONTACT ME</motion.h2>
      </motion.div>
      {/**content */}
      <motion.div className="pt-32 px-10 md:px-16">
        <motion.div
          initail={{ opacity: 0, y: -500 }}
          animate={{ opacity: 1,y: 10, transition: { duration: 1 } }}
          className="bg-white rounded-lg grid grid-cols-1 md:grid-cols-contact px-2 py-4 mb-5">
          <div>
            <img className="w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-lg ml-0 md:ml-20" src="assets/images/i-1.jpg" alt="" />
            <div className="flex md:flex-row flex-col space-y-3 md:space-x-8 ml-5 md:ml-20">
              <div className="flex items-center space-x-2">
                <MdOutlineMarkEmailUnread className="text-xl md:text-2xl text-blue-700" />
                <p className="font-medium md:text-base text-sm text-gray-600">yassirkibou06@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <MdCall className="text-xl md:text-2xl text-blue-700" />
                <p className="font-medium md:text-base text-sm text-gray-600">+212675467067</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default page;