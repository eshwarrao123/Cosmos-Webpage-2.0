import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import './SolarSystem.css';

const SolarSystem = () => {
    return (
        <div className="solar-page">
            <motion.div
                className="solar-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1>The Solar System</h1>
                <p>Our cosmic neighborhood, dominated by the Sun.</p>
            </motion.div>

            <div className="solar-content">
                <GlassCard className="sun-card">
                    <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto 20px', height: '500px' }}>
                        <iframe
                            src="https://eyes.nasa.gov/apps/solar-system/#/home?embed=true"
                            width="100%"
                            height="100%"
                            style={{ border: 'none', borderRadius: '12px', background: '#000' }}
                            title="NASA Eyes Solar System"
                        />
                    </div>
                    <h2>The Sun</h2>
                    <br />
                    <p>
                        The star at the center of our Solar System. It is a nearly perfect sphere of hot plasma,
                        heated to incandescence by nuclear fusion reactions in its core.
                    </p>
                </GlassCard>

                <div className="belts-grid">
                    <GlassCard delay={0.2}>
                        <h3>Asteroid Belt</h3>
                        <p>
                            The circumstellar disc in the Solar System located roughly between the orbits of Mars and Jupiter.
                            It is occupied by numerous irregularly shaped bodies called asteroids or minor planets.
                        </p>
                    </GlassCard>

                    <GlassCard delay={0.4}>
                        <h3>Kuiper Belt</h3>
                        <p>
                            A circumstellar disc in the outer Solar System, extending from the orbit of Neptune to approximately 50 AU from the Sun.
                            It is similar to the asteroid belt, but is far larger—20 times as wide and 20 to 200 times as massive.
                        </p>
                    </GlassCard>

                    <GlassCard delay={0.6}>
                        <h3>Oort Cloud</h3>
                        <p>
                            A theoretical cloud of predominantly icy planetesimals proposed to surround the Sun at distances ranging from
                            2,000 to 200,000 AU. It is divided into two regions: a disc-shaped inner Oort cloud and a spherical outer Oort cloud.
                        </p>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default SolarSystem;
