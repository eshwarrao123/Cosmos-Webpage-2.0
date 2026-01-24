import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import './BlackHoles.css';

const BlackHoles = () => {
    return (
        <div className="blackhole-page">
            <div className="blackhole-hero">
                <motion.div
                    className="blackhole-visual"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                ></motion.div>
                <div className="accretion-disk"></div>
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
