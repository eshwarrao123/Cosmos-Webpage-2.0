import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { motion } from 'framer-motion';
import { planetsData } from '../data/planets';
import './Planets.css';

const Planets = () => {
    return (
        <div className="planets-page">
            <motion.h1
                className="page-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                The Planets
            </motion.h1>
            <div className="planets-grid">
                {planetsData.filter(p => p.id !== 'sun' && p.id !== 'moon').map((planet, index) => (
                    <Link to={`/planets/${planet.id}`} key={planet.id} style={{ textDecoration: 'none' }}>
                        <GlassCard delay={index * 0.1} className="planet-card">
                            <div className="planet-visual-container">
                                <img
                                    src={planet.image}
                                    alt={planet.name}
                                    className="planet-visual-img"
                                />
                            </div>
                            <h2>{planet.name}</h2>
                            <p className="planet-desc">{planet.description}</p>
                            <div className="planet-facts">
                                {planet.facts.map(fact => (
                                    <span key={fact} className="fact-badge">{fact}</span>
                                ))}
                            </div>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Planets;

