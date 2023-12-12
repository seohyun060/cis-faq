import styled from 'styled-components';

import Worldmap from './components/Worldmap';
export default function Map() {
    return (
        <Container>
            <Worldmap></Worldmap>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;
