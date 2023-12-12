import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import beamworksLogo from '@images/Logo.png';

export default function FAQ() {
    const navigate = useNavigate();
    return (
        <Container>
            <Text style={{ marginBottom: '60px' }}>FAQ</Text>
            <Button onClick={() => navigate('feature')}>
                <Text>제품 기능</Text>
            </Button>
            <Button onClick={() => navigate('purchase')}>
                <Text>구매 관련</Text>
            </Button>
            <Button onClick={() => navigate('compatibility')}>
                <Text>제품 호환</Text>
            </Button>
            <BackButton onClick={() => navigate(-1)} />
            <BeamworksLogo />
        </Container>
    );
}

const BeamworksLogo = () => (
    <div style={{ position: 'absolute', top: '37px', right: '45px' }}>
        <img width={325} src={beamworksLogo} />
    </div>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    padding-bottom: 30%;
    gap: 100px;
    background-color: white;
`;

const Button = styled.div`
    align-items: center;
    width: 775px;
    height: 234px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: #e8efef;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
