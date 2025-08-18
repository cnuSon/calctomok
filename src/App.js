import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 통합된 ListPage와 나머지 페이지만 import 합니다.
const ListPage = lazy(() => import('./pages/ListPage'));
const FormulaDetail = lazy(() => import('./pages/FormulaDetail'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
    return (
        <BrowserRouter>
            {/* 2. fallback을 간단한 로딩 메시지로 변경합니다. */}
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <Routes>
                    {/* 홈페이지 라우트 */}
                    <Route path='/' element={<ListPage />} />

                    {/* 카테고리 및 상세 페이지 라우트 */}
                    <Route path='/category/:categoryId' element={<ListPage />}>
                        <Route index element={<FormulaDetail />} />
                        <Route path=':formulaId' element={<FormulaDetail />} />
                    </Route>

                    <Route path='*' element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
