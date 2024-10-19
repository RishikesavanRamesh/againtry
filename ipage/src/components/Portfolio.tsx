// src/Portfolio.tsx

import React, { useEffect, useState } from 'react';
import r2d2Image from '../assets/r2d2.png'; // Adjust the path to your R2D2 image
import profileImage from "../assets/profile.jpg"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons
import Modal from 'react-modal';
import cv from '../assets/RKCV.pdf'

import WorkSection from './WorkSection';
import ContactForm from './ContactForm';
const Portfolio: React.FC = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    function openModal() {
        setModalIsOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }

    function closeModal() {
        setModalIsOpen(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }

    useEffect(() => {
        const shakeInterval = setInterval(() => {
            setIsShaking(true);
            setTimeout(() => setIsShaking(false), 500); // Shake for 500ms
        }, 4000); // Shake every 4 seconds

        return () => clearInterval(shakeInterval);
    }, []);

    return (
        <div className="font-sans bg-black text-white w-[80%] mx-auto flex flex-col items-center  space-y-4">
            <style>
                {`
                    @keyframes shake {
                        0% { transform: translate(0); }
                        25% { transform: translate(-1px, 0); }
                        50% { transform: translate(1px, 0); }
                        75% { transform: translate(-2px, 0); }
                        100% { transform: translate(0); }
                    }
                    .shake {
                        animation: shake 0.5s forwards, colorChange 2s infinite;
                        background: #2563EB;
                        color: white;
                    }
                `}
            </style>


            <header className="flex flex-col items-start justify-center text-white w-full mt-8">
                <h1 className="text-4xl md:text-6xl uppercase text-left w-full md:w-[70%] -mb-3">
                    Rishikesavan Ramesh
                </h1>
                <nav className="flex flex-wrap space-x-4 py-4 text-2xl md:text-4xl" style={{ alignItems: 'center' }}>
                    <a href="#home" className="text-blue-300 hover:text-blue-100">Home /</a>
                    <a href="#about" className="text-blue-300 hover:text-blue-100">About /</a>
                    <a href="#work" className="text-blue-300 hover:text-blue-100">Work /</a>
                    <a href="#contact" className="text-blue-300 hover:text-blue-100">Contact</a>
                </nav>
            </header>
            <section id="home" className="py-20 w-full flex flex-col-reverse md:flex-row justify-between items-center h-auto md:h-auto">
                <div className="text-left w-full md:w-1/2 flex flex-col justify-center h-full">
                    <h2 className="text-3xl">Welcome to My Portfolio</h2>
                    <p className="mt-4">
                        You found a roboticist! I’m passionate about technology and innovation, always eager to create solutions that make life easier and more enjoyable.
                    </p>
                    <blockquote className="mt-6 italic text-lg text-blue-300">
                        "I am not fast. I am not strong. But I am here to help." — Baymax
                    </blockquote>
                </div>
                <img src={r2d2Image} alt="R2D2" className="w-full md:w-1/3 h-auto md:ml-4 object-contain max-h-[70vh] " />
            </section>




            <section id="about" className="w-full p-6 md:p-10 text-left bg-gray-800 flex flex-col md:flex-row items-start">
                <img src={profileImage} alt="Profile" className="w-48 h-auto rounded-lg mb-4 md:mb-0 md:mr-8" />
                <div className="flex flex-col justify-start w-full">
                    <h2 className="text-4xl font-bold">About Me</h2>
                    <p className="mt-4 text-lg">
                        As a robotics engineer and open-source advocate, I believe in the power of collaboration and creativity to shape a better tomorrow. I’m inspired by the endless possibilities of robotics to solve real-world challenges and enhance everyday life. My journey is driven by a commitment to developing innovative, open solutions that empower others. I’m excited to create robots that not only push technological boundaries but also foster community and inspire future generations.
                    </p>
                    <div className="flex space-x-4 mt-4 items-center">
                        <button
                            onClick={openModal}
                            className={`font-bold text-blue-300 hover:bg-blue-600 hover:text-white border border-blue-600 py-2 px-4 transition-transform transform hover:scale-105 ${isShaking ? 'shake' : ''}`}
                            style={{ borderRadius: '0' }} // No corner radius
                        >
                            View CV
                        </button>

                        <div className="flex space-x-4 items-center">
                            <a href="https://github.com/RishikesavanRamesh" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                                <FaGithub size={28} />
                            </a>
                            <a href="https://linkedin.com/in/rishikesavan-ramesh" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100">
                                <FaLinkedin size={28} />
                            </a>
                            <a href="mailto:automationwith.rishikesavan@gmail.com" className="text-blue-300 hover:text-blue-100">
                                <FaEnvelope size={28} />
                            </a>
                        </div>
                    </div>
                </div>


                {/* Button to open CV modal */}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="CV Modal"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly transparent background
                        },
                        content: {
                            background: 'rgba(0, 0, 0, 1)',
                            color: 'white',
                            borderRadius: '0px',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '95vh', // Adjust height as needed
                        },
                    }}
                >
                    <iframe
                        src={cv} // Using the imported CV directly
                        style={{
                            width: '100%',
                            height: 'calc(100% - 30px)', // Adjust this value based on the button height
                            border: 'none' // Remove default border
                        }}
                        title="My CV"
                    ></iframe>
                    <div className="flex justify-end font-bold space-x-2 mt-2">
                        <button
                            onClick={closeModal}
                            className="text-white border-2 bg-black hover:bg-red-500 border-white-600 hover:border-red-400 py-2 px-3"
                            style={{ borderRadius: '0' }} // No corner radius
                        >
                            Close
                        </button>
                        <a
                            href={cv} // Use the same CV link for downloading
                            download // This attribute makes it a download link
                            className="text-blue-300 hover:text-green-400 border-2 border-white-600 hover:border-green-400 py-2 px-3"
                            style={{ borderRadius: '0' }} // No corner radius
                        >
                            Download CV
                        </a>
                    </div>
                </Modal>

            </section>




            <WorkSection />

            <ContactForm />



            <footer className="bg-blue-300 w-[100vw] text-black text-center ">
                <p>&copy; {new Date().getFullYear()} RK's Portfolio</p>
            </footer>
        </div>
    );
};

export default Portfolio;
