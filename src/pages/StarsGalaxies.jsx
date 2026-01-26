import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import './StarsGalaxies.css';

const StarsGalaxies = () => {
    return (
        <div className="stars-page">
            <motion.header
                className="stars-header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Stars & Galaxies</h1>
                <p>The building blocks of the Universe</p>
            </motion.header>

            <section className="section-block">
                <GlassCard className="galaxy-card">
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <motion.img
                            src="/milkyway.png"
                            alt="The Milky Way"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            style={{
                                width: '300px',
                                height: '300px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                filter: 'drop-shadow(0 0 20px rgba(100,100,255,0.3))'
                            }}
                        />
                    </div>
                    <br />
                    <h2>The Milky Way</h2>
                    <br />
                    <p>
                        Our home galaxy, a barred spiral galaxy containing 100–400 billion stars.
                        It is estimated to contain at least that many planets. The Solar System is located
                        about 27,000 light-years from the Galactic Center.
                    </p>
                </GlassCard>
            </section>

            <section className="stars-grid">
                <GlassCard delay={0.2} className="star-type-card">
                    <h3>Proxima Centauri</h3>
                    <p>The closest known star to the Sun, a red dwarf located 4.2465 light-years away within the constellation of Centaurus.</p>
                </GlassCard>
                <GlassCard delay={0.3} className="star-type-card">
                    <h3>Betelgeuse</h3>
                    <p>A red supergiant of spectral type M1-2, one of the largest stars visible to the naked eye. If placed at the center of our solar system, its surface would extend past the asteroid belt.</p>
                </GlassCard>
                <GlassCard delay={0.4} className="star-type-card">
                    <h3>Sirius</h3>
                    <p>The brightest star in the night sky. Sirius is a binary star system consisting of a main-sequence star of spectral type A0 or A1 and a faint white dwarf companion.</p>
                </GlassCard>
            </section>
        </div>
    );
};

export default StarsGalaxies;
