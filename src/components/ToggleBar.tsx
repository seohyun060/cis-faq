import { IFAQ } from '@/assets/datas/faqData';
import { useState } from 'react';
import styled from 'styled-components';
import downIcon from '@images/downIcon.png';
import upIcon from '@images/upIcon.png';

export const ToggleBar = ({ data }: { data: IFAQ }) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <ToggleBarContainer className={open ? 'open' : ''}>
            <ToggleBarTitle onClick={() => setOpen((old) => !old)}>
                <ToggleBarTitleText>{data.question}</ToggleBarTitleText> <Icon src={open ? upIcon : downIcon} />
            </ToggleBarTitle>
            <ToggleBarContent className={open ? 'open' : ''} $height={data.height}>
                <ToggleBarContentText>{data.answer}</ToggleBarContentText>
                {data.image && <img style={{ width: '900px' }} src={data.image} />}
            </ToggleBarContent>
        </ToggleBarContainer>
    );
};

const ToggleBarContainer = styled.div`
    flex-direction: column;
    width: 951px;
    border: 5px solid #e8efef;
    background-color: #e8efef;
    border-radius: 20px;
`;

const ToggleBarTitle = styled.div`
    position: relative;
    width: 100%;
    background-color: #e8efef;
    align-items: center;
    padding-left: 35px;
    padding-right: 70px;
`;

const ToggleBarTitleText = styled.div`
    width: 100%;
    height: 151px;
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
    align-items: center;
`;

const Icon = styled.img`
    position: absolute;
    right: 35px;
    width: 27.73px;
    height: 14.89px;
`;

const ToggleBarContent = styled.div<{ $height: number }>`
    flex-direction: column;
    overflow: hidden;
    height: 0px;
    width: 100%;
    align-items: center;
    transition: height 0.5s ease;
    background-color: white;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    &.open {
        height: ${({ $height }) => $height}px;
    }
`;

const ToggleBarContentText = styled.div`
    width: 100%;
    align-items: center;
    font-family: 'Pretendard';
    font-size: 36px;
    line-height: 65px;
    padding: 24px 24px;
    color: #435256;
`;
