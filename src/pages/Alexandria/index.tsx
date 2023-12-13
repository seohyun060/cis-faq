import { styled } from 'styled-components';
import img1 from '@images/alexandria/danger1.png';
import img2 from '@images/alexandria/danger2.png';
import img3 from '@images/alexandria/danger3.png';
import image from '@/assets/image';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';
import Map from '../Map';
import { useCallback, useEffect, useState } from 'react';

export default function Alexandria() {
    const navigate = useNavigate();
    const [horizontal, setHorizontal] = useState(false);
    console.log(image);
    const imgList = [img1, <Map />, img2, img3];
    const handleResize = useCallback(() => {
        if (window.innerWidth > window.innerHeight) {
            setHorizontal(true);
        } else {
            setHorizontal(false);
        }
    }, [window.innerWidth, window.innerHeight, horizontal]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, [window.innerWidth]);
    return (
        <Container>
            {/* <Map /> */}
            {/* {!horizontal ? ( */}
            <Carousel height={'1920px'} autoPlay={false} animation="slide" indicators={false} navButtonsAlwaysInvisible>
                {imgList.map((item, index) => {
                    if (typeof item === 'string') {
                        return (
                            <ImgWrapper key={index}>
                                <Image src={item} />
                            </ImgWrapper>
                        );
                    } else {
                        return <div key={index}>{item}</div>;
                    }
                })}
            </Carousel>
            {/* ) : (
                <></>
            )} */}

            <BackButton onClick={() => navigate('/')} />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    flex-direction: column;
    width: 100%;
    height: fit-content;
`;

const ImgWrapper = styled.div`
    width: 1080px;
    height: 1920px;
`;

const BackButton = styled.div`
    width: 100px;
    height: 100px;
    background-color: #000000;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;
