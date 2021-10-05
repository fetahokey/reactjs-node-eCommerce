import styled from 'styled-components';

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
                <Button>SHOP NOW</Button>
            </InfoContainer>
        </Container>
    )
}

export default CategoryItem
