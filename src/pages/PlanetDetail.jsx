import Planet3D from '../components/Planet3D';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { planetsData } from '../data/planets';
import './PlanetDetail.css';

const PlanetDetail = () => {
    const { planetId } = useParams();
    const planet = planetsData.find(p => p.id === planetId);
    const [activeTab, setActiveTab] = useState('physical');
    const [show3D, setShow3D] = useState(false);

    if (!planet) {
        return (
            <div className="planet-detail-page" style={{ textAlign: 'center', paddingTop: '150px' }}>
                <h1>Planet Not Found</h1>
                <Link to="/planets" style={{ color: 'cyan', textDecoration: 'underline' }}>Return to Planets</Link>
            </div>
        );
    }

    const tabs = [
        { id: 'physical', label: 'Physical Props' },
        { id: 'internal', label: 'Internal Structure' },
        { id: 'atmosphere', label: 'Atmosphere' },
        { id: 'magnetosphere', label: 'Magnetosphere' }
    ];

    const renderTabContent = () => {
        const details = planet.details[activeTab];

        // Handle different data structures for different tabs
        if (activeTab === 'internal' || activeTab === 'atmosphere' || activeTab === 'magnetosphere') {
            return (
                <div className="data-grid">
                    {Object.entries(details).map(([key, value]) => (
                        <div key={key} className="data-item">
                            <span className="data-label" style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="data-value">{value}</span>
                        </div>
                    ))}
                </div>
            );
        }

        // Default for physical props (same structure effectively but explicitly handled if needed)
        return (
            <div className="data-grid">
                {Object.entries(details).map(([key, value]) => (
                    <div key={key} className="data-item">
                        <span className="data-label" style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="data-value">{value}</span>
                    </div>
                ))}
            </div>
        );
    };



    return (
        <div className="planet-detail-page">
            <Link to="/planets" style={{ position: 'absolute', top: '100px', left: '20px', color: 'white', opacity: 0.7, textDecoration: 'none' }}>
                ← Back to Planets
            </Link>

            <motion.div
                className="planet-detail-header"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <div style={{ marginBottom: '20px' }}>
                    <button
                        onClick={() => setShow3D(!show3D)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            background: show3D ? '#4facfe' : 'rgba(255,255,255,0.2)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                        }}
                    >
                        {show3D ? 'View 2D Schematic' : 'View 3D Model'}
                    </button>
                </div>

                {show3D ? (
                    <div style={{ maxWidth: '600px', margin: '0 auto 20px' }}>
                        <Planet3D color={planet.color3D} ringConfig={planet.ringSystem} />
                    </div>
                ) : (
                    <div
                        className="planet-detail-hero"
                        style={{ background: planet.color }}
                    ></div>
                )}

                <h1>{planet.name}</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.8 }}>{planet.description}</p>
            </motion.div>

            <div className="detail-content">
                <div className="tabs-container">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <GlassCard>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {renderTabContent()}
                        </motion.div>
                    </AnimatePresence>
                </GlassCard>
            </div>
        </div>
    );
};

export default PlanetDetail;
