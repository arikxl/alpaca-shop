import axios from "axios";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';
// import { popularProducts } from '../data/data';

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
                const res = await axios.get(
                    category
                        ? `http://localhost:5000/api/products?category=${category}`
                        : "http://localhost:5000/api/products"
                )
                setProducts(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getProducts();
    }, [category])

    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)))
            );
    }, [products, category, filters])


    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt));
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price));
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price));
        }
    }, [sort]);

    return (
        <Container>
            {category
                ? filteredProducts.map((item) =>
                    <ProductItem key={item.id} item={item} />)
                : products.slice(0, 8).map((item) =>
                    <ProductItem key={item.id} item={item} />)}
        </Container>
    );
};

export default ProductList;