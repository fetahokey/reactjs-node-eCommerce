import { popularProducts } from '../data';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Products = () => {
    return (
        <Container>
            {
                popularProducts.map((item) =>
                    <ProductItem key={item.id} img={item.img} />
                )
            }
        </Container>
    )
}

export default Products
