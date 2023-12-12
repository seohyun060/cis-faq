import { styled } from 'styled-components';
import img1 from '@images/alexandria/alexandria1.png';
import img2 from '@images/alexandria/alexandria2.png';
import img3 from '@images/alexandria/alexandria3.png';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';

export default function Alexandria() {
    const navigate = useNavigate();
    const imgList = [img1, img2, img3];
    return (
        <Container>
            <Carousel height={'1920px'} autoPlay={false} animation="slide" indicators={false} navButtonsAlwaysInvisible>
                {imgList.map((item, index) => (
                    <ImgWrapper key={index}>
                        <Image src={item} />
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
