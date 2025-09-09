import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <div className="flex gap-2 items-center text-xs md:text-sm">
      <button
        onClick={() => changeLang('en')}
        className={lang === 'en' ? 'font-bold underline' : ''}
      >
        English
      </button>
      |
      <button
        onClick={() => changeLang('hi')}
        className={lang === 'hi' ? 'font-bold underline' : ''}
      >
        हिंदी
      </button>
    </div>
  );
}