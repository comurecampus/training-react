import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { 
  Globe, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export const Navbar = () => {
  const { language, changeLanguage, t, supportedLanguages, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const langDropdownRef = useRef(null);

  // Efek scroll untuk navbar background glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menutup dropdown saat klik di luar area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Tutup menu mobile saat ukuran viewport diperbesar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeLangObj = supportedLanguages.find((l) => l.code === language) || supportedLanguages[0];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="navbar-brand">
          <div className="brand-icon-box">
            <Building2 className="brand-icon" size={24} />
          </div>
          <div className="brand-text-group">
            <span className="brand-title">{t.navbar?.brand || 'Koperasi Amanah Mandiri'}</span>
            <span className="brand-badge">Syariah & Konvensional</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links-desktop" aria-label="Navigasi Utama">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="nav-link">
            {t.navbar?.home || 'Beranda'}
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="nav-link">
            {t.navbar?.about || 'Tentang Kami'}
          </a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="nav-link">
            {t.navbar?.services || 'Layanan'}
          </a>
          <a href="#whyUs" onClick={(e) => handleNavClick(e, 'whyUs')} className="nav-link">
            {t.navbar?.whyUs || 'Keunggulan'}
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="nav-link">
            {t.navbar?.contact || 'Hubungi Kami'}
          </a>
        </nav>

        {/* Right Action Controls: Lang Selector, Theme Toggle & CTA */}
        <div className="navbar-actions-desktop">
          {/* Language Dropdown Selector */}
          <div className="lang-selector-wrapper" ref={langDropdownRef}>
            <button
              type="button"
              className="lang-selector-btn"
              onClick={() => setIsLangDropdownOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={isLangDropdownOpen}
              aria-label={t.navbar?.langSelect || 'Pilih Bahasa'}
            >
              <span className="lang-flag">{activeLangObj.flag}</span>
              <span className="lang-code-text">{activeLangObj.code.toUpperCase()}</span>
              <ChevronDown size={14} className={`dropdown-chevron ${isLangDropdownOpen ? 'rotate' : ''}`} />
            </button>

            {isLangDropdownOpen && (
              <div className="lang-dropdown-menu" role="menu">
                {supportedLanguages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    role="menuitem"
                    className={`lang-menu-item ${item.code === language ? 'active' : ''}`}
                    onClick={() => {
                      changeLanguage(item.code);
                      setIsLangDropdownOpen(false);
                    }}
                  >
                    <span className="item-flag">{item.flag}</span>
                    <span className="item-name">{item.name}</span>
                    {item.code === language && <span className="active-dot" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={t.navbar?.themeToggle || 'Ubah Tema'}
            aria-label={t.navbar?.themeToggle || 'Ubah Tema'}
          >
            {theme === 'dark' ? (
              <Sun size={19} className="theme-icon sun-icon text-amber-400" />
            ) : (
              <Moon size={19} className="theme-icon moon-icon text-indigo-600" />
            )}
          </button>

          {/* Portal Anggota CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="btn btn-primary btn-sm btn-portal"
          >
            <span>{t.navbar?.memberPortal || 'Portal Anggota'}</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Hamburger Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Buka Menu Navigasi"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-text-group">
                <span className="brand-title">{t.navbar?.brand || 'Koperasi Amanah Mandiri'}</span>
              </div>
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Tutup Menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="mobile-nav-item">
                {t.navbar?.home || 'Beranda'}
              </a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="mobile-nav-item">
                {t.navbar?.about || 'Tentang Kami'}
              </a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="mobile-nav-item">
                {t.navbar?.services || 'Layanan'}
              </a>
              <a href="#whyUs" onClick={(e) => handleNavClick(e, 'whyUs')} className="mobile-nav-item">
                {t.navbar?.whyUs || 'Keunggulan'}
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="mobile-nav-item">
                {t.navbar?.contact || 'Hubungi Kami'}
              </a>
            </nav>

            <div className="mobile-drawer-footer">
              <div className="mobile-control-row">
                <span className="mobile-control-label">{t.navbar?.langSelect || 'Bahasa'}</span>
                <div className="mobile-lang-grid">
                  {supportedLanguages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      className={`mobile-lang-pill ${item.code === language ? 'active' : ''}`}
                      onClick={() => changeLanguage(item.code)}
                    >
                      <span>{item.flag}</span>
                      <span>{item.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mobile-control-row">
                <span className="mobile-control-label">{t.navbar?.themeToggle || 'Tema Tampilan'}</span>
                <button type="button" className="mobile-theme-btn" onClick={toggleTheme}>
                  {theme === 'dark' ? (
                    <>
                      <Sun size={18} />
                      <span>Mode Terang (Light)</span>
                    </>
                  ) : (
                    <>
                      <Moon size={18} />
                      <span>Mode Gelap (Dark)</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="btn btn-primary btn-block mt-4"
              >
                <span>{t.navbar?.memberPortal || 'Portal Anggota'}</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

