"use client"
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);

                    // Clear the form inputs
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });

                    toast.success('Message sent successfully!', {
                        position: toast.POSITION.TOP_CENTER,
                    });
                },
                (error) => {
                    console.log(error.text);
                    //error
                    toast.error('Failed to send message. Please try again.', {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
            );
    };

    return (
        <div>
            <form
                ref={form}
                className="flex flex-col space-y-8 items-center justify-center py-2 px-10 md:px-16"
                onSubmit={handleSubmit}
            >
                <h2 className="font-bold text-3xl mt-6">Hi 👋</h2>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    className="input-style"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    className="input-style"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />
                <textarea
                    name="message"
                    placeholder="Your message"
                    required
                    className="input-style"
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                />
                <button
                    className="mb-5 bg-blue-600 text-sm py-2 px-4 rounded-3xl font-medium text-white"
                    type="submit"
                >
                    Send Message
                </button>
            </form>

            {/* ToastContainer for displaying notifications */}
            <ToastContainer />
        </div>
    );
};

export default ContactForm;
