import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import './BlackHoles.css';

const BlackHoles = () => {
    return (
        <div className="blackhole-page">

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px 0',
                position: 'relative',
                width: '300px',
                height: '300px',
            }}>
                {/* Rotating Ring/Glow */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        inset: 0, // Make it slightly larger
                        borderRadius: '50%',
                        background: 'conic-gradient(from 0deg, transparent 0%, rgba(61, 50, 50, 0.1) 50%, transparent 100%)',
                        boxShadow: '0 0 50px rgba(15, 15, 99, 0.2)', // Subtle blueish glow
                        mixBlendMode: 'screen'
                    }}
                />

                {/* Static Black Hole Image */}
                <img
                    src="/blackhole.webp"
                    alt="Black Hole"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        position: 'relative',
                        zIndex: 2,
                        boxShadow: '0 0 50px rgba(15, 15, 99, 0.8)' // Deep shadow
                    }}
                />
            </div>



            <motion.div
                className="content-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <h1>Black Holes & Wormholes</h1>

                <GlassCard className="info-block">
                    <h2>Black Holes</h2>
                    <p>
                        A region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it.
                        The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.
                    </p>
                    <div className="sub-info">
                        <h3>Event Horizon</h3>
                        <br />
                        <p>The boundary around a black hole beyond which no light or other radiation can escape.</p>
                    </div>
                    <div className="sub-info">
                        <h3>Singularity</h3>
                        <br />
                        <p>The center of a black hole, where matter is crushed to infinite density.</p>
                    </div>
                </GlassCard>

                <GlassCard className="info-block" delay={0.3}>
                    <h2>Wormholes</h2>
                    <p>
                        A speculative structure linking disparate points in spacetime, based on a special solution of the Einstein field equations.
                        A wormhole can be visualized as a tunnel with two ends at separate points in spacetime (i.e., different locations, or different points in time).
                    </p>
                </GlassCard>
            </motion.div>
        </div>
    );
};

export default BlackHoles;
