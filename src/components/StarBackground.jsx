import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './StarBackground.css';

const StarBackground = () => {
    // Generate stars only once to avoid re-renders causing flickering
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = (count) => {
            const newStars = [];
            for (let i = 0; i < count; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 2 + 1,
                    duration: Math.random() * 10 + 20, // 20-30s animation
                    delay: Math.random() * 5
                });
            }
            return newStars;
        };
        setStars(generateStars(150));
    }, []);

    return (
        <div className="star-background">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="star"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: star.delay
                    }}
                />
            ))}
            <div className="nebula-overlay"></div>
        </div>
    );
};

export default StarBackground;
