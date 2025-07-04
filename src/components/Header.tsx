import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type ThemeName = 'blue' | 'orange' | 'purple' | 'green' | 'red' | 'pink';

const themes: Record<ThemeName, { color1: string; color2: string }> = {
  blue: { color1: 'rgba(14,165,233,0.8)', color2: 'rgba(59,130,246,1)' },
  orange: { color1: 'rgba(249,115,22,0.8)', color2: 'rgba(251,191,36,1)' },
  purple: { color1: 'rgba(139,92,246,0.8)', color2: 'rgba(167,139,250,1)' },
  green: { color1: 'rgba(16,185,129,0.8)', color2: 'rgba(5,150,105,1)' },
  red: { color1: 'rgba(239,68,68,0.8)', color2: 'rgba(220,38,38,1)' },
  pink: { color1: 'rgba(236,72,153,0.8)', color2: 'rgba(219,39,119,1)' }
};

interface HeaderProps {
  theme: ThemeName;
  setTheme: React.Dispatch<React.SetStateAction<ThemeName>>;
}

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contacts' },
];

export default function Header({ theme, setTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header className="relative flex flex-col items-center px-6 py-6 bg-white bg-opacity-30 backdrop-blur-md rounded-t-lg border-b border-white/30 select-none shadow-md space-y-6 z-50">

      {/* Custom Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .minecraft-font {
          font-family: 'Press Start 2P', cursive;
          letter-spacing: 0.05em;
        }
      `}</style>

      {/* Top Row: Themes and Burger */}
      <div className="w-full flex justify-between items-center relative">
        {/* Left Themes */}
        <div className="hidden sm:flex space-x-2">
          {Object.entries(themes).slice(0, 3).map(([key, value]) => {
            const themeKey = key as ThemeName;
            return (
              <button
                key={key}
                onClick={() => setTheme(themeKey)}
                aria-label={`Switch to ${key} theme`}
                className={`w-10 h-10 rounded-full border-4 transition-all duration-300 transform hover:scale-110 ${
                  theme === themeKey ? 'border-white shadow-xl' : 'border-transparent hover:border-gray-400 hover:shadow-md'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${value.color1}, ${value.color2})`,
                  boxShadow: theme === themeKey ? `0 0 12px ${value.color1}, 0 0 24px ${value.color2}` : 'none',
                }}
              />
            );
          })}
        </div>

        {/* Center Title */}
        <h1
          className="text-2xl sm:text-3xl minecraft-font font-bold bg-clip-text text-transparent absolute left-1/2 transform -translate-x-1/2 z-40"
          style={{
            backgroundImage: `linear-gradient(45deg, ${themes[theme].color1}, ${themes[theme].color2})`,
          }}
        >
          Portfolio
        </h1>

        {/* Right Themes */}
        <div className="hidden sm:flex space-x-2">
          {Object.entries(themes).slice(3, 6).map(([key, value]) => {
            const themeKey = key as ThemeName;
            return (
              <button
                key={key}
                onClick={() => setTheme(themeKey)}
                aria-label={`Switch to ${key} theme`}
                className={`w-10 h-10 rounded-full border-4 transition-all duration-300 transform hover:scale-110 ${
                  theme === themeKey ? 'border-white shadow-xl' : 'border-transparent hover:border-gray-400 hover:shadow-md'
                }`}
                style={{
                  background: `linear-gradient(135deg, ${value.color1}, ${value.color2})`,
                  boxShadow: theme === themeKey ? `0 0 12px ${value.color1}, 0 0 24px ${value.color2}` : 'none',
                }}
              />
            );
          })}
        </div>

        {/* Burger Menu */}
        <div className="sm:hidden flex items-center z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex flex-col justify-center items-center w-10 h-10">
            <div className={`w-6 h-0.5 bg-black my-0.5 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-black my-0.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-black my-0.5 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="mt-8 hidden sm:block">
        <ul className="flex gap-12 justify-center">
          {LINKS.map((item, index) => (
            <Link key={item.label} to={item.href}>
              <li className="group relative cursor-pointer">
                <span className={`font-bold text-lg tracking-wide transition-all duration-300 ${
                  index === 0 ? 'text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600' :
                  index === 1 ? 'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600' :
                  'text-gray-700 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-500'
                }`}>
                  {item.label}
                </span>
                <div className={`absolute -bottom-2 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ${
                  index === 0 ? 'bg-gradient-to-r from-indigo-500 to-purple-500' :
                  index === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                  'bg-gradient-to-r from-pink-500 to-red-500'
                }`} />
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Mobile Fullscreen Menu */}
{menuOpen && (
  <div className="absolute left-0 top-20 w-full h-[calc(100vh-100%)] bg-white z-40 flex flex-col items-center px-6 py-10 space-y-12 animate-fadeIn overflow-y-auto">

    {/* Навигационные ссылки */}
    <nav className="flex flex-col items-center space-y-8">
      {LINKS.map((item) => (
        <Link
          key={item.label}
          to={item.href}
          onClick={() => setMenuOpen(false)}
          className="text-3xl font-extrabold text-gray-800 hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 transition duration-300"
        >
          {item.label}
        </Link>
      ))}
    </nav>

    {/* Блоки "About Me" */}
    <div className="w-full flex flex-wrap justify-center gap-6 pt-4">
      {[
        {
          text: 'Frontend & Backend Developer with a passion for design and performance.',
          colors: 'from-indigo-50 to-purple-50',
          border: 'border-indigo-100',
          hoverBorder: 'hover:border-indigo-200',
          hoverShadow: 'hover:shadow-indigo-100/50',
          iconBg: 'from-indigo-500 to-purple-500',
          textColor: 'text-indigo-700 hover:text-indigo-800'
        },
        {
          text: 'Building modern and responsive web apps with React, Node.js, and more.',
          colors: 'from-purple-50 to-pink-50',
          border: 'border-purple-100',
          hoverBorder: 'hover:border-purple-200',
          hoverShadow: 'hover:shadow-purple-100/50',
          iconBg: 'from-purple-500 to-pink-500',
          textColor: 'text-purple-700 hover:text-purple-800'
        },
        {
          text: 'Loves clean UI, smooth UX, and solving real-world problems with code.',
          colors: 'from-blue-50 to-indigo-50',
          border: 'border-blue-100',
          hoverBorder: 'hover:border-blue-200',
          hoverShadow: 'hover:shadow-blue-100/50',
          iconBg: 'from-blue-500 to-indigo-500',
          textColor: 'text-blue-700 hover:text-blue-800'
        }
      ].map((item, index) => (
        <div
          key={index}
          className={`group w-full sm:w-[300px] px-6 py-4 rounded-xl border transition-all duration-300 bg-gradient-to-r ${item.colors} ${item.border} ${item.hoverBorder} hover:shadow-lg ${item.hoverShadow} hover:scale-105 hover:-translate-y-1`}
        >
          <div className="flex items-start space-x-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br ${item.iconBg}`}>
              {index + 1}
            </div>
            <p className={`text-sm font-medium ${item.textColor} transition-colors duration-300`}>
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}


      {/* About Me - Hidden on Mobile */}
      <div className="hidden sm:flex mt-10 w-full flex-wrap justify-center gap-6">
        {[
          {
            text: 'Frontend & Backend Developer with a passion for design and performance.',
            colors: 'from-indigo-50 to-purple-50',
            border: 'border-indigo-100',
            hoverBorder: 'hover:border-indigo-200',
            hoverShadow: 'hover:shadow-indigo-100/50',
            iconBg: 'from-indigo-500 to-purple-500',
            textColor: 'text-indigo-700 hover:text-indigo-800'
          },
          {
            text: 'Building modern and responsive web apps with React, Node.js, and more.',
            colors: 'from-purple-50 to-pink-50',
            border: 'border-purple-100',
            hoverBorder: 'hover:border-purple-200',
            hoverShadow: 'hover:shadow-purple-100/50',
            iconBg: 'from-purple-500 to-pink-500',
            textColor: 'text-purple-700 hover:text-purple-800'
          },
          {
            text: 'Loves clean UI, smooth UX, and solving real-world problems with code.',
            colors: 'from-blue-50 to-indigo-50',
            border: 'border-blue-100',
            hoverBorder: 'hover:border-blue-200',
            hoverShadow: 'hover:shadow-blue-100/50',
            iconBg: 'from-blue-500 to-indigo-500',
            textColor: 'text-blue-700 hover:text-blue-800'
          }
        ].map((item, index) => (
          <div
            key={index}
            className={`group w-full sm:w-[300px] px-6 py-4 rounded-xl border transition-all duration-300 bg-gradient-to-r ${item.colors} ${item.border} ${item.hoverBorder} group-hover:shadow-lg ${item.hoverShadow} group-hover:scale-105 group-hover:-translate-y-1`}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br ${item.iconBg}`}>
                {index + 1}
              </div>
              <p className={`text-sm font-medium ${item.textColor} transition-colors duration-300`}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
