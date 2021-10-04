import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { mobile } from '../styles/responsive';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0" })};

`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size:14px;
    cursor: pointer;  
    ${mobile({ display: "none" })};
  
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;    
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "10px" })};

`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })};
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px", marginLeft: "20px" })};

`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center", flex: 2 })};

`;

const MenuItem = styled.div`
    font-size: 14px;
    margin-left: 25px;
    cursor: pointer;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
    text-decoration: none;
`;

const Navbar = () => {
    const cartQuantity = useSelector(state => state.cart.quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer >
                        <Input placeholder="Search..." />
                        <SearchRoundedIcon style={{ color: "grey", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/alpaca-shop" style={{textDecoration: "none"}}>
                        <Logo>ALPACA.</Logo>
                    </Link>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <Link to="/login" style={{textDecoration: "none"}}>
                    <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/cart" style={{textDecoration: "none"}}>
                        <MenuItem>
                            <Badge badgeContent={cartQuantity} color="secondary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
