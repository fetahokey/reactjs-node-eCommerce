import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
        linear-gradient(
            rgba(255,255,255,0.5),
            rgba(255,255,255,0.1)),
        url('assets/registerBg/1.jpg') 
        center;
        background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Warpper = styled.div`
    width: 50%;
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
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    padding: 10px;
    margin: 10px 10px 0px 0px;
`;

const Agreement = styled.span`
    font-size: 16px;
    margin: 20px 10px ;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px;
    border: none;
    
    background-color: teal;
    color: white;
    cursor: pointer;
    transition: 0.8s all ease;

    &:hover{
        background-color: rgba(0, 128, 128, 0.781);
    }
`;

const Register = () => {
    return (
        <Container>
            <Warpper>
                <Title>REGISTER NOW FOR FREE !</Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>
                        REGISTER
                    </Button>
                </Form>
            </Warpper>
        </Container>
    )
}

export default Register