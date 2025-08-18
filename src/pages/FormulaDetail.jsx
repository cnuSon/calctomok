import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { allFormulas } from '../data/formulas';
import nerdamer from 'nerdamer/all';
import { BlockMath } from 'react-katex';
import { unitConfig, convertToBaseUnit } from '../utils/units';

const FormulaDetail = () => {
    
    const { categoryId, formulaId } = useParams();
    const [solveFor, setSolveFor] = useState('');
    const [inputValues, setInputValues] = useState({});
    const [result, setResult] = useState(null);
    const [selectedUnits, setSelectedUnits] = useState({});

    useEffect(() => {
        if (categoryId && formulaId) {
            const categoryFormulas = allFormulas[categoryId];
            if (categoryFormulas) {
                const currentFormula = categoryFormulas.find(f => f.id === formulaId);
                if (currentFormula) {
                    setSolveFor(currentFormula.equations.base);
                    setInputValues({});
                    setResult(null);
                    setSelectedUnits({});
                }
            }
        } else {
             setSolveFor('');
             setInputValues({});
             setResult(null);
             setSelectedUnits({});
        }
    }, [categoryId, formulaId]);

    if (!categoryId || !formulaId) {
        return <div className="formula-detail-placeholder">공식을 선택해주세요.</div>;
    }

    const formula = allFormulas[categoryId]?.find(f => f.id === formulaId);

    if (!formula) {
        return <div className="formula-detail-placeholder">공식을 찾을 수 없습니다.</div>;
    }

    const latexString = nerdamer(formula.equations[formula.equations.base]).toTeX();

    const handleInputChange = (symbol, value) => {
        setInputValues(prev => ({ ...prev, [symbol]: value }));
    };

    const handleUnitChange = (symbol, unit) => {
        setSelectedUnits(prev => ({ ...prev, [symbol]: unit }));
    };

    const handleCalculate = () => {
        try {
            // lock/unlock 관련 코드를 모두 제거했습니다.
            const valuesInBaseUnits = {};
            Object.keys(inputValues).forEach(symbol => {
                const variable = formula.variables.find(v => v.symbol === symbol);
                if (variable && variable.unitType) {
                    const fromUnit = selectedUnits[symbol] || unitConfig[variable.unitType].baseUnit;
                    valuesInBaseUnits[symbol] = convertToBaseUnit(inputValues[symbol], fromUnit, variable.unitType);
                } else {
                    valuesInBaseUnits[symbol] = inputValues[symbol];
                }
            });

            let equation;
            if (formula.equations[solveFor]) {
                equation = formula.equations[solveFor].split('=')[1];
            } else {
                const baseEq = formula.equations[formula.equations.base];
                equation = nerdamer.solve(baseEq, solveFor).toString();
            }
            
            const calculatedResult = nerdamer(equation, valuesInBaseUnits).evaluate();
            setResult(calculatedResult.text('decimals', 8));

        } catch (error) {
            console.error("Calculation error:", error);
            setResult('계산 오류');
        }
    };
    
    const handleReset = () => {
        setInputValues({});
        setResult(null);
        setSelectedUnits({});
    }

    return (
        <div className="formula-detail">
            <h1 className="formula-detail__title">{formula.name}</h1>
            <div className="formula-detail__equation-box">
                <BlockMath math={latexString} />
            </div>
            <p className="formula-detail__description">{formula.description}</p>

            <div className="calculator">
                <h2 className="calculator__title">계산기</h2>
                <div className="calculator__control">
                    <label htmlFor="solveForSelect">계산할 변수 선택:</label>
                    <select
                        id="solveForSelect"
                        value={solveFor}
                        onChange={(e) => {
                            setSolveFor(e.target.value);
                            handleReset();
                        }}
                    >
                        {formula.variables.map(v => (
                            <option key={v.symbol} value={v.symbol}>{v.description} ({v.symbol})</option>
                        ))}
                    </select>
                </div>

                <div className="calculator__inputs">
                    {formula.variables
                        .filter(v => v.symbol !== solveFor)
                        .map(v => {
                            const hasUnits = v.unitType && unitConfig[v.unitType];
                            const baseUnit = hasUnits ? unitConfig[v.unitType].baseUnit : '';
                            
                            return (
                                <div className="input-group" key={v.symbol}>
                                    <label htmlFor={v.symbol}>{v.description} ({v.symbol})</label>
                                    <div className="input-row">
                                        <input
                                            type="number"
                                            id={v.symbol}
                                            value={inputValues[v.symbol] || ''}
                                            onChange={(e) => handleInputChange(v.symbol, e.target.value)}
                                            placeholder={`단위: ${baseUnit}`}
                                        />
                                        {hasUnits && (
                                            <select
                                                value={selectedUnits[v.symbol] || baseUnit}
                                                onChange={(e) => handleUnitChange(v.symbol, e.target.value)}
                                            >
                                                {Object.keys(unitConfig[v.unitType].units).map(unit => (
                                                    <option key={unit} value={unit}>{unit}</option>
                                                ))}
                                            </select>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                </div>

                <div className="calculator__actions">
                    <button onClick={handleCalculate} className="calc-button">계산하기</button>
                    <button onClick={handleReset} className="reset-button">초기화</button>
                </div>

                {result !== null && (
                    <div className="calculator__result">
                        <h3>계산 결과:</h3>
                        <p><strong>{solveFor} = {result}</strong></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormulaDetail;
