import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import './ExtremePhysics.css';

const ExtremePhysics = () => {
    // Generate random diamonds for animation
    const diamonds = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100 + '%',
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2
    }));

    return (
        <div className="extreme-page">
            <motion.h1
                className="page-title center-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Extreme Planetary Physics
            </motion.h1>

            <div className="extreme-content">
                <GlassCard className="extreme-section">
                    <h2>Diamond Rain on Ice Giants</h2>
                    <br />
                    <p>
                        On Uranus and Neptune, extreme pressure and temperature deep within the atmosphere may split hydrocarbon molecules (like methane), causing carbon atoms to compress into diamonds that rain down towards the core.
                    </p>
                    <div className="diamond-rain-visual">
                        {diamonds.map(d => (
                            <motion.div
                                key={d.id}
                                className="diamond"
                                style={{ left: d.left, top: '-20px' }}
                                animate={{ top: '120%' }}
                                transition={{ duration: d.duration, repeat: Infinity, ease: "linear", delay: d.delay }}
                            />
                        ))}
                    </div>
                </GlassCard>

                <GlassCard className="extreme-section">
                    <h2>Metallic Hydrogen</h2>
                    <br />
                    <p>
                        Inside Jupiter and Saturn, pressures are so high that hydrogen gas is squeezed until it becomes a liquid metal. This metallic hydrogen conducts electricity and generates the planets' massive magnetic fields.
                    </p>
                </GlassCard>



            </div>
        </div>
    );
};

export default ExtremePhysics;
