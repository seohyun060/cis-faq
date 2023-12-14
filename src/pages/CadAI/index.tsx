import { styled } from 'styled-components';

import image from '@/assets/image';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';
import useLangStore from '@/store/zustand/langZustand';
import { useEffect, useState } from 'react';

export default function CadAI() {
    const navigate = useNavigate();
    const { language } = useLangStore();
    const [slideList, setSlideList] = useState<string[]>([
        image.education1_ko,
        image.education2_ko,
        image.education1_ko,
        image.education2_ko,
    ]);
    useEffect(() => {
        if (language === 'ko') {
            setSlideList([image.education1_ko, image.education2_ko, image.education1_ko, image.education2_ko]);
        } else if (language === 'en') {
            setSlideList([image.education1_en, image.education2_en, image.education1_en, image.education2_en]);
        } else {
            setSlideList([image.education1_ru, image.education2_ru, image.education1_ru, image.education2_ru]);
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
