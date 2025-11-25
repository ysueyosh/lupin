'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavHeaderProps {
  currentPage?: string;
}

interface MenuItem {
  label: string;
  href: string;
  action?: (() => void) | null;
}

export default function NavHeader({ currentPage }: NavHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  // ✅ スクロール監視で透明⇔白を切り替え
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const menuItems: MenuItem[] = [
    { label: 'ホーム', href: '/', action: null },
    { label: '強み', href: '/strengths', action: null },
    { label: '相談内容', href: '/recommended-for', action: null },
    { label: '調査の流れ', href: '/flow', action: null },
    { label: '料金', href: '/plan', action: null },
    { label: 'お問い合わせ', href: '/contact', action: null },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isTop
          ? 'bg-transparent backdrop-blur-0 border-transparent'
          : 'bg-[#333333] ackdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/lupin_logo_white.png"
                alt="Lupin Logo"
                className="h-15 sm:h-15"
              />
            </Link>
          </div>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.action) {
                    e.preventDefault();
                    item.action();
                  }
                }}
                className={`px-4 py-2 rounded font-medium transition duration-200 ${
                  isTop
                    ? 'text-white hover:bg-white/10'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* モバイルボタン */}
          <button
            className={`md:hidden p-2 rounded transition ${
              isTop
                ? 'text-white hover:bg-white/10'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* モバイルナビ */}
        {menuOpen && (
          <nav
            className={`md:hidden border-t transition-all duration-300 ${
              isTop ? 'border-white/30 bg-black/50' : 'border-gray-200 bg-white'
            } py-3 space-y-1 pb-4 backdrop-blur-md`}
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.action) {
                    e.preventDefault();
                    item.action();
                  }
                  setMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded font-medium transition ${
                  isTop
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
