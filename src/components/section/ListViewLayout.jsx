import React from 'react';
import { NavLink } from 'react-router-dom';
import { headerMenus } from '../../data/header';

// 1. props로 searchQuery와 onSearchChange를 받도록 수정
const ListViewLayout = ({ children, searchQuery, onSearchChange }) => {
    return (
        <div className="list-view__wrap">
            <aside className="list-view__aside">
                <div className="sidebar">
                    <h2 className="sidebar__title">Categories</h2>
                    <nav className="sidebar__nav">
                        <ul>
                            {headerMenus.map((nav, key) => (
                                <li key={key}>
                                    <NavLink to={nav.to} className={({ isActive }) => isActive ? "active" : ""}>
                                        {nav.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="sidebar__search">
                        {/* 2. input의 value와 onChange에 props를 연결 */}
                        <input
                            type="text"
                            placeholder="Search formulas..."
                            value={searchQuery}
                            onChange={onSearchChange}
                        />
                    </div>
                </div>
            </aside>
            <main className="list-view__main">
                {children}
            </main>
        </div>
    );
};

export default ListViewLayout;
