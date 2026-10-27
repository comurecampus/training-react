import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Wallet, 
  Store, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  BookOpen, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  HelpCircle,
  Sparkles
} from 'lucide-react';

// Pemetaan icon string ke komponen Lucide
const iconComponentMap = {
  Wallet,
  Store,
  ShieldCheck,
  CreditCard,
  TrendingUp,
  BookOpen,
};

export const Services = () => {
  const { t } = useLanguage();
  const servicesData = t.services || {};
  const serviceItems = servicesData.items || [];

  // State untuk interactive modal
  const [selectedService, setSelectedService] = useState(null);

  // Mencegah scroll pada body saat modal terbuka & menangani tombol Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

  const handleOpenModal = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} className="text-primary" />
            <span>Portofolio Layanan Unggulan</span>
          </div>
          <h2 className="section-title">{servicesData.title || 'Layanan Keuangan Kami'}</h2>
          {servicesData.subtitle && (
            <p className="section-subtitle">{servicesData.subtitle}</p>
          )}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {serviceItems.map((item) => {
            const IconComponent = iconComponentMap[item.icon] || Wallet;

            return (
              <div
                key={item.id}
                className="service-card cursor-pointer"
                onClick={() => handleOpenModal(item)}
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenModal(item);
                  }
                }}
              >
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={28} className="service-icon text-primary" />
                  </div>
                  {item.badge && <span className="service-badge">{item.badge}</span>}
                </div>

                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.shortDesc}</p>

                <div className="service-card-action">
                  <span className="action-text">
                    {servicesData.clickDetail || 'Lihat Rincian & Syarat'}
                  </span>
                  <div className="action-arrow">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal Pop-up */}
      {selectedService && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-header-left">
                <div className="modal-icon-badge">
                  {(() => {
                    const ModalIcon = iconComponentMap[selectedService.icon] || Wallet;
                    return <ModalIcon size={24} className="text-primary" />;
                  })()}
                </div>
                <div>
                  {selectedService.badge && (
                    <span className="modal-category-tag">{selectedService.badge}</span>
                  )}
                  <h3 id="modal-service-title" className="modal-title">
                    {selectedService.detail?.title || selectedService.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={handleCloseModal}
                aria-label={servicesData.modalClose || 'Tutup'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <p className="modal-description">
                {selectedService.detail?.description || selectedService.shortDesc}
              </p>

              {/* Poin Utama / Key Benefits */}
              {selectedService.detail?.points && selectedService.detail.points.length > 0 && (
                <div className="modal-points-wrapper">
                  <h4 className="modal-points-heading">Keunggulan & Syarat Pokok:</h4>
                  <ul className="modal-points-list">
                    {selectedService.detail.points.map((point, idx) => (
                      <li key={idx} className="modal-point-item">
                        <CheckCircle2
                          size={18}
                          className="point-check-icon text-emerald-500 flex-shrink-0"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outro statement */}
              {selectedService.detail?.outro && (
                <div className="modal-outro-box">
                  <HelpCircle size={20} className="outro-icon text-indigo-500 flex-shrink-0" />
                  <p className="outro-text">{selectedService.detail.outro}</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={handleCloseModal}
              >
                {servicesData.modalClose || 'Tutup'}
              </button>
              <a
                href="#contact"
                className="btn btn-primary btn-sm"
                onClick={() => {
                  handleCloseModal();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Ajukan Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;

