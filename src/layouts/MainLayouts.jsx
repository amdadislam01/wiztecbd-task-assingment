import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;