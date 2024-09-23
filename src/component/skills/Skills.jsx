// src/Skills.js
import React, { useEffect, useState } from 'react';
import './skills.css'; // Import the CSS styles
import html from './html.png';
import css from './css.png';
import js from './js.png';
import react from './react.png';
import figma from './figma.png';
import redux from './redux.png';
import bootstrap from './bootstrap.png';
import canva from './canva.png';
import antd from './antd.png';
import github from './github.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const icons = [
    { src: html, alt: 'HTML' },
    { src: css, alt: 'CSS' },
    { src: js, alt: 'JavaScript' },
    { src: react, alt: 'React' },
    { src: figma, alt: 'Figma' },
    { src: redux, alt: 'Redux' },
    { src: bootstrap, alt: 'Bootstrap' },
    { src: canva, alt: 'Canva' },
    { src: antd, alt: 'Antd' },
    { src: github, alt: 'Github' },
];

const Skills = () => {
    const [positions, setPositions] = useState([]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const getRandomPosition = () => {
        return {
            top: Math.random() * 80 + '%', // 80% to avoid overflow
            left: Math.random() * 80 + '%',
        };
    };

    useEffect(() => {
        const updatePositions = () => {
            const newPositions = icons.map(() => getRandomPosition());
            setPositions(newPositions);
        };

        updatePositions(); // Set initial positions
        const interval = setInterval(updatePositions, 2000); // Change position every 2 seconds

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    return (
        <>
        <div className='d-flex align-items-center justify-content-center'>
        <div className='skills-text' style={{marginTop:"40px", height:"60px"}} data-aos="zoom-in"> 
            <h4>SKILLS</h4>
        </div>
        </div>
        
      
        <div className="icon-container" style={{marginTop:"20px"}} data-aos="zoom-in">
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="icon"
                    style={{
                        top: positions[index]?.top,
                        left: positions[index]?.left,
                        position: 'absolute',
                    }}
                >
                    <img src={icon.src} alt={icon.alt} />
                </div>
            ))}
        </div>
        <div className='newstext'>
                <div className="ticker">
                    <span>HTML| CSS | JavaScript | Figma | React | Redux | Bootstrap | Canva | Redux | Antd | Github
                    </span>
                </div>
</div>
        </>
    );
};

export default Skills;
