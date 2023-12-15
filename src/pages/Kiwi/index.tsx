import { styled } from 'styled-components';

import image from '@/assets/image';
import useLangStore from '@/store/zustand/langZustand';
import Carousel from 'react-material-ui-carousel';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export default function Kiwi() {
    const navigate = useNavigate();
    const { language } = useLangStore();

    const [slideList, setSlideList] = useState<string[]>([
        image.ultrasound1_ko,
        image.ultrasound2_ko,
        image.ultrasound1_ko,
        image.ultrasound2_ko,
    ]);
    // useEffect(() => {
    //     setSlideList([image.ultrasound1_ko, image.ultrasound2_ko, image.ultrasound1_ko, image.ultrasound2_ko]);
    //     return () => {};
    // }, [language]);
    useEffect(() => {
        if (language === 'ko') {
            setSlideList([image.ultrasound1_ko, image.ultrasound2_ko, image.ultrasound1_ko, image.ultrasound2_ko]);
        } else if (language === 'en') {
            setSlideList([image.ultrasound1_en, image.ultrasound2_en, image.ultrasound1_en, image.ultrasound2_en]);
        } else {
            setSlideList([image.ultrasound1_ru, image.ultrasound2_ru, image.ultrasound1_ru, image.ultrasound2_ru]);
        }
        return () => {};
    }, [language]);
    return (
        <Container>
            <Carousel height={'1920px'} autoPlay={false} animation="slide" indicators={false} navButtonsAlwaysInvisible>
                {slideList.map((slide, index) => (
                    <ImgWrapper key={index}>
                        <Image src={slide} />
                    </ImgWrapper>
                ))}
            </Carousel>
            <BackButton onClick={() => navigate('/')} />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100vh;
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
    z-index: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;
