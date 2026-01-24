import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import DistanceCalculator from '../components/DistanceCalculator';
import EarthDistanceCards from '../components/EarthDistanceCards';
import './CosmicTravel.css';

const CosmicTravel = () => {
    return (
        <div className="cosmic-travel-page">
            <motion.div
                className="travel-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Cosmic Travel</h1>
                <p>Exploring the immense scales of our solar system and the physics of interplanetary transit.</p>
            </motion.div>

            <div className="travel-content">
                <GlassCard className="travel-intro-card">
                    <h2>The scale of Space</h2>
                    <p>
                        Distances in space are so vast that we use <strong>Astronomical Units (AU)</strong> to measure them.
                        One AU is the average distance from the Earth to the Sun, approximately <strong>150 million kilometers</strong>.
                        To traverse these distances, we must understand the relationship between speed, time, and orbital mechanics.
                    </p>
                </GlassCard>

                <DistanceCalculator />
                <EarthDistanceCards />
            </div>
        </div>
    );
};

export default CosmicTravel;
