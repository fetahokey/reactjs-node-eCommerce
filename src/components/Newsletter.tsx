import styled from 'styled-components'
import { Send } from '@mui/icons-material';

const Container = styled.div`
    height: 60vh;
    display: flex;
    background-color: #f1f8fa;
    padding: 20px;

    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    margin: 25px 0;
    font-size: 65px;
    letter-spacing: 2px;
`;

const Desc = styled.p`
    font-size: 24px;
    word-spacing: 3px;
    margin-bottom: 25px;
`;

const Form = styled.form`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: white;
    border: 1px solid lightgray;
`;

const Input = styled.input`
    flex:8;
    border: none;
    font-size: 16px;
    outline-color: #eff7fa;
`;

const Button = styled.button`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: teal;
    color: white;

`;

const Newsletter = () => {
    return (
        <Container>
            <Title>NEWSLETTER</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <Form>
                <Input placeholder={"myemail@domain.com"} autoComplete={'email'} />
                <Button >
                    <Send />
                </Button>
            </Form>
        </Container>
    )
}

export default Newsletter
