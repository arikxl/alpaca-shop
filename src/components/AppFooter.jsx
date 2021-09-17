import React from 'react';
import styled from 'styled-components';
import { LinkedIn, GitHub, Telegram, Room, LocalPhoneRounded, MailOutlineRounded } from '@material-ui/icons';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';



const Container = styled.div`
display: flex;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;

`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #9C27B0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex:1;
    padding:20px;
`;

const Title = styled.h3`
    margin-bottom:30px;
`;

const List = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Right = styled.div`
    flex:1;
    padding:20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const AppFooter = () => {
    return (
        <Container>
            <Left >
                <Logo>ALPACA.</Logo>
                <Desc>This is not a real store but this site is completely real.
                    <br />
                    I designed it with almost no CSS. Mainly using styled-components.
                    Tnx to Lama Dev's youtube channel for the inspiration and materials.
                    <br/>
                    <small>© arikxl {new Date().getFullYear()}</small>
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <FacebookRoundedIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon>
                        <GitHub />
                    </SocialIcon>
                    <SocialIcon>
                        <Telegram />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right >
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}} />24 Etzel Street, Be'er-Sheva
                </ContactItem>
                <ContactItem>
                    <LocalPhoneRounded style={{marginRight:"10px"}}/>+1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutlineRounded style={{marginRight:"10px"}} />contact@alpaca.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default AppFooter
