import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivacyPolicyPage from '../page';

// Mock next/link
jest.mock('next/link', () => {
    return ({ children, href }: { children: React.ReactNode; href: string }) => {
        return <a href={href}>{children}</a>;
    };
});

describe('PrivacyPolicyPage', () => {
    it('renders the title and intro text', () => {
        render(<PrivacyPolicyPage />);
        expect(screen.getByText('개인정보 처리 방침')).toBeInTheDocument();
        expect(screen.getByText(/본 사이트는 이용자의 개인정보 보호를 소중하게 생각하며/)).toBeInTheDocument();
    });

    it('renders all policy sections', () => {
        render(<PrivacyPolicyPage />);
        expect(screen.getByText('1. 개인정보의 수집 및 이용 목적')).toBeInTheDocument();
        expect(screen.getByText('2. 쿠키(Cookie) 및 제3자 광고 시스템 이용')).toBeInTheDocument();
        expect(screen.getByText('3. 데이터 보안 및 로그 기록')).toBeInTheDocument();
        expect(screen.getByText('4. 개인정보 보호 책임자 및 문의')).toBeInTheDocument();
    });

    it('renders the contact email', () => {
        render(<PrivacyPolicyPage />);
        const email = screen.getAllByText(/myc0058@gmail.com/);
        expect(email.length).toBeGreaterThan(0);
    });

    it('renders a back to home link', () => {
        render(<PrivacyPolicyPage />);
        const homeLink = screen.getByText('← 홈으로');
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveAttribute('href', '/');
    });
});
