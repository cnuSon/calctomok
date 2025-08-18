// 각 과목별 공식 데이터를 import 합니다.
import mechanicsFormulas from './mechanics.json';
import surveyingFormulas from './surveying.json';
import fluidsFormulas from './fluids.json';
import rcsteelFormulas from './rcsteel.json';
import geotechnicsFormulas from './geotechnics.json';
import waterworksFormulas from './waterworks.json';

// 모든 공식 데이터를 하나의 객체로 통합하여 export 합니다.
// 키(key)는 header.js의 to 경로와 일치해야 합니다. (예: mechanics, surveying)
export const allFormulas = {
    mechanics: mechanicsFormulas,
    surveying: surveyingFormulas,
    fluids: fluidsFormulas,
    rcsteel: rcsteelFormulas,
    geotechnics: geotechnicsFormulas,
    waterworks: waterworksFormulas,
};

// 모든 공식을 하나의 배열로 합쳐서 export 합니다. (홈, 검색 기능용)
export const flatAllFormulas = Object.values(allFormulas).flat();
