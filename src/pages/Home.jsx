import React from 'react'
import Announcement from '../components/Announcement';
import CategoriesList from '../components/CategoriesList';
import Navbar from '../components/Navbar';
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
        </div>
    )
}

export default Home
