import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { planetsData } from '../data/planets';
import GlassCard from './GlassCard';
import './DistanceCalculator.css';

const AU_IN_KM = 149597870.7;

const SPEEDS = [
    { id: 'apollo', name: 'Apollo Spacecraft (11 km/s)', value: 11 },
    { id: 'probe', name: 'Modern Probe (17 km/s)', value: 17 },
    { id: 'fast', name: 'New Horizons Max (58 km/s)', value: 58 },
    { id: 'future', name: 'Future Ion Drive (200 km/s)', value: 200 },
    { id: 'light', name: 'Speed of Light (c)', value: 299792 }
];

const DistanceCalculator = () => {
    const [fromPlanetId, setFromPlanetId] = useState('earth');
    const [toPlanetId, setToPlanetId] = useState('mars');
    const [selectedSpeed, setSelectedSpeed] = useState(SPEEDS[0].value);

    // Get planet objects
    const fromPlanet = planetsData.find(p => p.id === fromPlanetId);
    const toPlanet = planetsData.find(p => p.id === toPlanetId);

    // Calculate generic distance based on semi-major axis diff
    // Note: This is a simplification (Minimum Intercept Distance approx).
    // Real distance varies significantly.
    const calculations = useMemo(() => {
        if (!fromPlanet || !toPlanet) return null;

        const dist1 = fromPlanet.details.physical.distanceFromSun || 0;
        const dist2 = toPlanet.details.physical.distanceFromSun || 0;

        const diffAU = Math.abs(dist1 - dist2);
        const diffKm = diffAU * AU_IN_KM;

        // Time = Distance / Speed
        const timeSeconds = diffKm / selectedSpeed;
        const timeMinutes = timeSeconds / 60;
        const timeHours = timeMinutes / 60;
        const timeDays = timeHours / 24;
        const timeYears = timeDays / 365.25;

        return {
            au: diffAU.toFixed(2),
            km: (diffKm / 1000000).toFixed(1), // Millions of km
            seconds: Math.round(timeSeconds),
            minutes: timeMinutes.toFixed(1),
            hours: timeHours.toFixed(1),
            days: Math.round(timeDays).toLocaleString(),
            years: timeYears.toFixed(2)
        };
    }, [fromPlanet, toPlanet, selectedSpeed]);

    // Comparison max (Sun to Neptune is ~30 AU)
    // We'll use 40 AU as max scale for the bar
    const percentage = Math.min((parseFloat(calculations?.au || 0) / 40) * 100, 100);

    return (
        <GlassCard className="distance-calculator">
            <h2>Interplanetary Travel Calculator</h2>

            <div className="calculator-controls">
                <div className="control-group">
                    <label>Origin</label>
                    <select
                        value={fromPlanetId}
                        onChange={(e) => setFromPlanetId(e.target.value)}
                        className="planet-select"
                    >
                        {planetsData.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                </div>

                <div className="control-group">
                    <label>Destination</label>
                    <select
                        value={toPlanetId}
                        onChange={(e) => setToPlanetId(e.target.value)}
                        className="planet-select"
                    >
                        {planetsData.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                </div>

                <div className="control-group">
                    <label>Spacecraft Speed</label>
                    <select
                        value={selectedSpeed}
                        onChange={(e) => setSelectedSpeed(Number(e.target.value))}
                        className="speed-select"
                    >
                        {SPEEDS.map(s => (
                            <option key={s.id} value={s.value}>{s.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <AnimatePresence mode='wait'>
                {calculations && (
                    <motion.div
                        key={fromPlanetId + toPlanetId + selectedSpeed}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="results-display"
                    >
                        <div className="distance-metrics">
                            <div className="metric-item">
                                <h4>Average Distance</h4>
                                <div className="metric-value">{calculations.au} AU</div>
                                <small style={{ color: '#888', fontSize: '0.7rem' }}>(Astronomical Units)</small>
                            </div>
                            <div className="metric-item">
                                <h4>In Kilometers</h4>
                                <div className="metric-value">{calculations.km} Million km</div>
                            </div>
                        </div>

                        <div className="travel-time-result">
                            <h3>Estimated Travel Time</h3>
                            <div className="time-value">
                                {Number(calculations.years) >= 1 && `${calculations.years} Years`}
                                {Number(calculations.years) < 1 && Number(calculations.days) >= 1 && `${calculations.days} Days`}
                                {Number(calculations.days) < 1 && Number(calculations.hours) >= 1 && `${calculations.hours} Hours`}
                                {Number(calculations.hours) < 1 && `${calculations.minutes} Minutes`}
                            </div>
                        </div>

                        <div className="visual-comparison">
                            <div className="comparison-label">
                                <span>0 AU</span>
                                <span>Relative Interplanetary Scale (Max 40 AU)</span>
                                <span>40 AU</span>
                            </div>
                            <div className="bar-container">
                                <motion.div
                                    className="distance-bar"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percentage}%` }}
                                    transition={{ duration: 1, ease: "circOut" }}
                                />
                            </div>
                        </div>

                        <p className="educational-note">
                            * Note: Calculations assume a straight-line path at constant speed based on average orbital distances.
                            Real missions utilize Hohmann transfer orbits, gravity assists, and launch windows, which significantly vary travel time and distance.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </GlassCard>
    );
};

export default DistanceCalculator;
