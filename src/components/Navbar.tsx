import styled from 'styled-components'
import { Search, Mail, ShoppingBagOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge';

const Container = styled.div`
    height: 60px;
`;
const Warpper = styled.div`
    padding: 10px 20px;
    display: flex;
    //justify-content: space-between;


`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 15px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
        border: 0.5px solid lightgray;
        display: flex;
        align-items: center;
        margin-left: 25px;
        padding: 5px;
`;
const Input = styled.input`
    border: none;
    outline: none;
`;
const SearchIconStyle = {
    fontSize: 22,
    color: "gray"
}

const Navbar = () => {
    return (
        <Container>
            <Warpper>
                <Right>
                    <Language>ENG</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={SearchIconStyle} />
                    </SearchContainer>
                </Right>
                <Center>
                    <Logo>
                        SAMA.
                    </Logo>
                </Center>
                <Left>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingBagOutlined />
                        </Badge>
                    </MenuItem>
                </Left>
            </Warpper>
        </Container>
    )
}

export default Navbar
