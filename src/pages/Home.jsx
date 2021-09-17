import React from 'react'
import Announcement from '../components/Announcement';
import AppFooter from '../components/AppFooter';
import CategoriesList from '../components/CategoriesList';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <CategoriesList />
            <ProductList />
            <Newsletter />
            <AppFooter />
        </div>
    )
}

export default Home
