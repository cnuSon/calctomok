import React from 'react'

import { GiHouse } from "react-icons/gi";
import { BsRulers } from "react-icons/bs";
import { GiContract } from "react-icons/gi";
import { GiPencilRuler } from "react-icons/gi";
import { GiWaterDrop } from "react-icons/gi";
import { GiSuspensionBridge } from "react-icons/gi";
import { GiFallingRocks } from "react-icons/gi";
import { GiTeePipe } from "react-icons/gi";

import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em><BsRulers /></em>
                    <span>CALCIVIL<br />by Hyun.</span>
                </a>
            </h1>

            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <GiHouse /> 홈
                        </a>
                    </li>
                    <li>
                        <a href='/today'>
                            <GiContract /> 응용역학
                        </a>
                    </li>
                    <li>
                        <a href='/developer'>
                            <GiPencilRuler /> 측량학
                        </a>
                    </li>
                    <li>
                        <a href='/webd'>
                            <GiWaterDrop /> 수리수문학
                        </a>
                    </li>
                    <li>
                        <a href='/website'>
                            <GiSuspensionBridge /> 철근콘크리트 및 강구조
                        </a>
                    </li>
                    <li>
                        <a href='/gsap'>
                            <GiFallingRocks /> 토질 및 기초
                        </a>
                    </li>
                    <li>
                        <a href='/port'>
                            <GiTeePipe /> 상하수도공학
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>webstoryboy</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
            </nav>
            
            <div className='header__sns'>
                <ul>
                    <li>
                        <a href='https://github.com/cnuSon' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='mailto:hyn_n@naver.com' rel='noopener noreferrer'>
                            <AiFillMail />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header