import React from 'react';

const Footer = () => {
    // 맨 위로 스크롤하는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 부드럽게 스크롤
        });
    };

    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__info">
                    <div className="footer__links">
                        <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="mailto:your-email@example.com">
                            Contact Us
                        </a>
                    </div>
                    <div className="footer__copyright">
                        &copy; {new Date().getFullYear()} Civil Engineering Formulas. All rights reserved.
                    </div>
                    <div className="footer__disclaimer">
                        면책 조항: 본 사이트의 정보는 학습 및 참고용이며, 실제 설계에 적용 시 발생할 수 있는 문제에 대해 책임지지 않습니다.
                    </div>
                </div>
                <button className="footer__to-top" onClick={scrollToTop}>
                    TOP
                </button>
            </div>
        </footer>
    );
};

export default Footer;
