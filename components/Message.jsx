/* eslint-disable @next/next/no-img-element */
"use client"
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Message = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const showDelayedMessage = () => {
            setTimeout(() => {
                setShowMessage(true);
            }, 4000);
        };

        showDelayedMessage();
    }, []);

    return (
        <>
            {showMessage && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}
                    className="fixed bottom-10 md:bottom-16 right-3 flex gap-2 flex-row-reverse items-center">
                    <div className="w-16 h-16 relative">
                        <img className="rounded-full border-white border-2 object-cover" src="/assets/images/ya.jpg" alt="" />
                        <span className="bg-green-500 w-3 h-3 rounded-full z-10 absolute top-1 right-1"></span>
                    </div>
                    <div className="bg-white p-2 rounded-3xl mt-5 text-center">
                        <p className="text-green-600 font-medium text-sm">Hi, I&apos;m available for hire full time.</p>
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default Message