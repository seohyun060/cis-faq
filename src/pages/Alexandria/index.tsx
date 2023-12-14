import { styled } from 'styled-components';
import image from '@/assets/image';
import Carousel from 'react-material-ui-carousel';
import useLangStore from '@/store/zustand/langZustand';
import { useNavigate } from 'react-router-dom';
import Map from '../Map';
import { useCallback, useEffect, useState } from 'react';

export default function Alexandria() {
    const navigate = useNavigate();
    const { language } = useLangStore();
    const [horizontal, setHorizontal] = useState(false);
    console.log(image);
    const [slideList, setSlideList] = useState([image.danger1_ko, <Map />, image.danger2_ko, image.danger3_ko]);

    // useEffect(() => {
    //     if (language === 'ko') {
    //         setSlideList([image.danger1_ko, <Map />, image.danger2_ko, image.danger3_ko]);
    //     } else if (language === 'en') {
    //         setSlideList([image.danger1_en, <Map />, image.danger2_en, image.danger3_en]);
    //     } else {
    //         setSlideList([image.danger1_ru, <Map />, image.danger2_ru, image.danger3_ru]);
    //     }
    //     return () => {};
    // }, [language]);
    useEffect(() => {
        setSlideList([image.danger1_ko, <Map />, image.danger2_ko, image.danger3_ko]);
        return () => {};
    }, [language]);
    // const imgList = [image.danger1_ko, <Map />, image.danger2_ko, image.danger3_ko];

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
            <Carousel
                height={horizontal ? '1080px' : '1920px'}
                autoPlay={false}
                animation="slide"
                indicators={false}
                navButtonsAlwaysInvisible
                swipe={horizontal ? false : true}
            >
                {slideList.map((slide, index) => {
                    if (typeof slide === 'string') {
                        return (
                            <ImgWrapper key={index}>
                                <Image src={slide} />
                            </ImgWrapper>
                        );
                    } else {
                        return <div key={index}>{slide}</div>;
                    }
                })}
            </Carousel>

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
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;
