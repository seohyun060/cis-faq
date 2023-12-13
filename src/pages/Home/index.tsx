import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import beamworksLogo from '@images/Logo.png';
import globeG from '@images/home/globeG.svg';
import globeB from '@images/home/globeB.svg';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
    const navigate = useNavigate();
    const [globeToggle, setGlobeToggle] = useState(false);
    const { t } = useTranslation(['page']);
    const onGlobeClick = useCallback(() => {
        setGlobeToggle((prev) => !prev);
    }, [globeToggle]);

    const onLangClick = useCallback((lang: string) => {
        i18n.changeLanguage(lang);
    }, []);

    return (
        <Container>
            <Button onClick={() => navigate('alexandria')}>
                <DescText>{t('page:danger')}</DescText>
            </Button>

            <Button onClick={() => navigate('kiwi')}>
                <DescText>{t('page:ultrasound')}</DescText>
            </Button>
            <Button onClick={() => navigate('cadai')}>
                <DescText>CadAI-B 의료진 교육</DescText>
            </Button>
            <Globe src={globeToggle ? globeG : globeB} onClick={onGlobeClick} />

            <ButtonBox>
                <LangButton
                    onClick={() => {
                        onLangClick('ko');
                    }}
                >
                    한국어
                </LangButton>
                <LangButton
                    onClick={() => {
                        onLangClick('en');
                    }}
                >
                    영어
                </LangButton>
                <LangButton
                    onClick={() => {
                        onLangClick('ru');
                    }}
                >
                    러시아어
                </LangButton>
            </ButtonBox>
            <BeamworksLogo />
        </Container>
    );
}

const BeamworksLogo = () => (
    <div style={{ position: 'absolute', bottom: '52px' }}>
        <img width={480} src={beamworksLogo} />
    </div>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    padding-bottom: 15%;
    gap: 100px;
    background-color: #e8efef;
`;
const Globe = styled.img`
    width: 66px;
    height: 66px;
`;
const Button = styled.div`
    position: relative;
    align-items: center;
    width: 775px;
    height: 234px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const DescText = styled.div`
    position: relative;
    height: 90px;
    width: 456px;
    justify-content: center;
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    color: #435256;
    align-items: center;
`;
const ButtonBox = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;
`;
const LangButton = styled.div`
    position: relative;
    width: 150px;
    height: 50px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid black;
`;
const TitleText = styled.div`
    font-size: 70px;
    font-weight: 700;
    color: #435256;
`;
