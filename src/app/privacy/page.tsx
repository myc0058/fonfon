import React from 'react';
import styles from './privacy.module.css';
import Link from 'next/link';

export const metadata = {
    title: "개인정보 처리 방침 | 폰폰(PonPon)",
    description: "폰폰(PonPon) 서비스의 개인정보 처리 방침입니다.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/" className={styles.backLink}>
                    ← 홈으로
                </Link>
                <h1>개인정보 처리 방침</h1>
            </header>
            
            <div className={styles.content}>
                <p className={styles.intro}>
                    본 사이트는 이용자의 개인정보 보호를 소중하게 생각하며, 관련 법령 및 구글 애드센스 정책을 준수합니다.
                </p>

                <section className={styles.section}>
                    <h2>1. 개인정보의 수집 및 이용 목적</h2>
                    <p>
                        본 사이트는 이용자가 심리테스트를 수행하는 과정에서 이름, 연락처, 이메일 등 어떠한 개인 식별 정보도 직접 수집하거나 서버에 저장하지 않습니다. 테스트 응답 값은 결과 산출을 위한 일회성 데이터로만 사용되며, 결과 확인 후 즉시 파기됩니다.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. 쿠키(Cookie) 및 제3자 광고 시스템 이용</h2>
                    <p>
                        본 사이트는 이용자에게 적절한 광고를 제공하기 위해 구글(Google)을 포함한 제3자 광고 업체의 서비스(Google AdSense 등)를 이용합니다.
                    </p>
                    <ul>
                        <li>
                            <strong>쿠키의 사용:</strong> 구글은 쿠키를 사용하여 이용자가 본 사이트 또는 다른 사이트를 방문한 기록을 바탕으로 맞춤형 광고를 게재합니다.
                        </li>
                        <li>
                            <strong>광고 설정 제어:</strong> 이용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">구글 광고 설정</a>을 방문하여 맞춤형 광고 게재를 중단할 수 있습니다. 또한, <a href="http://www.aboutads.info" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>를 통해 제3자 업체가 맞춤형 광고를 위해 쿠키를 사용하는 것을 차단할 수 있습니다.
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>3. 데이터 보안 및 로그 기록</h2>
                    <p>
                        본 사이트의 서버는 서비스 운영 및 보안을 위해 접속 IP, 브라우저 종류, 방문 시간 등의 비식별 로그 정보를 자동으로 기록할 수 있으나, 이를 특정 개인과 연결하여 식별하지 않습니다.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>4. 개인정보 보호 책임자 및 문의</h2>
                    <p>
                        본 사이트 이용 중 개인정보와 관련한 문의 사항이 있으시면 아래의 연락처로 문의해 주시기 바랍니다.
                    </p>
                    <p className={styles.contact}>
                        이메일: <a href="mailto:myc0058@gmail.com">myc0058@gmail.com</a>
                    </p>
                </section>

                <div className={styles.footerInfo}>
                    <p>시행일자: 2024년 1월 1일</p>
                </div>
            </div>
        </div>
    );
}
