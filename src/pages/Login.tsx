import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
        linear-gradient(
            rgba(255,255,255,0.5),
            rgba(255,255,255,0.1)),
        url('assets/registerBg/3.jpg') 
        center;
        background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Warpper = styled.div`
    width: 25%;
    border-radius: 5px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
`;
const Title = styled.h1`
    font-size: 25px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 50%;
    padding: 10px;
    margin: 10px 0px;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px;
    border: none;
    margin: 10px 0px;
    background-color: teal;
    color: white;
    cursor: pointer;
    transition: 0.8s all ease;

    &:hover{
        background-color: rgba(0, 128, 128, 0.781);
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    text-decoration: underline;
    font-size: 14px;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Warpper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="Username OR Email" />
                    <Input type="password" placeholder="Password" />
                    <Button>
                        LOGIN
                    </Button>
                    <Link>CHANGE OR RESET YOUR PASSWORD !</Link>
                    <Link>CREATE A NEW ACCOUNT !</Link>
                </Form>
            </Warpper>
        </Container>
    )
}

export default Login