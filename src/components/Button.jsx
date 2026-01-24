import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
    return (
        <motion.button
            type={type}
            className={`cosmos-button ${variant} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
            <div className="button-glow"></div>
        </motion.button>
    );
};

export default Button;
