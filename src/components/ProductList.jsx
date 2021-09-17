import React from 'react';
import styled from 'styled-components';

import ProductItem from './ProductItem';
import {popularProducts} from '../data/data';

const Container = styled.div`
    display: flex;
    padding:20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
    
const ProductList = () => {
    return (
        <Container>
            {popularProducts.map(item => (
                <ProductItem key={item.id} item={item}/>
            ))}
        </Container>
    );
};

export default ProductList;