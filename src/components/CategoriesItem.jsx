import React from 'react';
import styled from 'styled-components';
import { mobile } from '../styles/responsive';

const Container = styled.div`
    flex:1;
    height: 70vh;
    margin: 3px;
    position: relative;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "30vh"})};

`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 10px;
    background-color: white;
    color: grey;
    font-weight: 600;
`;


const CategoriesItem = ({item}) => {
    return (
        <Container>
            <Img src ={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CategoriesItem;
