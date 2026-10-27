import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Target, Compass, Award, Users, CheckCircle, Sparkles } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();
  const aboutData = t.about || {};

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} className="text-primary" />
            <span>Koperasi Masa Depan</span>
          </div>
          <h2 className="section-title">{aboutData.title || 'Tentang Kami'}</h2>
          {aboutData.subtitle && <p className="section-subtitle">{aboutData.subtitle}</p>}
        </div>

        {/* Lead Story Card */}
        <div className="about-lead-card">
          <p className="about-lead-text">
            {aboutData.lead ||
              'Koperasi Keuangan Amanah Mandiri berdedikasi membangun ekosistem finansial inklusif, adil, dan transparan bagi seluruh anggota dan pelaku UMKM.'}
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="vision-mission-grid">
          {/* Vision Card */}
          <div className="vision-card">
            <div className="card-badge-icon bg-emerald">
              <Compass size={24} className="text-emerald-500" />
            </div>
            <div className="card-tag">{aboutData.visionTag || 'Visi Kami'}</div>
            <h3 className="card-main-title">{aboutData.visionTag || 'Visi'}</h3>
            <p className="card-desc">
              {aboutData.visionText ||
                'Menjadi koperasi keuangan modern terdepan di tingkat nasional yang terpercaya dan berdaya saing global demi kemakmuran anggota.'}
            </p>
          </div>

          {/* Mission Card */}
          <div className="mission-card">
            <div className="card-badge-icon bg-blue">
              <Target size={24} className="text-blue-500" />
            </div>
            <div className="card-tag">{aboutData.missionTag || 'Misi Kami'}</div>
            <h3 className="card-main-title">{aboutData.missionTag || 'Misi'}</h3>
            <ul className="mission-list">
              {(aboutData.missions || []).map((mission, idx) => (
                <li key={idx} className="mission-item">
                  <CheckCircle size={18} className="mission-check-icon text-emerald-500 flex-shrink-0" />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Values Section */}
        {aboutData.values && (
          <div className="about-values-block">
            <h3 className="values-heading text-center">
              {aboutData.valuesTitle || 'Nilai-Nilai Utama Tata Kelola'}
            </h3>
            <div className="values-grid">
              {aboutData.values.map((val, idx) => (
                <div key={idx} className="value-item-card">
                  <div className="value-index-dot">0{idx + 1}</div>
                  <h4 className="value-title">{val.title}</h4>
                  <p className="value-desc">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;

