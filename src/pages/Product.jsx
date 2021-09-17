import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import AppFooter from '../components/AppFooter';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';




const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;
const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
    font-size: 40px;
    font-weight:100;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;

`;

const FilterTitle = styled.span`
    font-size:20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;

`;

const FilterSize = styled.select`
    margin: 10px;
    padding: 5px;

`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height:30px;
    border-radius: 10px;
    border: 1px solid #9C27B0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid #9C27B0;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4
    }
`;

const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer >
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, ducimus id iste sunt et expedita cupiditate minima error non quae, aliquam fugit iure autem architecto ut delectus illo perferendis ratione!</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="grey" />
                        </Filter> 
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption> 
                            </FilterSize>
                        </Filter> 
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <AppFooter />
        </Container>
    );
};

export default Product;