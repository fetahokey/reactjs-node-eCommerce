import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Remove, Add } from '@mui/icons-material';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

interface props {
    color?: string;
}

const Container = styled.div`

`;

const Warpper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({ padding: "5px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex:1;
    ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})}
`;

const Image = styled.img`
    // TODO handle big size image
    object-fit: cover;
    ${mobile({ height: "50%" })}
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 400;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
        display: flex;
        justify-content: space-between;
        width: 70%;
        margin: 25px 0px;
        ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 5px;    
`;

const FilterColor = styled.div<props>`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    padding: 5px;
    font-size: 14px;
`;

const FilterSizeOption = styled.option`
    
`;

const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;

    *{
        cursor: pointer;
    }

    
`;

const Amount = styled.span`
    width: 40px;
    height: 40px;
    margin: 0px 15px;
    display: flex;
    border-radius: 15%;
    border: 1px solid lightgray;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid lightgray;
    font-weight: 500;
    background-color: white;
    cursor: pointer;
    transition: 0.8s all ease;

    ${mobile({ padding: "10px" })}

    &:hover{
        background-color: rgba(169, 156, 241, 0.459);
    }
`;

const LinkStyle = {
    textDecoration: "none",
    color: "inherit"
}


const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Warpper>
                <ImgContainer>
                    <Image src='assets/products/2.jpg' />
                </ImgContainer>
                <InfoContainer>
                    <Title> maxime atque</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo ratione voluptatibus maxime atque ad officia blanditiis culpa incidunt.
                        Rem aut autem quas amet animi perferendis quod iure ad obcaecati officiis.
                    </Desc>
                    <Price>3500 DZD</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>COLOR</FilterTitle>
                            <FilterColor color="blue" />
                            <FilterColor color="green" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>SIZE</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XXL</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Link to="/cart" style={LinkStyle}>
                            <Button>ADD TO CART</Button>
                        </Link>
                    </AddContainer>
                </InfoContainer>
            </Warpper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
