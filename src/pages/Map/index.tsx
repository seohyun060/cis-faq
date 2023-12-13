import styled from 'styled-components';

import Worldmap from './components/Worldmap';
import { useCallback, useEffect, useState } from 'react';
interface ContainerProps {
    contentHeight: number;
    contentWidth: number;
    children?: React.ReactNode; // children prop 추가
}
export default function Map() {
    const [displayWidth, setDisplayWidth] = useState(1080);
    const [contentHeight, setContentHeight] = useState(1920);
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
            <Worldmap displayWidth={displayWidth}></Worldmap>
        </Container>
    );
}

const Container = styled.div<ContainerProps>`
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    width: ${(props) => props.contentWidth}px;
    height: ${(props) => props.contentHeight}px;
`;
