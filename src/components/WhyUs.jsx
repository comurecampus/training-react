import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Percent, 
  Smartphone, 
  ShieldCheck, 
  Briefcase, 
  Sparkles 
} from 'lucide-react';

const icons = [Percent, Smartphone, ShieldCheck, Briefcase];

export const WhyUs = () => {
  const { t } = useLanguage();
  // Mendukung key whyUs maupun advantages sesuai spesifikasi
  const whyUsData = t.whyUs || t.advantages || {};
  const items = whyUsData.items || [];

  return (
    <section id="whyUs" className="section-padding why-us-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} className="text-primary" />
            <span>Standar Kepercayaan Finansial</span>
          </div>
          <h2 className="section-title">{whyUsData.title || 'Mengapa Memilih Kami?'}</h2>
          {whyUsData.subtitle && (
            <p className="section-subtitle">{whyUsData.subtitle}</p>
          )}
        </div>

        {/* Numbered Advantages Grid (01, 02, 03, 04) */}
        <div className="why-us-grid">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length] || ShieldCheck;

            return (
              <div key={index} className="advantage-card">
                <div className="card-top-row">
                  <div className="advantage-number">{item.number || `0${index + 1}`}</div>
                  <div className="advantage-icon-wrapper">
                    <Icon size={22} className="advantage-icon" />
                  </div>
                </div>

                <h3 className="advantage-title">{item.title}</h3>
                <p className="advantage-desc">{item.desc}</p>
                <div className="card-bottom-accent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

