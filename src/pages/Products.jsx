import React from 'react';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import AppFooter from '../components/AppFooter';
import Newsletter from '../components/Newsletter';
import ProductList from '../components/ProductList';
import Announcement from '../components/Announcement';
import { mobile } from '../styles/responsive';
import { useLocation } from 'react-router';
import { useState } from 'react';


const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display:flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: 0 })};

`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0" })};

`;

const Option = styled.option``;

const Products = () => {

    const location = useLocation();
    const category = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('newest');
    
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }

    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title >{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters} defaultValue="Color">
                        <Option  disabled>
                            Color</Option>
                        <Option defaultValue>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters} defaultValue="Size">
                        <Option disabled >
                            Size</Option>
                        <Option>SX</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price ⬆</Option>
                        <Option value="desc">Price ⬇</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <ProductList category={category} filters={filters} sort={sort} key={category} />
            <Newsletter />
            <AppFooter />

        </Container>
    )
}

export default Products
