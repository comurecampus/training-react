import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

// URL Google Apps Script Web App (dapat dikonfigurasi melalui VITE_GOOGLE_SCRIPT_URL pada berkas .env)
const DEFAULT_GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
  'https://script.google.com/macros/s/AKfycbxYOUR_DEPLOYED_SCRIPT_ID/exec';

export const Contact = () => {
  const { t, language } = useLanguage();
  const contactData = t.contact || {};
  const formLabels = contactData.form || {};

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' }); // type: 'success' | 'error' | ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    // Payload yang dikirimkan ke Google Apps Script
    const payload = {
      timestamp: new Date().toISOString(),
      language: language,
      fullName: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      serviceOfInterest: formData.service || 'Umum',
      message: formData.message.trim(),
    };

    try {
      /**
       * Mengirim form ke Google Apps Script Web App via fetch() POST JSON.
       * Catatan Google Apps Script: sering merespon redirect, mode: 'no-cors'
       * adalah standar handal saat Apps Script tidak mengembalikan CORS header terbuka.
       */
      const isPlaceholderUrl = DEFAULT_GOOGLE_SCRIPT_URL.includes('YOUR_DEPLOYED_SCRIPT_ID');

      if (isPlaceholderUrl) {
        // Simulasi pengiriman jika user belum menaruh ID Google Apps Script riil
        await new Promise((resolve) => setTimeout(resolve, 1200));
        console.info('Formulir disimulasikan berhasil terkirim dengan payload:', payload);
      } else {
        await fetch(DEFAULT_GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Standard untuk Google Apps Script Web App endpoint
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      }

      // Notifikasi Sukses
      setStatusMessage({
        type: 'success',
        text:
          formLabels.successMsg ||
          'Terima kasih! Pesan Anda telah berhasil terkirim dan disimpan di sistem kami.',
      });

      // Reset input form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Error saat mengirim formulir ke Google Sheets:', error);
      setStatusMessage({
        type: 'error',
        text:
          formLabels.errorMsg ||
          'Maaf, terjadi kendala saat mengirim data. Silakan coba kembali atau hubungi kami via WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <Sparkles size={14} className="text-primary" />
            <span>Pelayanan Prima & Terbuka</span>
          </div>
          <h2 className="section-title">{contactData.title || 'Hubungi Kami'}</h2>
          {contactData.subtitle && (
            <p className="section-subtitle">{contactData.subtitle}</p>
          )}
        </div>

        <div className="contact-layout-grid">
          {/* Kolom Informasi Kontak & Kantor Pusat */}
          <div className="contact-info-panel">
            <h3 className="info-panel-title">Informasi Layanan Anggota</h3>
            <p className="info-panel-desc">
              Kunjungi kantor kami atau hubungi kanal komunikasi resmi untuk bantuan konsultasi simpanan, pembiayaan syariah, dan legalitas keanggotaan.
            </p>

            <div className="info-cards-stack">
              {/* Alamat */}
              <div className="info-item-card">
                <div className="info-icon-box">
                  <MapPin size={22} className="text-primary" />
                </div>
                <div className="info-item-content">
                  <h4 className="info-item-label">{contactData.addressLabel || 'Alamat Kantor'}</h4>
                  <p className="info-item-val">{contactData.address || 'Graha Amanah Mandiri, Jl. Sudirman Kav. 45, Jakarta'}</p>
                </div>
              </div>

              {/* Email */}
              <div className="info-item-card">
                <div className="info-icon-box">
                  <Mail size={22} className="text-primary" />
                </div>
                <div className="info-item-content">
                  <h4 className="info-item-label">{contactData.emailLabel || 'Email Resmi'}</h4>
                  <a href={`mailto:${contactData.email || 'layanan@amanahmandiri.co.id'}`} className="info-item-link">
                    {contactData.email || 'layanan@amanahmandiri-koperasi.co.id'}
                  </a>
                </div>
              </div>

              {/* Telepon */}
              <div className="info-item-card">
                <div className="info-icon-box">
                  <Phone size={22} className="text-primary" />
                </div>
                <div className="info-item-content">
                  <h4 className="info-item-label">{contactData.phoneLabel || 'Telepon & WhatsApp'}</h4>
                  <p className="info-item-val">{contactData.phone || '+62 21 555-8900'}</p>
                </div>
              </div>

              {/* Jam Kerja */}
              {contactData.hours && (
                <div className="info-item-card">
                  <div className="info-icon-box">
                    <Clock size={22} className="text-primary" />
                  </div>
                  <div className="info-item-content">
                    <h4 className="info-item-label">{contactData.hoursLabel || 'Jam Operasional'}</h4>
                    <p className="info-item-val">{contactData.hours}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Quick WhatsApp Direct Assistance Pill */}
            <div className="direct-help-banner">
              <span className="help-text">Butuh respon cepat via WhatsApp?</span>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-sm"
              >
                <span>Chat Admin WA</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Kolom Formulir Kontak & Integrasi Google Sheets */}
          <div className="contact-form-panel">
            <div className="form-card-inner">
              <div className="form-header-group">
                <h3 className="form-heading">{formLabels.heading || 'Kirim Pesan / Pendaftaran'}</h3>
                <p className="form-subheading">
                  {formLabels.subheading || 'Tersinkronisasi langsung dengan basis data administrasi Google Sheets.'}
                </p>
              </div>

              {/* Alert Status Sukses / Gagal */}
              {statusMessage.text && (
                <div
                  className={`alert-notification ${
                    statusMessage.type === 'success' ? 'alert-success' : 'alert-error'
                  }`}
                  role="alert"
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 size={20} className="alert-icon text-emerald-500 flex-shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="alert-icon text-red-500 flex-shrink-0" />
                  )}
                  <div className="alert-message">{statusMessage.text}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Nama Lengkap */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {formLabels.nameLabel || 'Nama Lengkap'} <span className="text-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={formLabels.namePlaceholder || 'Nama Lengkap Anda'}
                    className="form-input"
                  />
                </div>

                {/* Email & Phone Dual Row */}
                <div className="form-row-dual">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      {formLabels.emailLabel || 'Alamat Email'} <span className="text-required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={formLabels.emailPlaceholder || 'email@anda.com'}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      {formLabels.phoneLabel || 'Nomor WhatsApp'} <span className="text-required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={formLabels.phonePlaceholder || '0812xxxxxxx'}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Pilihan Layanan */}
                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    {formLabels.serviceLabel || 'Layanan yang Diminati'}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">{formLabels.servicePlaceholder || 'Pilih salah satu layanan...'}</option>
                    <option value="Simpanan Sukarela & Berjangka">Simpanan Sukarela & Berjangka</option>
                    <option value="Pinjaman Modal Usaha UMKM">Pinjaman Modal Usaha UMKM</option>
                    <option value="Pembiayaan Syariah (Murabahah/Mudharabah)">Pembiayaan Syariah</option>
                    <option value="Dana Talangan Darurat">Dana Talangan Darurat</option>
                    <option value="Investasi Proyek Riil">Investasi Proyek Riil</option>
                    <option value="Konsultasi & Literasi Finansial">Konsultasi & Literasi Finansial</option>
                  </select>
                </div>

                {/* Pesan */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    {formLabels.messageLabel || 'Pesan / Pertanyaan'} <span className="text-required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={formLabels.messagePlaceholder || 'Tulis pesan Anda di sini...'}
                    className="form-textarea"
                  />
                </div>

                {/* Submit Button with Loading State */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block btn-submit"
                >
                  {isSubmitting ? (
                    <LoadingSpinner
                      size="sm"
                      text={formLabels.sendingBtn || 'Mengirim Data...'}
                      color="#ffffff"
                    />
                  ) : (
                    <>
                      <span>{formLabels.submitBtn || 'Kirim Pesan Sekarang'}</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

