import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProductItem from './ProductItem';
import { popularProducts } from '../data/data';

const Container = styled.div`
    display: flex;
    padding:20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProductList = ({ category, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products/")
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        
        getProducts();

    }, [category])

    return (
        <Container>
            {console.log('filters:', filters)}
            {console.log('sort:', sort)}
            {popularProducts.map(item => (
                <ProductItem key={item.id} item={item} />
            ))}
        </Container>
    );
};

export default ProductList;