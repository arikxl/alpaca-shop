import { FavoriteBorderRounded, SearchRounded, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex:1;
    margin: 5px;
`;

const Circle = styled.div``;
const Img = styled.img``;
const Info = styled.div``;
const Icon = styled.div``;


const ProductItem = ({item}) => {
    return (
        <Container>
            <Circle />
            <Img src ={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchRounded />
                </Icon>
                <Icon>
                    <FavoriteBorderRounded />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem
