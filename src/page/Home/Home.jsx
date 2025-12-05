import React from 'react';
import Property from '../../components/Property';
import Profit from '../../components/Profit';
import Brands from '../../components/Brands';
import Courses from '../../components/Courses';

const Home = () => {
    return (
        <>
            <Property />
            <Profit />
            <Brands />
            <Courses />
        </>
    );
};

export default Home;