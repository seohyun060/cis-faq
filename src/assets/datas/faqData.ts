import faq1 from '@images/faq/faq1.png';
import faq2 from '@images/faq/faq2.png';
import faq3 from '@images/faq/faq3.png';
import faq4 from '@images/faq/faq4.png';
import faq5 from '@images/faq/faq5.png';
import faq7 from '@images/faq/faq7.png';
import faq8 from '@images/faq/faq8.png';
import faq11 from '@images/faq/faq11.png';
import faq13 from '@images/faq/faq13.png';
import faq14 from '@images/faq/faq14.png';
import faq15 from '@images/faq/faq15.png';

export interface IFAQ {
    question: string;
    answer: string;
    image: string;
    height: number;
}

export const featureFAQ: IFAQ[] = [
    {
        question: 'CadAI의 주요 기능이 무엇인가요?',
        answer: 'CadAI는 초음파 영상을 입력으로 받아서 유방암으로 의심되는 병변을 자동으로 검출하는 동시에 유방암 병변 유무와 병변의 악성도를 의료인에게 제공하여 진달을 보조하기 위한 인공지능 소프트웨어입니다.\n초음파 영상에 의심되는 병변 부위에 악성의심영역맵(CadAI Map)과 악성도 확률 (CadAI Score)를 제공하며, 병변 부위의 ROI 및 측정정보를 함께 제공합니다.',
        image: faq1,
        height: 850,
    },
    {
        question: 'CadAI가 진단 가능한 부위는 어디인가요?',
        answer: 'CadAI Series에는 유방암 진단을 보조하는 CadAI-B, 갑상선 진단을 보조하는 CadAI-T가 있습니다.\n추후 복부, 간 등 다른 부위까지 확장 예정 입니다. ',
        image: faq2,
        height: 700,
    },
    {
        question: 'CadAI와 기존의 AI 진단 제품들과의 차이는 무엇인가요?',
        answer: '기존의 AI 진단 제품들은 사용자가 직접 병변의 위치를 찾아야하고, 제품을 동작시키기 위한 별도의 서버를 필요로 하였습니다.\nCadAI는 사용자의 조작 없이 병변을 자동으로 탐지하며, 제품을 동작시키기 위한 별도의 서버를 필요로 하지 않습니다.',
        image: faq3,
        height: 720,
    },
    {
        question: 'CadAI를 사용하면 진단하는데 도움이 될까요?',
        answer: '한국, 우즈베키스탄, 대만 등 여러 국가에서 임상시험을 통해 CadAI의 유효성을 확인하였습니다.\n다음 결과와 같이, CadAI를 함께 사용하였을 때 진단 성능이 높아짐을 확인하실 수 있습니다. ',
        image: faq4,
        height: 740,
    },
    {
        question: '사용자가 프로브를 움직이면 SmartCheck가 자동으로 동작하나요?',
        answer: 'SmartCheck는 프로브의 움직임을 감지하는 것이 아닙니다. 사용자가 초음파 기계에서 바디마커와 프로브를 표시하면, SmartCheck의 바디프레임에 누적 표시됩니다.\nSmartCheck가 진단 흐름을 기억하여 사용자의 중복 진단을 줄이는데 도움을 줄 수 있습니다.',
        image: faq5,
        height: 1020,
    },
    {
        question: 'CadAI의 인공지능 모델에 데이터를 얼마나 학습 시킨 건가요?',
        answer: '약 70만 건 이상의 임상 데이터를 기반으로 학습된 AI 모델이 제품의 결과를 보여줍니다.',
        image: '',
        height: 170,
    },
    {
        question: 'CadAI의 성능이 어떻게 되나요?',
        answer: 'AUC 진단 성능은 95%*이고, 검출 성능은 97%*로 나타났습니다.\n(*multicenter external testset 기준)',
        image: faq7,
        height: 640,
    },
    {
        question: 'CadAI와 Elastography의 차이점이 무엇인가요?',
        answer: '비슷한 컬러맵을 사용하고 있지만 엘라스토는 탄성 정도를, CadAI는 악성도를 알려줍니다. CadAI의 컬러맵이 붉어질수록, 악성일 확률이 높아짐을 나타냅니다.',
        image: faq8,
        height: 500,
    },
];

export const purchaseFAQ: IFAQ[] = [
    {
        question: 'CadAI 제품 출시일은 어떻게 되나요?',
        answer: 'CadAI-B는 내년 상반기, CadAI-T는 내년 하반기에 출시 예정입니다.\n내년 3~4월 인허가를 목표로 Beamworks 모든 직원이 노력하고 있습니다.',
        image: '',
        height: 240,
    },
    {
        question: 'CadAI는 GE 장비와 함께 구매하는 제품인가요?',
        answer: 'GE 장비와는 별도로 구매하는 제품입니다. 현재 사용중인 초음파 장비에 CadAI를 연결하여 사용하실 수 있습니다.',
        image: faq11,
        height: 920,
    },
    {
        question: 'CadAI의 가격 혹은 가격 정책이 어떻게 되나요?',
        answer: 'CadAI의 가격 및 가격 정책에 관해서는 현재 내부 논의 중에 있습니다.',
        image: '',
        height: 180,
    },
];

export const compatibilityFAQ: IFAQ[] = [
    {
        question: 'CadAI는 GE 모델에서만 사용이 가능한가요?',
        answer: 'GE 뿐만 아니라 다른 제조사의 초음파 기기에서도 사용하실 수 있습니다.',
        image: faq13,
        height: 920,
    },
    {
        question: 'CadAI 제품과 초음파 장비는 어떻게 연결될 수 있나요?',
        answer: 'HDMI, C 케이블 및 캡쳐보드를 이용하여 CadAI가 설치된 태블릿에 연결만 하면 됩니다.\nCadA는 초음파 장비에서 생성되는 영상 신호만으로 사용자에게 의미있는 정보들을 제공하여 진단을 보조합니다.',
        image: faq14,
        height: 1040,
    },
    {
        question: 'CadAI 제품과 초음파 장비를 연결 시 서피스만 사용이 가능한가요? 보유 중인 PC를 사용할 수도 있나요?',
        answer: 'CadAI와 초음파 장비 연결을 위해 필요한 물품(서피스, 연결 케이블 선 등)이 한 세트로 구성되어 있습니다.\n아래 메일로 보유 중인 PC 설치에 대한 문의를 주신다면 답변을 드리겠습니다.',
        image: faq15,
        height: 700,
    },
    {
        question: 'PACS와 연동하여 CadAI의 결과 이미지나 정보를 확인할 수 있나요?',
        answer: '현재 PACS와 연동하는 기능을 개발 중에 있습니다. CadAI의 다음 버전을 기대해 주세요.',
        image: '',
        height: 180,
    },
];
