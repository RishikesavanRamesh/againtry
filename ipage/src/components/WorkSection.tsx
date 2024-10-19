import { useState } from 'react';

// Import your images directly
import swervebotImage0 from '../assets/projects/swervebot0.png';
import swervebotImage1 from '../assets/projects/swervebot1.png';
import swervebotImage2 from '../assets/projects/swervebot2.png';
import swervebotImage3 from '../assets/projects/swervebot3.png';
import bx4pieImage0 from '../assets/projects/bx4pie0.png';
import bx4pieImage1 from '../assets/projects/bx4pie1.png';
import bx4pieImage2 from '../assets/projects/bx4pie2.png';
import bx4pieImage3 from '../assets/projects/bx4pie3.png';
import bx4pieImage4 from '../assets/projects/3dprnt.jpg';
import bx4pieImage5 from '../assets/projects/bx4pie.jpeg';
import r2ppaImage from '../assets/projects/r2ppa.png';

const projects = [
    {
        title: "SWERVEBOT",
        link: "https://github.com/RishikesavanRamesh/SWERVE-DRIVE",
        description: "A four-wheel independent drive robot model, designed for enhanced maneuverability and versatility.",
        images: [swervebotImage0, swervebotImage1, swervebotImage2, swervebotImage3]
    },
    {
        title: "R2PPA",
        link: "https://rishikesavanramesh.github.io/R2PPA",
        description: "A personal package archive (PPA) for hosting my ROS2 packages.",
        images: [r2ppaImage]
    },
    {
        title: "BX4PIE",
        link: "https://github.com/RishikesavanRamesh/BX4PIE",
        description: "A custom DIY teleoperation controller built with Raspberry Pi and a WaveShare display for affordable remote control.",
        images: [bx4pieImage0, bx4pieImage1, bx4pieImage2, bx4pieImage3, bx4pieImage4, bx4pieImage5]
    }
];

const WorkSection = () => {
    const [currentImageIndices, setCurrentImageIndices] = useState(Array(projects.length).fill(0));

    const handleNext = (projectIndex: number) => {
        setCurrentImageIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[projectIndex] = (newIndices[projectIndex] + 1) % projects[projectIndex].images.length;
            return newIndices;
        });
    };

    const handlePrev = (projectIndex: number) => {
        setCurrentImageIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[projectIndex] = (newIndices[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length;
            return newIndices;
        });
    };

    return (<section
        id="work"
        className="w-full py-20 text-center border"
        style={{ minHeight: '400px', maxHeight: '800px' }} // Adjust as needed
    >
        <h2 className="text-3xl">My Work</h2>
        <p className="mt-4">Here are some of my recent projects:</p>
        <div className="flex overflow-x-auto space-x-4 mt-4 p-4">
            {projects.map((project, projectIndex) => (
                <div
                    key={projectIndex}
                    className="border-2 p-4 rounded-lg min-h-[400px] w-[80vw] md:w-[60vw] flex-shrink-0"
                    style={{ minWidth: '300px', maxWidth: '600px' }} // Specify min and max widths
                >
                    <div className="relative w-full h-60 md:h-72 flex items-center justify-center">
                        <button
                            onClick={() => handlePrev(projectIndex)}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 border-2 shadow-lg transition-opacity duration-200 hover:opacity-100 opacity-75"
                        >
                            &#8249;
                        </button>
                        <img
                            src={project.images[currentImageIndices[projectIndex]]}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <button
                            onClick={() => handleNext(projectIndex)}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 border-2 shadow-lg transition-opacity duration-200 hover:opacity-100 opacity-75"
                        >
                            &#8250;
                        </button>
                        <div className="absolute top-0 right-0 p-4 text-white text-right">
                            <div className="bg-gradient-to-r from-black to-blue-800 p-2 rounded-lg">
                                <strong>{project.description}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-2">
                        <h3 className="text-xl">{project.title}</h3>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 border-2 text-blue-300 p-2 hover:bg-blue-700 hover:text-white transition duration-200"
                        >
                            Go to Project
                        </a>
                    </div>
                </div>
            ))}
        </div>
    </section>
    


    );
};

export default WorkSection;
