import styled from 'styled-components'
import { Facebook, Instagram, Twitter, MailOutline, Room, Dialpad } from '@mui/icons-material';

interface props {
    bgColor: string;
}

const Container = styled.div`
    display: flex;
    background-color: #e6ecee;
    
`;
const Left = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    
`;
const Logo = styled.h1`
    flex: 1;
`;
const Desc = styled.p`
    flex: 1;
    margin: 2px 0px 10px 0px;
`;

const SocialsContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div<props>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 35px;
    height: 35px;
    border-radius: 10%;
    color: white;
    background-color:${props => props.bgColor};
    cursor: pointer;
`;

const Center = styled.div`
padding: 20px;
    flex: 1;
`;

const Title = styled.h3`
    margin-bottom: 10px;
`;

const List = styled.ul`
       margin :0 ;
       padding: 0;
       list-style: none;
       display: flex;
       flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 5px;
`;

const Right = styled.div`
    padding: 20px;
    flex: 1;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    *{
        margin-left: 5px;
        border-bottom: 10px;
        *{
            color: rgb(46, 46, 46);
            transform: scale(0.6);
        }
    }
`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SAMA.</Logo>
                <Desc>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Modi, placeat esse unde maxime ratione, earum commodi beatae,
                    debitis et consequatur dicta sequi officiis maiores deserunt eum,
                    id ipsam iste? Voluptate!
                </Desc>
                <SocialsContainer>
                    <SocialIcon bgColor={"#3B5999"}>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bgColor={"#E4405F"}>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bgColor={"#55ACEE"}>
                        <Twitter />
                    </SocialIcon>
                </SocialsContainer>
            </Left>
            <Center>
                <Title>LINKS.</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man</ListItem>
                    <ListItem>Women</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Tracking</ListItem>
                    <ListItem>Account</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem>775 USA, NEW YORK  W554 Street <Room /> </ContactItem>
                <ContactItem>+123 456 788 <Dialpad /></ContactItem>
                <ContactItem>contact@sama.org <MailOutline /> </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
