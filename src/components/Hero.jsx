import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  Calculator, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';

export const Hero = () => {
  const { t, language } = useLanguage();
  const heroData = t.hero || {};

  // Tab untuk preview card: Simulasi Finansial vs Ledger Code TS
  const [activeTab, setActiveTab] = useState('simulator'); // 'simulator' | 'code'
  const [depositAmount, setDepositAmount] = useState(25000000); // 25 Juta IDR default
  const [copiedCode, setCopiedCode] = useState(false);

  // Perhitungan simulasi pembagian SHU (est 12.4% p.a.)
  const annualDividendRate = 0.124;
  const estimatedReturn = Math.round(depositAmount * annualDividendRate);
  const totalProjected = depositAmount + estimatedReturn;

  const formatCurrency = (val) => {
    if (language === 'en') {
      return '$' + Math.round(val / 15500).toLocaleString('en-US');
    }
    if (language === 'ar') {
      return (val / 1000000).toFixed(1) + ' مليون روبية';
    }
    if (language === 'fr') {
      return Math.round(val / 16800).toLocaleString('fr-FR') + ' €';
    }
    return 'Rp ' + Number(val).toLocaleString('id-ID');
  };

  const codeTsSnippet = `/**
 * @file cooperativeLedger.ts
 * @description Smart Dividend (SHU) Distribution Engine
 */
export interface MemberAccount {
  id: string;
  name: string;
  equityContribution: number;
  participationScore: number;
}

export class CooperativeLedger {
  private readonly reserveRatio = 0.20; // 20% Cadangan Wajib
  
  public calculateSHU(
    totalSurplus: number, 
    member: MemberAccount
  ): { capitalDividend: number; operationalBonus: number } {
    const distributable = totalSurplus * (1 - this.reserveRatio);
    const capitalShare = (member.equityContribution / totalSurplus) * 0.60;
    const bonusShare = (member.participationScore / 100) * 0.40;
    
    return {
      capitalDividend: distributable * capitalShare,
      operationalBonus: distributable * bonusShare
    };
  }
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeTsSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background glowing ambient elements */}
      <div className="hero-glow-bg hero-glow-1" />
      <div className="hero-glow-bg hero-glow-2" />

      <div className="hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge-pill">
            <ShieldCheck className="badge-icon text-emerald-500" size={16} />
            <span>{heroData.badge || 'Koperasi Keuangan Terdaftar & Berizin Resmi'}</span>
          </div>

          {/* Tagline / Kicker */}
          {heroData.tagline && (
            <p className="hero-tagline">{heroData.tagline}</p>
          )}

          {/* Main Title */}
          <h1 className="hero-title">
            {heroData.title || 'Solusi Finansial Berkelanjutan untuk Masa Depan Bersama'}
          </h1>

          {/* Slogan */}
          {heroData.slogan && (
            <div className="hero-slogan-wrapper">
              <span className="hero-slogan">{heroData.slogan}</span>
            </div>
          )}

          {/* Subtitle */}
          <p className="hero-subtitle">
            {heroData.subtitle ||
              'Layanan simpan pinjam transparan, aman, dan berdaya saing dengan teknologi digital modern.'}
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              <span>{heroData.ctaPrimary || 'Daftar Jadi Anggota'}</span>
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn btn-secondary btn-lg">
              <span>{heroData.ctaSecondary || 'Pelajari Layanan'}</span>
            </a>
          </div>

          {/* Stats Bar */}
          {heroData.stats && (
            <div className="hero-stats-grid">
              {heroData.stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Interactive Preview Card (Simulator & Code TS) */}
        <div className="hero-visual">
          <div className="fintech-preview-card">
            {/* Card Header & Tab Switcher */}
            <div className="preview-card-header">
              <div className="preview-tab-group">
                <button
                  type="button"
                  className={`preview-tab-btn ${activeTab === 'simulator' ? 'active' : ''}`}
                  onClick={() => setActiveTab('simulator')}
                >
                  <Calculator size={15} />
                  <span>Simulasi SHU</span>
                </button>
                <button
                  type="button"
                  className={`preview-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                  onClick={() => setActiveTab('code')}
                >
                  <Code2 size={15} />
                  <span>cooperativeLedger.ts</span>
                </button>
              </div>

              <div className="live-status-indicator">
                <span className="pulsing-dot" />
                <span className="live-text">Live Ledger</span>
              </div>
            </div>

            {/* Tab 1: Financial Dividend Simulator */}
            {activeTab === 'simulator' && (
              <div className="simulator-tab-content">
                <div className="sim-badge-row">
                  <span className="badge-fintech">
                    <Sparkles size={13} className="text-amber-400" />
                    {heroData.previewCard?.badge || 'Smart Ledger & SHU Realtime'}
                  </span>
                  <span className="badge-security">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    {heroData.previewCard?.securityBadge || 'Enkripsi 256-bit'}
                  </span>
                </div>

                <div className="sim-input-group">
                  <div className="sim-label-row">
                    <span className="sim-label">
                      {heroData.previewCard?.depositLabel || 'Simpanan Berjangka'}
                    </span>
                    <span className="sim-val-display">{formatCurrency(depositAmount)}</span>
                  </div>

                  <input
                    type="range"
                    min="5000000"
                    max="100000000"
                    step="5000000"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(Number(e.target.value))}
                    className="sim-slider"
                  />
                  <div className="slider-ticks">
                    <span>{formatCurrency(5000000)}</span>
                    <span>{formatCurrency(50000000)}</span>
                    <span>{formatCurrency(100000000)}</span>
                  </div>
                </div>

                <div className="sim-result-box">
                  <div className="result-metric">
                    <span className="result-metric-label">
                      {heroData.previewCard?.projectedReturn || 'Estimasi SHU Tahunan (12.4%)'}
                    </span>
                    <span className="result-metric-val highlight">
                      +{formatCurrency(estimatedReturn)}
                    </span>
                  </div>
                  <div className="divider-h" />
                  <div className="result-metric">
                    <span className="result-metric-label">Total Akumulasi Akhir Periode</span>
                    <span className="result-metric-val total">{formatCurrency(totalProjected)}</span>
                  </div>
                </div>

                <div className="sim-card-footer">
                  <div className="status-pill">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>{heroData.previewCard?.accountStatus || 'Status: Anggota Terverifikasi'}</span>
                  </div>
                  <a href="#contact" className="btn btn-accent btn-sm">
                    Simulasi Lengkap
                  </a>
                </div>
              </div>
            )}

            {/* Tab 2: TypeScript Ledger Code Preview */}
            {activeTab === 'code' && (
              <div className="code-tab-content">
                <div className="code-meta-row">
                  <span className="code-filename">
                    <Code2 size={14} className="text-blue-400" />
                    cooperativeLedger.ts
                  </span>
                  <button
                    type="button"
                    className="btn-copy-code"
                    onClick={handleCopyCode}
                    title="Salin Kode TypeScript"
                  >
                    {copiedCode ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Salin TS</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="code-pre-block">
                  <code>{codeTsSnippet}</code>
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

