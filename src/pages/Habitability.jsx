import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import './Habitability.css';

const Habitability = () => {
    return (
        <div className="habitability-page">
            <motion.h1
                className="page-title center-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Habitability & Astrobiology
            </motion.h1>

            <div className="habitability-content">
                <GlassCard className="habitability-section">
                    <h2>The Goldilocks Zone</h2>
                    <br />
                    <p>
                        The circumstellar habitable zone (CHZ), or Goldilocks zone, is the range of orbits around a star within which a planetary surface can support liquid water given sufficient atmospheric pressure.
                    </p>
                    <div className="zone-visual">
                        <span className="zone-label">Too Hot</span>
                        <span className="zone-label">Habitable Zone</span>
                        <span className="zone-label">Too Cold</span>
                    </div>
                </GlassCard>

                <GlassCard className="habitability-section">
                    <h2>Ingredients for Life</h2>
                    <br />
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                        <li><strong>Liquid Water:</strong> A solvent for biochemical reactions.</li>
                        <li><strong>Energy Source:</strong> Solar energy or chemical energy (e.g., thermal vents).</li>
                        <li><strong>Chemical Building Blocks:</strong> Carbon, Hydrogen, Nitrogen, Oxygen, Phosphorus, Sulfur (CHNOPS).</li>
                    </ul>
                </GlassCard>
            </div>
        </div>
    );
};

export default Habitability;
