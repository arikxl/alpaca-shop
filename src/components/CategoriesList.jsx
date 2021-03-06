import React from 'react';
import styled from 'styled-components';

import {categories} from '../data/data';
import { mobile } from '../styles/responsive';
import CategoriesItem from './CategoriesItem';

const Container = styled.div`
    display: flex;
    padding:20px;
    justify-content: space-between;
    ${mobile({padding: 0, flexDirection: "column"})};
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
