import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import beamworksLogo from '@images/Logo.png';
import alexandriaLogo from '@images/logos/alexandriaLogo.png';
import kiwiLogo from '@images/logos/kiwiLogo.png';
import cadaiLogo from '@images/logos/cadaiLogo.png';

export default function Home() {
    const navigate = useNavigate();

    return (
        <Container>
            <Button onClick={() => navigate('alexandria')}>
                <Logo src={alexandriaLogo} />
                <DescText>초음파 인공지능 교육 훈련 프로그램</DescText>
            </Button>
            <Button onClick={() => navigate('map')}>
                {/* <Logo src={alexandriaLogo} /> */}
                <DescText>유방암 사망률 맵</DescText>
            </Button>
            <Button onClick={() => navigate('kiwi')}>
                <Logo src={kiwiLogo} />
                <DescText>대화형 인공지능 의료 정보 챗봇</DescText>
            </Button>
            <Button onClick={() => navigate('cadai')}>
                <Logo src={cadaiLogo} />
                <DescText>인공지능 기반 초음파 유방암 예측 모델</DescText>
            </Button>
            <Button onClick={() => navigate('faq')}>
                <TitleText>FAQ</TitleText>
            </Button>
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

const Logo = styled.img`
    position: absolute;
    top: 60px;
    width: 500px;
    height: 80px;
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
    position: absolute;
    height: 90px;
    bottom: 0;
    font-size: 40px;
    font-weight: 500;
    color: #435256;
    align-items: center;
`;

const TitleText = styled.div`
    font-size: 70px;
    font-weight: 700;
    color: #435256;
`;
