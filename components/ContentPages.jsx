"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarLoader } from 'react-spinners';
import NavBar from '@/components/NavBar';

const ContentPages = ({ all }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setLoading(false);
        };

        // Call the fetchData function
        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <BarLoader color="#000000" />
                </div>
            ) : (
                <>
                    <NavBar />
                    {all}
                </>
            )}
        </>
    );
};

export default ContentPages;
