import { CiHome, CiCalculator1, CiRuler, CiWavePulse1, CiPen, CiViewBoard, CiDroplet } from "react-icons/ci";


export const headerMenus = [
    {
        title: "홈",
        icon: <CiHome />,
        to: "/"
    },
    {
        title: "응용역학",
        icon: <CiCalculator1 />,
        to: "/category/mechanics" // 경로 수정
    },
    {
        title: "측량학",
        icon: <CiRuler />,
        to: "/category/surveying" // 경로 수정
    },
    {
        title: "수리수문학",
        icon: <CiWavePulse1 />,
        to: "/category/fluids" // 경로 수정
    },
    {
        title: "철근콘크리트",
        icon: <CiPen />,
        to: "/category/rcsteel" // 경로 수정
    },
    {
        title: "토질 및 기초",
        icon: <CiViewBoard />,
        to: "/category/geotechnics" // 경로 수정
    },
    {
        title: "상하수도공학",
        icon: <CiDroplet />,
        to: "/category/waterworks" // 경로 수정
    },
];

// 아래 데이터는 기존과 동일하게 유지합니다.
export const searchKeyword = [
    {
        title: "매닝",
        to: "/manning"
    },
    // ...
];

export const snsLink = [
    // ...
];
