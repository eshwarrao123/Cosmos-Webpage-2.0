import React from 'react';
import { motion } from 'framer-motion';
import './GlassCard.css';

const GlassCard = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            className={`glass-card ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{
                scale: 1.02,
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
            }}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
