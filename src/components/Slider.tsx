import { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderData } from '../data';

const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

interface props {
    direction?: string;
    bgColor?: string;
    sliderIndex?: number;
}

const Arrow = styled.div<props>`
    position: absolute;
    top:0; bottom: 0; margin: auto;
    width: 50px;
    height: 50px;
    left:${(props) => props.direction === 'Left' && '10px'};
    right: ${(props) => props.direction === "Right" && "10px"};
    background-color: #ddd8d8;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Warpper = styled.div<props>`
    height: 100%;
    display: flex;
    transform: translateX(${props => (!!props.sliderIndex) ? (props.sliderIndex * -100) : 0}vw) ;
    transition: 0.9s all ease;
`;

const Slide = styled.div<props>`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bgColor};
`;

const ImgContainer = styled.div`
    flex: 1 ;
    height: 100%;
`;
const Img = styled.img`
    mix-blend-mode: multiply;
    height: 90%;
`;
const InfoContainer = styled.div`
    flex: 1 ;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    color: #383846;
    background-color: #ffffff;
    border: 1px solid #383846 ;
    border-radius: 2px;
    
    cursor: pointer;
`;



const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction: string): void => {
        (direction === "Left")
            ?
            setSlideIndex((slideIndex > 0) ? slideIndex - 1 : sliderData.length - 1)
            :
            setSlideIndex((slideIndex < sliderData.length - 1) ? slideIndex + 1 : 0)

    }

    return (
        <Container>
            <Arrow direction="Left" onClick={() => handleClick('Left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Warpper sliderIndex={slideIndex}>

                {
                    sliderData.map((item) =>
                    (
                        <Slide bgColor={item.bgColor} key={item.id}>
                            <ImgContainer>
                                <Img src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    ))
                }

            </Warpper>
            <Arrow direction="Right" onClick={() => handleClick('Right')} >
                <ArrowRightOutlined />
            </Arrow >
        </Container>
    )
}

export default Slider

