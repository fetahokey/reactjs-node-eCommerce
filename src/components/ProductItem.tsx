import styled from 'styled-components';
import {
    ShoppingCartOutlined, SearchOutlined,
    FavoriteBorderOutlined
} from '@mui/icons-material';

const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    background-color: #f0f1f7;
    position: relative;
`;

const Image = styled.img`
    height: 70%;
    mix-blend-mode: multiply;
    z-index: 2;
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute; 
`;

const ContainerInfo = styled.div`
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(211, 211, 211, 0.4);
    opacity: 0;
    z-index: 3;
    
    transition: 0.8s all ease;
    &:hover{
        transform: scale(0.99);
        opacity: 1;
    }
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 30%;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        background-color: #f3eaea;
        color: #111113;
        border-radius: 50%;
        transform: scale(1.1);
    }
`;

interface props {
    img: string
}

const ProductItem = ({ img }: props) => {
    return (
        <Container>
            <Circle />
            <Image src={img} />
            <ContainerInfo>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </ContainerInfo>
        </Container>
    )
}

export default ProductItem
