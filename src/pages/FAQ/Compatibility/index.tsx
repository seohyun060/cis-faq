import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import beamworksLogo from '@images/Logo.png';
import { compatibilityFAQ } from '@/assets/datas/faqData';
import { ToggleBar } from '@/components/ToggleBar';

export default function Compatibility() {
    const navigate = useNavigate();
    return (
        <Container>
            <Text style={{ marginBottom: '60px' }}>제품 호환</Text>
            {compatibilityFAQ.map((data, index) => (
                <ToggleBar key={index} data={data} />
            ))}
            <BackButton onClick={() => navigate(-1)} />
            <BeamworksLogo />
        </Container>
    );
}

const Container = styled.div`
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    padding-top: 15%;
    padding-bottom: 300px;
    gap: 30px;
    background-color: white;
`;

const Text = styled.div`
    font-family: 'Pretendard';
    font-size: 60px;
    font-weight: 700;
    color: #435256;
`;

const BackButton = styled.div`
    width: 100px;
    height: 100px;
    position: fixed;
    left: 0;
    top: 0;
`;

const BeamworksLogo = () => (
    <div style={{ position: 'absolute', top: '37px', right: '45px' }}>
        <img width={325} src={beamworksLogo} />
    </div>
);
