import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { planetsData } from '../data/planets';

const GravityCalculator = () => {
    const [weight, setWeight] = useState('');
    const [results, setResults] = useState(null);

    const calculateGravity = () => {
        const earthWeight = parseFloat(weight);
        if (isNaN(earthWeight) || earthWeight <= 0) return;

        // Extract gravity values from planetsData string (e.g., "3.7 m/s²")
        const earthGravity = 9.807;

        const calculatedResults = planetsData.map(planet => {
            const gravityStr = planet.details.physical.gravity; // e.g., "3.7 m/s²"
            const gravityVal = parseFloat(gravityStr.split(' ')[0].replace(',', ''));

            // Formula: Weight_Planet = Weight_Earth * (Gravity_Planet / Gravity_Earth)
            const planetWeight = earthWeight * (gravityVal / earthGravity);

            return {
                id: planet.id,
                name: planet.name,
                weight: planetWeight.toFixed(1),
                ratio: (gravityVal / earthGravity).toFixed(2)
            };
        });

        setResults(calculatedResults);
    };

    return (
        <div style={{ marginTop: '30px' }}>
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Gravity Simulator</h3>
            <GlassCard style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center', alignItems: 'center' }}>
                    <label>Your Weight on Earth (kg/lbs):</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: 'none',
                            background: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            fontSize: '1rem',
                            width: '100px'
                        }}
                    />
                    <button
                        onClick={calculateGravity}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '5px',
                            border: 'none',
                            background: '#4facfe',
                            color: 'white',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Calculate
                    </button>
                </div>

                {results && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                        {results.map(res => (
                            <div key={res.id} style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: '15px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <h4 style={{ margin: '0 0 5px 0', color: '#ccc' }}>{res.name}</h4>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{res.weight}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{res.ratio}x Earth</div>
                            </div>
                        ))}
                    </div>
                )}
            </GlassCard>
        </div>
    );
};

export default GravityCalculator;
