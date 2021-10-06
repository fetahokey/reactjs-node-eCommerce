import styled from 'styled-components';
import { Add, Remove } from '@mui/icons-material'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


interface props {
    sType?: string
    color?: string
    type?: string
}

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const TopButton = styled.button<props>`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${(props) => props.sType === "filled" && "none"};
    background-color:${(props) => props.sType === "filled" ? "black" : "transparent"};
    color:${(props) => props.sType === "filled" && "white"};

`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin:0px 10px; 
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex:3;
`;


const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    `;

const Image = styled.img`
        width: 200px;
        `;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div<props>`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color:${props => props.color};
`;

const ProductSize = styled.span`

`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:20px;
    `;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    `;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    `;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
    margin: 25px 0px;
    `;

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div<props>`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: 600;
`;

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <Title>Y're BAG !</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Shopping Bag(0)</TopText>
                    </TopTexts>
                    <TopButton sType="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        Info
                        <Product>
                            <ProductDetail>
                                <Image src="assets/products/19.jpg" />
                                <Details>
                                    <ProductName> <b>Product: </b> SAMA. COLLECTION</ProductName>
                                    <ProductId> <b>Id: </b> 646415600651</ProductId>
                                    <ProductColor color="lightgray" />
                                    <ProductSize> <b>Size: </b> 9.4 </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>3</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>8,500 DZD</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="assets/products/20.jpg" />
                                <Details>
                                    <ProductName> <b>Product: </b> GUIDE 14 </ProductName>
                                    <ProductId> <b>Id: </b> 77515600651</ProductId>
                                    <ProductColor color="gray" />
                                    <ProductSize> <b>Size: </b> 8.5 </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>6,300 DZD</ProductPrice>
                            </PriceDetail>
                        </Product>

                    </Info>
                    <Summary>
                        Summary
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>1,500 DZD</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated </SummaryItemText>
                            <SummaryItemPrice>500 DZD</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount </SummaryItemText>
                            <SummaryItemPrice>800 DZD</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total </SummaryItemText>
                            <SummaryItemPrice>2,800 DZD</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Cart
