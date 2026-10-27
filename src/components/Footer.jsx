import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Shield, Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const footerData = t.footer || {};
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-deep-navy">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand & Mission Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <div className="footer-icon-box">
                <Building2 size={24} className="text-white" />
              </div>
              <span className="footer-brand-name">
                {footerData.brand || 'Koperasi Amanah Mandiri'}
              </span>
            </div>

            <p className="footer-tagline-text">{footerData.tagline}</p>
            <p className="footer-desc-text">{footerData.desc}</p>

            <div className="regulatory-tag">
              <Shield size={16} className="text-emerald-400" />
              <span>Terdaftar Resmi Kemenkop & UKM RI</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">{footerData.quickLinks || 'Tautan Cepat'}</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#hero">Beranda</a>
              </li>
              <li>
                <a href="#about">Tentang Kami</a>
              </li>
              <li>
                <a href="#services">Layanan Anggota</a>
              </li>
              <li>
                <a href="#whyUs">Keunggulan & SHU</a>
              </li>
              <li>
                <a href="#contact">Kontak & Lokasi</a>
              </li>
            </ul>
          </div>

          {/* Key Services Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">{footerData.servicesTitle || 'Layanan Utama'}</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#services">Simpanan Sukarela & Berjangka</a>
              </li>
              <li>
                <a href="#services">Pinjaman Modal UMKM</a>
              </li>
              <li>
                <a href="#services">Pembiayaan Syariah Murabahah</a>
              </li>
              <li>
                <a href="#services">Dana Talangan Darurat</a>
              </li>
              <li>
                <a href="#services">Penyertaan Proyek Riil</a>
              </li>
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">{footerData.contactTitle || 'Kontak Layanan'}</h4>
            <div className="footer-contact-summary">
              <p className="contact-line">Jl. Sudirman Kav. 45, Jakarta Selatan</p>
              <p className="contact-line">WhatsApp: +62 812-3456-7890</p>
              <p className="contact-line">Email: layanan@amanahmandiri-koperasi.co.id</p>
              <p className="contact-hours">Senin - Jumat: 08:00 - 17:00 WIB</p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        {footerData.disclaimer && (
          <div className="footer-disclaimer-box">
            <p className="disclaimer-text">{footerData.disclaimer}</p>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-left-text">
            © {currentYear} {footerData.brand || 'Koperasi Amanah Mandiri'}. {footerData.rights || 'Hak Cipta Dilindungi.'}
          </div>

          <div className="bottom-links-group">
            <a href="#about" className="footer-policy-link">
              {footerData.privacy || 'Kebijakan Privasi'}
            </a>
            <span className="dot-sep">•</span>
            <a href="#about" className="footer-policy-link">
              {footerData.terms || 'Syarat & Ketentuan'}
            </a>
          </div>

          <button
            type="button"
            className="btn-scroll-top"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            title="Kembali ke atas"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

