import React, { useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import Footer from '../components/section/Footer';
import ListViewLayout from '../components/section/ListViewLayout';
import { allFormulas, flatAllFormulas } from '../data/formulas';
import { headerMenus } from '../data/header';

const ListPage = () => {
    const { categoryId } = useParams();
    const [searchQuery, setSearchQuery] = useState(''); // 1. 검색어 상태 추가

    const isHomePage = !categoryId;
    const baseFormulas = isHomePage ? flatAllFormulas : (allFormulas[categoryId] || []);
    const title = isHomePage ? '전체 공식 목록' : (headerMenus.find(menu => menu.to === `/category/${categoryId}`)?.title || '카테고리');

    // 2. 검색어에 따라 공식 목록을 필터링
    const filteredFormulas = baseFormulas.filter(formula =>
        formula.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const categoryIdMap = {
        'MECH': 'mechanics', 'SURV': 'surveying', 'FLUIDS': 'fluids',
        'RCSTEEL': 'rcsteel', 'GEOTECHNICS': 'geotechnics', 'WATERWORKS': 'waterworks'
    };
    const getCategoryFromId = (id) => {
        const prefix = id.split('-')[0].toUpperCase();
        return categoryIdMap[prefix] || prefix.toLowerCase();
    };

    return (
        <div className="page-wrapper">
            {/* 3. 검색어 상태와 핸들러를 props로 전달 */}
            <ListViewLayout
                searchQuery={searchQuery}
                onSearchChange={(e) => setSearchQuery(e.target.value)}
            >
                <div className="nested-layout">
                    <aside className="nested-layout__sidebar">
                        <h2 className="nested-sidebar__title">{title}</h2>
                        <ul className="nested-sidebar__list">
                            {/* 4. 필터링된 목록을 사용하고, 결과가 없을 때 메시지 표시 */}
                            {filteredFormulas.length > 0 ? (
                                filteredFormulas.map(formula => (
                                    <li key={formula.id}>
                                        <NavLink
                                            to={`/category/${getCategoryFromId(formula.id)}/${formula.id}`}
                                            className={({ isActive }) => isActive ? "active" : ""}
                                        >
                                            {formula.name}
                                        </NavLink>
                                    </li>
                                ))
                            ) : (
                                <li className="no-results">검색 결과가 없습니다.</li>
                            )}
                        </ul>
                    </aside>
                    <main className="nested-layout__main">
                        <Outlet />
                    </main>
                </div>
            </ListViewLayout>
            <Footer />
        </div>
    );
};

export default ListPage;