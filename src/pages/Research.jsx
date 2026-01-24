import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { fetchAPOD } from '../services/nasaApi';
import './Research.css';

const researchData = [
    {
        title: "James Webb Space Telescope",
        date: "Latest Update",
        brief: "The James Webb Space Telescope has captured the most detailed images of the early universe, revealing galaxies that formed just after the Big Bang.",
        tags: ["Telescope", "Deep Space"]
    },
    {
        title: "Perseverance Rover on Mars",
        date: "Mission Ongoing",
        brief: "NASA's Perseverance rover continues to explore the Jezero Crater, searching for signs of ancient microbial life and collecting samples for future return.",
        tags: ["Mars", "Rover"]
    },
    {
        title: "Artemis Program",
        date: "Upcoming",
        brief: "NASA is preparing for the Artemis II mission, which will send astronauts around the Moon, paving the way for a sustained lunar presence.",
        tags: ["Moon", "Human Spaceflight"]
    },
    {
        title: "Exoplanet Discovery",
        date: "Recent Finding",
        brief: "Astronomers have discovered a new Earth-sized exoplanet in the habitable zone of a nearby star, raising hopes for finding extraterrestrial life.",
        tags: ["Exoplanets", "Astronomy"]
    }
];

const Research = () => {
    const [apod, setApod] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadApod = async () => {
            const data = await fetchAPOD();
            setApod(data);
            setLoading(false);
        };
        loadApod();
    }, []);

    return (
        <div className="research-page">
            <motion.h1
                className="page-title center-text"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                NASA Research & Discoveries
            </motion.h1>

            <div className="research-content">
                <GlassCard className="research-section full-width" style={{ marginBottom: '40px' }}>
                    <h2 style={{ background: 'linear-gradient(45deg, #ff9a9e, #fad0c4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Astronomy Picture of the Day</h2>
                    {loading ? (
                        <div style={{ padding: '40px', textAlign: 'center' }}>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                style={{ width: '40px', height: '40px', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', margin: '0 auto 20px' }}
                            />
                            <p>Establishing downlink with NASA servers...</p>
                        </div>
                    ) : apod ? (
                        <div className="apod-container">
                            {apod.media_type === 'image' ? (
                                <img src={apod.url} alt={apod.title} className="apod-image" />
                            ) : (
                                <iframe
                                    src={apod.url}
                                    title={apod.title}
                                    frameBorder="0"
                                    allowFullScreen
                                    className="apod-video"
                                ></iframe>
                            )}
                            <div className="apod-info">
                                <h3>{apod.title}</h3>
                                <p className="apod-date">{apod.date}</p>
                                <p className="apod-explanation">{apod.explanation}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Connection interrupted. Unable to retrieve telemetry.</p>
                    )}
                </GlassCard>

                <div className="research-grid">
                    {researchData.map((item, index) => (
                        <GlassCard key={index} delay={index * 0.1} className="research-card">
                            <div className="card-header">
                                <h2>{item.title}</h2>
                                <br />
                                <span className="date-badge">{item.date}</span>
                            </div>
                            <br />
                            <p>{item.brief}</p>
                            <div className="tags">
                                <br />
                                {item.tags.map(tag => (
                                    <span key={tag} className="tag">#{tag}</span>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Research;
