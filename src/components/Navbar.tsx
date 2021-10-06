import styled from 'styled-components'
import { Search, ShoppingBagOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;
const Warpper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 10px 10px 0px" })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
     ${mobile({ flex: 2 })}
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;  
    ${mobile({ fontSize: "24px", marginLeft: "5px" })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;


const SearchContainer = styled.div`
        border: 0.5px solid lightgray;
        display: flex;
        align-items: center;
        margin-left: 25px;
        padding: 5px;
        ${mobile({ flex: 1 })}
`;
const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({ width: "100px" })}
`;
const SearchIconStyle = {
    fontSize: 22,
    color: "gray"
}

const LinkStyle = {
    textDecoration: "none",
    color: "inherit"
}

const Navbar = () => {
    return (
        <Container>
            <Warpper>
                <Left>
                    <Language>ENG</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={SearchIconStyle} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link to="/" style={LinkStyle}>
                        <Logo>
                            SAMA.
                        </Logo>
                    </Link>
                </Center>
                <Right>
                    <Link to="/signup" style={LinkStyle}>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to="/signin" style={LinkStyle}>
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <Link to="/cart" style={LinkStyle}>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingBagOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Warpper>
        </Container>
    )
}

export default Navbar
