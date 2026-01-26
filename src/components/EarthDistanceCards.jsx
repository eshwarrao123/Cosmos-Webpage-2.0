import React from 'react';
import { motion } from 'framer-motion';
import { planetsData } from '../data/planets';
import GlassCard from './GlassCard';
import './EarthDistanceCards.css';

const AU_IN_KM = 149597870.7;
const REF_SPEED = 17; // km/s (Voyager/Modern Probe)

const EarthDistanceCards = () => {
    const earth = planetsData.find(p => p.id === 'earth');
    const others = planetsData.filter(p => p.id !== 'earth' && p.id !== 'moon' && p.id !== 'sun');

    return (
        <div className="earth-distances-container">
            <h2 className="section-title">Distances From Earth</h2>
            <p className="section-subtitle">Estimated travel time at 17 km/s (Voyager speed)</p>

            <div className="earth-grid">
                {others.map((planet, index) => {
                    let diffAU, diffKm;

                    if (planet.id === 'moon') {
                        diffKm = 384400;
                        diffAU = diffKm / AU_IN_KM;
                    } else {
                        const dist1 = earth.details.physical.distanceFromSun;
                        const dist2 = planet.details.physical.distanceFromSun;
                        diffAU = Math.abs(dist1 - dist2);
                        diffKm = diffAU * AU_IN_KM;
                    }

                    const days = (diffKm / REF_SPEED) / (24 * 3600);
                    const years = days / 365.25;

                    return (
                        <GlassCard key={planet.id} delay={index * 0.1} className="earth-dist-card">
                            <div className="planet-banner" style={{ background: planet.color }}></div>
                            <h3 className="card-planet-name">{planet.name}</h3>
                            <div className="dist-stats">
                                <div className="stat">
                                    <span className="label">Distance</span>
                                    <span className="value">{diffAU.toFixed(2)} AU</span>
                                </div>
                                <div className="stat">
                                    <span className="label">Travel Time</span>
                                    <span className="value">
                                        {years > 1
                                            ? `${years.toFixed(1)} Years`
                                            : `${Math.round(days)} Days`
                                        }
                                    </span>
                                </div>
                            </div>
                        </GlassCard>
                    );
                })}
            </div>
        </div>
    );
};

export default EarthDistanceCards;
