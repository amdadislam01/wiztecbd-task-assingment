import React from 'react';
import Property from '../../components/Property';
import Profit from '../../components/Profit';
import Brands from '../../components/Brands';
import Courses from '../../components/Courses';
import Testmonials from '../../components/Testmonials';
import Tools from '../../components/Tools';

const Home = () => {
    return (
        <>
            <Property />
            <Profit />
            <Brands />
            <Courses />
            <Testmonials />
            <Tools />
        </>
    );
};

export default Home;