import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { translations, supportedLanguages } from '../data/translations';

const LANGUAGE_STORAGE_KEY = 'selected_language';
const DEFAULT_LANGUAGE = 'id';
const VALID_LANG_CODES = ['id', 'en', 'ar', 'fr'];

const LanguageContext = createContext(null);

/**
 * Mendeteksi bahasa preferensi browser saat aplikasi pertama kali dimuat.
 * Jika preferensi bukan salah satu dari ID, EN, AR, atau FR, otomatis fallback ke 'id'.
 */
const detectInitialLanguage = () => {
  try {
    // 1. Cek penyimpanan lokal pengguna
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && VALID_LANG_CODES.includes(stored)) {
      return stored;
    }

    // 2. Deteksi bahasa browser pengguna
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    
    // Prefix match: 'id-ID' -> 'id', 'en-US' -> 'en', 'ar-SA' -> 'ar', 'fr-FR' -> 'fr'
    const matched = VALID_LANG_CODES.find((code) => browserLang.startsWith(code));
    if (matched) {
      return matched;
    }
  } catch (err) {
    console.warn('Gagal membaca preferensi bahasa browser/localStorage:', err);
  }

  // 3. Fallback default ke Bahasa Indonesia ('id')
  return DEFAULT_LANGUAGE;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(detectInitialLanguage);

  /**
   * Fungsi untuk mengubah bahasa aktif
   * dan menyimpannya secara persisten ke localStorage.
   */
  const changeLanguage = useCallback((code) => {
    const targetCode = VALID_LANG_CODES.includes(code) ? code : DEFAULT_LANGUAGE;
    setLanguageState(targetCode);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, targetCode);
    } catch (err) {
      console.warn('Gagal menyimpan bahasa ke localStorage:', err);
    }
  }, []);

  // Alias setLang sesuai instruksi spesifikasi
  const setLang = changeLanguage;

  /**
   * Mengatur atribut HTML lang & dir (RTL untuk Bahasa Arab, LTR untuk lainnya)
   */
  useEffect(() => {
    const isArabic = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

    if (isArabic) {
      document.documentElement.classList.add('rtl-mode');
    } else {
      document.documentElement.classList.remove('rtl-mode');
    }
  }, [language]);

  /**
   * Helper terjemahan dengan perlindungan fallback bertingkat:
   * Jika ada key yang tidak sengaja hilang pada bahasa aktif,
   * sistem otomatis mengambil dari kamus default ('id') agar tidak throw error undefined!
   */
  const t = useMemo(() => {
    const currentDict = translations[language] || translations[DEFAULT_LANGUAGE];
    const fallbackDict = translations[DEFAULT_LANGUAGE];

    // Proxy atau deep-fallback helper jika dibutuhkan
    return new Proxy(currentDict, {
      get(target, prop) {
        if (prop in target) {
          return target[prop];
        }
        return fallbackDict[prop];
      },
    });
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      changeLanguage,
      setLang, // Alias resmi sesuai requirement
      t,
      supportedLanguages,
      isRTL: language === 'ar',
    }),
    [language, changeLanguage, setLang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

/**
 * Custom Hook untuk konsumsi konteks bahasa
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage harus digunakan di dalam komponen yang dibungkus LanguageProvider');
  }
  return context;
};

export default LanguageContext;

