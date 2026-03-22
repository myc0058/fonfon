import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

// Mock next/link
jest.mock('next/link', () => {
    return ({ children, href }: { children: React.ReactNode; href: string }) => {
        return <a href={href}>{children}</a>;
    };
});

describe('Footer Component', () => {
    it('renders the logo', () => {
        render(<Footer />);
        const logo = screen.getByAltText('ponpon');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', expect.stringContaining('logo.webp'));
    });

    it('renders the privacy policy link', () => {
        render(<Footer />);
        const link = screen.getByText('개인정보 처리 방침');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/privacy');
    });

    it('renders the business inquiry email', () => {
        render(<Footer />);
        const email = screen.getByText(/myc0058@gmail.com/);
        expect(email).toBeInTheDocument();
        const mailtoLink = screen.getByRole('link', { name: /myc0058@gmail.com/i });
        expect(mailtoLink).toHaveAttribute('href', 'mailto:myc0058@gmail.com');
    });

    it('renders the copyright text with the current year', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(new RegExp(`© ${currentYear} PonPon. All rights reserved.`))).toBeInTheDocument();
    });
});
