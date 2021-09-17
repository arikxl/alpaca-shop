import React from 'react';
import styled from 'styled-components';

import {popularProducts} from '../data/data';
import ProductItem from './ProductItem';

const Container = styled.div`
    display: flex;
    padding:20px;
`;
    
    // justify-content: space-between;
const ProductList = () => {
    return (
        <Container>
            {popularProducts.map(item => (
                <ProductItem key={item.id} item={item}/>
            ))}
        </Container>
    )
}

export default ProductList
