import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
    
`;
const InfoContainer = styled.div`
    position: absolute;
    top:0; left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;
const Title = styled.h1`
    color: lightgray;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color: #3d3c3c;
    cursor: pointer;
`;


const LinkStyle = {
    textDecoration: "none",
    color: "inherit"
}


interface props {
    img?: string
    title?: string
}
const CategoryItem = ({ img, title }: props) => {
    return (
        <Container>
            <Image src={img} />
            <InfoContainer >
                <Title>
                    {title}
                </Title>
                <Link to="/product-list" style={LinkStyle}>
                    <Button>SHOP NOW</Button>
                </Link>
            </InfoContainer>
        </Container>
    )
}

export default CategoryItem
