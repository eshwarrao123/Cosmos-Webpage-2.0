import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import './PlanetaryFormation.css';

const PlanetaryFormation = () => {
    return (
        <div className="formation-page">
            <motion.h1
                className="page-title center-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Planetary Formation & Origin
            </motion.h1>

            <div className="formation-content">
                <GlassCard className="formation-section">
                    <h2>The Nebular Hypothesis</h2>
                    <br />
                    <p>
                        Our solar system began as a giant cloud of molecular gas and dust. About 4.6 billion years ago,
                        this cloud collapsed under its own gravity, possibly triggered by a nearby supernova shockwave.
                    </p>
                    <div className="visual-container">
                        <motion.div
                            className="disk-animation"
                            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </GlassCard>

                <GlassCard className="formation-section">
                    <h2>Accretion Physics</h2>
                    <br />
                    <p>
                        As the nebula flattened into a protoplanetary disk, dust grains collided and stuck together to form clumps.
                        These clumps grew into planetesimals, and eventually into protoplanets, through a process called accretion.
                    </p>
                </GlassCard>

                <GlassCard className="formation-section">
                    <h2>Differentiation</h2>
                    <br />
                    <p>
                        As protoplanets grew massive enough, heat from impacts and radioactive decay caused them to melt.
                        Heavier elements like iron sank to the center to form cores, while lighter silicates floated to form mantles and crusts.
                    </p>
                </GlassCard>
            </div>
        </div>
    );
};

export default PlanetaryFormation;
