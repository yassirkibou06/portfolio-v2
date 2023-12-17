"use client"
import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dialog, Transition } from '@headlessui/react';
import { IoIosClose, IoIosMenu } from "react-icons/io";


const NavBar = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className="px-5 md:px-10 mt-5 flex items-center justify-between">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}>
                <h1 className="font-bold text-2xl">Yassir</h1>
            </motion.div>
            <ul className="hidden md:flex items-center space-x-10 mt-2">
                <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}>
                    <Link className="underline text-a-nav" href="/">Home</Link>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
                    <Link className="underline text-a-nav" href="/about">About</Link>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>
                    <Link className="underline text-a-nav" href="/work">Work</Link>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}>
                    <Link className="underline text-a-nav" href="/freelancer">Freelancer</Link>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}>
                    <Link className="underline text-a-nav" href="/contact">Contact</Link>
                </motion.li>
            </ul>
            {/*responsive mobile */}
            <IoIosMenu onClick={() => setOpen(true)} className="p-1 w-10 h-10 cursor-pointer bg-white rounded-full mt-2 md:hidden" />
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative block md:hidden z-[999]" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-full">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-10 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="relative rounded-md text-gray-600 hover:text-black focus:outline-none"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <IoIosClose className="h-10 w-10" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl ">
                                            <ul className="flex flex-col items-center space-y-16 mt-16">
                                                <li><Link className="text-nav-mb" href="/">Home</Link></li>
                                                <li><Link className="text-nav-mb" href="/about">About</Link></li>
                                                <li><Link className="text-nav-mb" href="/work">Work</Link></li>
                                                <li><Link className="text-nav-mb" href="/freelancer">Freelancer</Link></li>
                                                <li><Link className="text-nav-mb" href="/contact">Contact</Link></li>
                                            </ul>

                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default NavBar