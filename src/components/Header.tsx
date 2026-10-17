'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';

const NAV_LINKS = [
  { name: '회사소개', href: '#about' },
  { name: '서비스 안내', href: '#services' },
  { name: '작업 후기', href: '#reviews' },
  { name: '무료 견적문의', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group transition-transform active:scale-95"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <Sparkles className="w-5 h-5 text-sky-200" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                PREMIER <span className="text-blue-600 font-black">CLEAN</span>
              </span>
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase -mt-0.5">
                {siteConfig.brand.name} · 직영 마스터케어
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={siteConfig.contact.phoneTel}
              className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors py-2 px-3.5 rounded-full hover:bg-slate-100"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{siteConfig.contact.phone} (상담 직통)</span>
            </a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm shadow-blue-700/25 hover:shadow-md transition-all cursor-pointer"
            >
              <span>무료 견적 받기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-xs font-bold bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-sm"
            >
              견적문의
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 focus:outline-none rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="px-5 pt-3 pb-6 space-y-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-800 text-xs font-medium rounded-lg mb-3">
                <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>100% 한국인 직영팀 · 100% 무료 A/S 보장</span>
              </div>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-xl text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={siteConfig.contact.phoneTel}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  전화 상담 {siteConfig.contact.phone}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-98 transition-all"
                >
                  빠른 무료 견적 신청하기
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
