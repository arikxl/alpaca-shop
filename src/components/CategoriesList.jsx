import React from 'react';
import styled from 'styled-components';

import {categories} from '../data/data';
import CategoriesItem from './CategoriesItem';

const Container = styled.div`
    display: flex;
    padding:20px;
    justify-content: space-between;
`;

const CategoriesList = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoriesItem key= {item.id} item={item}/>
            ))}
        </Container>
    );
};

export default CategoriesList;
