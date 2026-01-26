import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import './Home.css';
import homeBg from '../assets/imageback.webp';

const Home = () => {
    const navigate = useNavigate();

    // ... topics array ... (Assuming topics is defined here or outside)
    const topics = [
        {
            title: "Planets",
            description: "Detailed insights into the 8 planets of our solar system.",
            link: "/planets",
            delay: 0.1
        },
        {
            title: "Solar System",
            description: "Explore the sun, moons, comets, and asteroids nearby.",
            link: "/solar-system",
            delay: 0.2
        },
        {
            title: "Stars & Galaxies",
            description: "Journey into the deep cosmos, nebulae, and far away galaxies.",
            link: "/stars-galaxies",
            delay: 0.3
        },
        {
            title: "Black Holes",
            description: "Dive into the mysteries of singularities and wormholes.",
            link: "/black-holes",
            delay: 0.35
        },
        {
            title: "Research",
            description: "Stay updated with the latest NASA discoveries and missions.",
            link: "/research",
            delay: 0.4
        },
        {
            title: "Travel",
            description: "Calculate interplanetary distances and travel times.",
            link: "/travel",
            delay: 0.45
        }
    ];

    return (
        <div className="home-container" style={{ position: 'relative', overflow: 'hidden' }}>
            <div
                className="home-background"
                style={{
                    backgroundImage: `url(${homeBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            <section className="hero-section">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="hero-content"
                >
                    <motion.h1
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hero-title"
                    >
                        COSMOS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="hero-subtitle"
                    >
                        Explore the Wonders of the Universe
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Button onClick={() => navigate('/planets')} variant="primary">
                            Start Journey
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            <section className="topics-section">
                <div className="topics-grid">
                    {topics.map((topic) => (
                        <div key={topic.title} onClick={() => navigate(topic.link)} style={{ cursor: 'pointer' }}>
                            <GlassCard delay={topic.delay} className="topic-card">
                                <h3>{topic.title}</h3>
                                <p>{topic.description}</p>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
