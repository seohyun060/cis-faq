import styled from 'styled-components';
import image from '@/assets/image';
import Worldmap from './components/Worldmap';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
interface ContainerProps {
    contentHeight: number;
    contentWidth: number;
    children?: React.ReactNode; // children prop 추가
}
export default function Map() {
    const [displayWidth, setDisplayWidth] = useState(1080);
    const [contentHeight, setContentHeight] = useState(1920);
    const { t } = useTranslation(['page']);

    const handleResize = useCallback(() => {
        if (window.innerWidth > window.innerHeight) {
            setDisplayWidth(1920);
            setContentHeight(1080);
        } else {
            setDisplayWidth(1080);
            setContentHeight(1920);
        }
    }, [window.innerWidth, displayWidth, contentHeight, window.innerHeight]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, [window.innerWidth, window.innerHeight]);
    return (
        <Container contentHeight={contentHeight} contentWidth={displayWidth}>
            <BeamworksLogo src={image.logo} />
            <Descript dangerouslySetInnerHTML={{ __html: t('page:death') }}></Descript>
            <Worldmap displayWidth={displayWidth}></Worldmap>
        </Container>
    );
}

const BeamworksLogo = styled.img`
    position: absolute;
    top: 37px;
    right: 80px;
`;
const Descript = styled.div`
    position: absolute;
    top: 37px;
    left: 80px;
    width: 520px;
    color: #687578;

    font-family: Pretendard;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 39.5px; /* 112.857% */
`;
const Container = styled.div<ContainerProps>`
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    width: ${(props) => props.contentWidth}px;
    height: ${(props) => props.contentHeight}px;
`;
