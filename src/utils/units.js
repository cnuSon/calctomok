// 1. 단위의 종류와 변환 계수를 정의하는 '단위 사전'
export const unitConfig = {
    length: {
        baseUnit: 'm',
        units: {
            mm: 0.001,
            cm: 0.01,
            m: 1,
            km: 1000,
        }
    },
    force: {
        baseUnit: 'N',
        units: {
            N: 1,
            kN: 1000,
        }
    },
    pressure: {
        baseUnit: 'Pa',
        units: {
            Pa: 1,
            kPa: 1000,
            MPa: 1000000,
        }
    },
    area: {
        baseUnit: 'm²',
        units: {
            'mm²': 0.000001,
            'cm²': 0.0001,
            'm²': 1,
        }
    },
    // 필요에 따라 다른 단위 종류(질량, 시간 등)를 추가할 수 있습니다.
};

/**
 * 값을 기준 단위로 변환하는 함수
 * @param {number} value - 변환할 값
 * @param {string} fromUnit - 현재 단위 (예: 'cm')
 * @param {string} unitType - 단위의 종류 (예: 'length')
 * @returns {number} 기준 단위로 변환된 값
 */
export const convertToBaseUnit = (value, fromUnit, unitType) => {
    if (!value || !fromUnit || !unitType || !unitConfig[unitType]) {
        return value; // 정보가 없으면 원래 값을 반환
    }

    const config = unitConfig[unitType];
    const factor = config.units[fromUnit];

    if (factor === undefined) {
        return value; // 변환 계수를 찾을 수 없으면 원래 값을 반환
    }

    return parseFloat(value) * factor;
};
