import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import beamworksLogo from '@images/Logo.png';
import globeG from '@images/home/globeG.svg';
import globeB from '@images/home/globeB.svg';

import useLangStore from '@/store/zustand/langZustand';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useCallback, useState } from 'react';

interface ButtonBoxProps {
    globeToggle: boolean;
}

interface ButtonLangProps {
    currentLang: string;
}
export default function Home() {
    const navigate = useNavigate();
    const { language, setLanguage } = useLangStore();
    const [globeToggle, setGlobeToggle] = useState(false);
    const { t } = useTranslation(['page']);
    // const [currentLang, setCurrentLang] = useState('ko');
    const onGlobeClick = useCallback(() => {
        setGlobeToggle((prev) => !prev);
    }, [globeToggle]);

    const onLangClick = useCallback(
        (lang: string) => {
            i18n.changeLanguage(lang);
            setLanguage(lang);
        },
        [language]
    );

    return (
        <Container>
            <Button onClick={() => navigate('alexandria')}>
                <DescText>{t('page:danger')}</DescText>
            </Button>

            <Button onClick={() => navigate('kiwi')}>
                <DescText>{t('page:ultrasound')}</DescText>
            </Button>
            <Button onClick={() => navigate('cadai')}>
                <DescText>{t('page:education')}</DescText>
            </Button>
            <Globe src={globeToggle ? globeG : globeB} onClick={onGlobeClick} />

            <ButtonBox globeToggle={globeToggle}>
                <ButtonKo
                    currentLang={language}
                    onClick={() => {
                        onLangClick('ko');
                    }}
                >
                    한국어
                </ButtonKo>
                <ButtonEn
                    currentLang={language}
                    onClick={() => {
                        onLangClick('en');
                    }}
                >
                    English
                </ButtonEn>
                <ButtonRu
                    currentLang={language}
                    onClick={() => {
                        onLangClick('ru');
                    }}
                >
                    ру́сский язы́к
                </ButtonRu>
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
    margin-top: 20px;
    margin-bottom: -30px;
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
    box-shadow: 4px 8px 60px 0px rgba(0, 0, 0, 0.11);
`;

const DescText = styled.div`
    position: relative;
    height: 90px;
    width: 675px;
    justify-content: center;
    text-align: center;
    font-size: 45px;
    font-weight: 700;
    color: #435256;
    align-items: center;
`;
const ButtonBox = styled.div<ButtonBoxProps>`
    position: relative;
    width: fit-content;
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: ${(props) => (props.globeToggle ? 1 : 0)};
    gap: 70px;
`;
const ButtonKo = styled.div<ButtonLangProps>`
    position: relative;
    width: fit-content;
    height: fit-content;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 80% */
    opacity: ${(props) => (props.currentLang === 'ko' ? 1 : 0.4)};
`;
const ButtonEn = styled(ButtonKo)`
    opacity: ${(props) => (props.currentLang === 'en' ? 1 : 0.4)};
`;
const ButtonRu = styled(ButtonKo)`
    opacity: ${(props) => (props.currentLang === 'ru' ? 1 : 0.4)};
`;
// const TitleText = styled.div`
//     font-size: 70px;
//     font-weight: 700;
//     color: #435256;
// `;
