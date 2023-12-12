import { createGlobalStyle } from 'styled-components';
import PretendardSemiBold from '../assets/fonts/Pretendard-SemiBold.woff2';
import PretendardMedium from '../assets/fonts/Pretendard-Medium.woff2';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff2';
import PretendardLight from '../assets/fonts/Pretendard-Light.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-SemiBold'), url(${PretendardSemiBold}) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Medium'), url(${PretendardMedium}) format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Regular'), url(${PretendardRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: local('Pretendard-Light'), url(${PretendardLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard';
    font-size: 16px;
    scroll-behavior: smooth;
  }

  div {
    display:flex;
    color:#45454F;
  }
`;
