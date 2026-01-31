import React from 'react'
import {Typewriter} from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
// import profileImage from '../../assets/tech_logo/KhushiPics.jpg';
 import profileImage from '../../assets/tech_logo/mypic.jpg';



const About = () => {
    return (
        <section
            id='about'
            className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
        >
            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                {/* Left Side */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                    {/* Greeting */}
                    <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
                        Khushi Singh
                    </h2>
                    {/* Skills Heading with typing effect*/}
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                         I am a <span className='text-white'>
                          
                        
                        <Typewriter
                            words={[ 'Fullstack Developer', 'Java Developer',  ]}
                            loop
                            cursor
                            cursorStyle="_"
                            typespeed={100}
                            deleteSpeed={50}
                            delaySpeed={2000}
                       />
                        </span>
                    </h3>
                    {/* About me paragraph */}
                    <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
                       I am a passionate Java Developer with a strong foundation in backend development and object-oriented programming. As a fresher, I have hands-on experience working with Core Java, Spring Framework, Spring Boot, RESTful APIs, JDBC, and SQL to build scalable and maintainable applications. I am skilled in developing backend services, handling database integration, and implementing business logic following best practices. I am eager to contribute to real-world projects in a forward-thinking organization where I can continuously enhance my technical skills and deliver impactful solutions.
                    </p>
                    {/* Resume Button */}
                    <a href="/Khushi Singh (1).pdf"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
                    style={{
                        background: 'linear-gradient(90deg, #8245ec, #a855fy)',
                        boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec"
                    }}
                    >
                        DOWNLOAD CV
                    </a>
                </div>
                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                <Tilt
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}

                >
                    <img 
                    src={profileImage}
                    alt="Khushi Singh"
                    className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                    />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};
export default About;
