import React from 'react';
import Navbar from '../components/Navbar';
import StarBackground from '../components/StarBackground';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <StarBackground />
            <Navbar />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
