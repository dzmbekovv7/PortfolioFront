import { useEffect, useState } from 'react'
import anime from 'animejs/lib/anime.es.js'
import Header from './components/Header.tsx'
import './App.css'
import MainPage from './pages/Main.tsx'
import { Toaster } from 'react-hot-toast';
import {  Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage.tsx'
import ProjectDetailPage from './pages/DetailPage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
type ThemeName = 'blue' | 'orange' | 'purple' | 'green' | 'red' | 'pink';

const themes: Record<ThemeName, {
  bg: string;
  lines: string[];
  sparkle: string;
  flash: string;
  textGradient: string;
  shadowColor: string;
    textColor: string;       // новый
  backgroundFrom: string;  // новый
  backgroundTo: string;    // новый
}> = {
  blue: {
    bg: 'bg-gradient-to-b from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd]',
    lines: ['rgba(14,165,233,0.3)', 'rgba(59,130,246,0.6)'],
    sparkle: '#0ea5e9',
    flash: '#3b82f6',
    textGradient: 'from-[#3b82f6] via-[#06b6d4] to-[#0ea5e9]',
    shadowColor: 'rgba(14,165,233,0.6)',
        textColor: '#3b82f6',            // добавил подходящий цвет текста (первый из градиента)
    backgroundFrom: '#f0f9ff',       // взял из bg градиента
    backgroundTo: '#bae6fd'          // взял из bg градиента
  },
  orange: {
    bg: 'bg-gradient-to-b from-[#fff7ed] via-[#ffedd5] to-[#fed7aa]',
    lines: ['rgba(249,115,22,0.3)', 'rgba(251,191,36,0.6)'],
    sparkle: '#f97316',
    flash: '#fb923c',
    textGradient: 'from-[#f97316] via-[#fb923c] to-[#f59e0b]',
    shadowColor: 'rgba(251,191,36,0.6)',
        textColor: '#f97316',
    backgroundFrom: '#fff7ed',
    backgroundTo: '#fed7aa'
  },
  purple: {
    bg: 'bg-gradient-to-b from-[#faf5ff] via-[#e9d5ff] to-[#d8b4fe]',
    lines: ['rgba(139,92,246,0.3)', 'rgba(167,139,250,0.6)'],
    sparkle: '#a78bfa',
    flash: '#8b5cf6',
    textGradient: 'from-[#8b5cf6] via-[#a78bfa] to-[#c4b5fd]',
    shadowColor: 'rgba(139,92,246,0.6)',
        textColor: '#8b5cf6',
    backgroundFrom: '#faf5ff',
    backgroundTo: '#d8b4fe'
  },
    green: {
    bg: 'bg-gradient-to-b from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0]',
    lines: ['rgba(16,185,129,0.3)', 'rgba(5,150,105,0.6)'],
    sparkle: '#10b981',
    flash: '#059669',
    textGradient: 'from-[#10b981] via-[#34d399] to-[#6ee7b7]',
    shadowColor: 'rgba(16,185,129,0.6)',
        textColor: '#10b981',
    backgroundFrom: '#ecfdf5',
    backgroundTo: '#a7f3d0'
  },
  red: {
    bg: 'bg-gradient-to-b from-[#fef2f2] via-[#fecaca] to-[#fca5a5]',
    lines: ['rgba(239,68,68,0.3)', 'rgba(220,38,38,0.6)'],
    sparkle: '#ef4444',
    flash: '#dc2626',
    textGradient: 'from-[#ef4444] via-[#f87171] to-[#fca5a5]',
    shadowColor: 'rgba(239,68,68,0.6)',
        textColor: '#ef4444',
    backgroundFrom: '#fef2f2',
    backgroundTo: '#fca5a5'
  },
  pink: {
    bg: 'bg-gradient-to-b from-[#fdf4ff] via-[#fae8ff] to-[#fbcfe8]',
    lines: ['rgba(236,72,153,0.3)', 'rgba(219,39,119,0.6)'],
    sparkle: '#ec4899',
    flash: '#db2777',
    textGradient: 'from-[#ec4899] via-[#f472b6] to-[#f9a8d4]',
    shadowColor: 'rgba(236,72,153,0.6)',
        textColor: '#ec4899',
    backgroundFrom: '#fdf4ff',
    backgroundTo: '#fbcfe8'
  }
}

export default function App() {
  const [theme, setTheme] = useState<ThemeName>('blue')

  useEffect(() => {
    anime({
      targets: '.anime-line',
      translateX: [
        { value: '-130%', duration: 0 },
        { value: '130%', duration: 4000 }
      ],
      opacity: [
        { value: 0.15, duration: 0 },
        { value: 0.8, duration: 2000 },
        { value: 0.15, duration: 2000 }
      ],
      easing: 'easeInOutSine',
      loop: true,
      delay: anime.stagger(350),
    })

    anime({
      targets: '.sparkle',
      scale: [
        { value: 0, duration: 0 },
        { value: 2, duration: 1000 },
        { value: 0, duration: 800 }
      ],
      opacity: [
        { value: 0, duration: 0 },
        { value: 1, duration: 500 },
        { value: 0, duration: 800 }
      ],
      easing: 'easeOutCubic',
      loop: true,
      delay: anime.stagger(600),
    })

    anime({
      targets: '.flash',
      scale: [
        { value: 0, duration: 0 },
        { value: 4, duration: 2000 },
        { value: 0, duration: 2000 }
      ],
      opacity: [
        { value: 0.6, duration: 0 },
        { value: 0, duration: 4000 }
      ],
      easing: 'easeOutExpo',
      loop: true,
      delay: anime.stagger(1000),
    })

    anime({
      targets: 'h1.main-title',
      textShadow: [
        { value: `0 0 10px ${themes[theme].shadowColor}, 0 0 20px ${themes[theme].shadowColor}`, duration: 1500 },
        { value: `0 0 20px ${themes[theme].shadowColor}, 0 0 30px ${themes[theme].shadowColor}`, duration: 1500 }
      ],
      easing: 'easeInOutSine',
      loop: true,
    })
  }, [theme])

  return (
    <div className={`${themes[theme].bg} min-h-screen relative overflow-hidden`}>

      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="anime-line fixed h-[4px] rounded-full opacity-40 pointer-events-none"
          style={{
            top: `${i * 90 + 80}px`,
            width: '180%',
            background: `linear-gradient(90deg, ${themes[theme].lines[0]} 0%, ${themes[theme].lines[1]} 50%, ${themes[theme].lines[0]} 100%)`,
            transform: `rotate(${i % 2 === 0 ? -4 : 4}deg)`,
            left: '-40%'
          }}
        ></div>
      ))}

      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="sparkle fixed w-6 h-6 rounded-full opacity-0 blur-lg pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: themes[theme].sparkle,
            boxShadow: `0 0 15px ${themes[theme].sparkle}, 0 0 25px ${themes[theme].sparkle}`
          }}
        ></div>
      ))}

      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="flash fixed w-16 h-16 rounded-full opacity-20 pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: themes[theme].flash,
            boxShadow: `0 0 50px ${themes[theme].flash}, 0 0 80px ${themes[theme].flash}`
          }}
        ></div>
      ))}

      {/* Новые вау-анимации: двигающиеся круги */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`circle-${i}`}
          className="absolute w-[30px] h-[30px] rounded-full blur-2xl opacity-40 animate-pulse pointer-events-none"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            backgroundColor: themes[theme].sparkle
          }}
        ></div>
      ))}

      <div className="max-w-6xl w-full mt-[40px] mx-auto bg-white/20 backdrop-blur-md rounded-xl border border-white/40 shadow-xl overflow-hidden flex flex-col min-h-[80vh]">
        <Header theme={theme} setTheme={setTheme} />

          <Routes>
            <Route
              path="/"
              element={
     <MainPage
  themeColors={{
    shadowColor: themes[theme].shadowColor,
    sparkle: themes[theme].sparkle,
    textColor: themes[theme].textColor,
    backgroundFrom: themes[theme].backgroundFrom,
    backgroundTo: themes[theme].backgroundTo,
  }}
/>

              }
            />
            <Route path="/projects/:id" element={<ProjectDetailPage 
      themeColors={{
        shadowColor: themes[theme].shadowColor,
        sparkle: themes[theme].sparkle,
        textColor: themes[theme].textColor,
        backgroundFrom: themes[theme].backgroundFrom,
        backgroundTo: themes[theme].backgroundTo,
      }} 
    />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path='/contacts' element={
              <ContactPage 
                 themeColors={{
        shadowColor: themes[theme].shadowColor,
        sparkle: themes[theme].sparkle,
        textColor: themes[theme].textColor,
        backgroundFrom: themes[theme].backgroundFrom,
        backgroundTo: themes[theme].backgroundTo,
      }} 
            ></ContactPage>} ></Route>
            <Route path='/blog' element={<BlogPage/>}></Route>
          </Routes>
        </div>

        <Toaster position="top-center" />
    </div>
  )
}