import { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'
import myphoto from '../assets/myphoto.jpg'
import { Link } from 'react-router-dom'
import { projects, skills } from '../data/projectsAndSkills'
import VisualDecorations from '../components/VisualDecoration'

type ThemeColors = {
  shadowColor: string
  sparkle: string
  textColor: string 
  backgroundFrom: string
  backgroundTo: string
}

type MainPageProps = {
  themeColors: ThemeColors
}

export default function MainPage({ themeColors }: MainPageProps) {
  const profileRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // Анимация появления профиля
    anime({
      targets: profileRef.current,
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1000,
      easing: 'easeOutQuad',
    })

    // Анимация проектов с задержкой
    anime({
      targets: projectsRef.current?.querySelectorAll('a'),
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(150),
      duration: 800,
      easing: 'easeOutQuad',
    })

    // Анимация кнопки отправки
    anime({
      targets: contactRef.current?.querySelector('button'),
      scale: [1, 1.05, 1],
      duration: 3000,
      loop: true,
      easing: 'easeInOutSine',
    })
  }, [])

  return (
    <>
      {/* Подключение шрифта Minecraft (Press Start 2P) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .minecraft-font {
          font-family: 'Press Start 2P', cursive;
          letter-spacing: 0.05em;
          user-select: none;
        }
      `}</style>

      <div
        className="max-w-7xl mx-auto p-6 min-h-screen"
        style={{
          background: `linear-gradient(135deg, ${themeColors.backgroundFrom}, ${themeColors.backgroundTo})`,
          color: themeColors.textColor,
        }}
      >
           <VisualDecorations
        sparkleColor={themeColors.sparkle}
        shadowColor={themeColors.shadowColor}
      />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Левая колонка - Основной контент */}
          <div className="md:col-span-8 space-y-14">

      <section
  ref={profileRef}
  className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6 md:gap-8 shadow-lg border border-gray-300 w-full max-w-4xl mx-auto"
  style={{
    color: themeColors.sparkle,
    textShadow: `0 0 8px ${themeColors.shadowColor}`,
  }}
>
  <div className="flex-shrink-0">
    <img
      src={myphoto}
      alt="My Photo"
      className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-gradient-to-tr from-pink-600 to-purple-600 shadow-xl hover:scale-105 transition-transform duration-300 cursor-default"
      draggable={false}
    />
  </div>

  <div className="flex flex-col items-center md:items-start justify-center space-y-2 sm:space-y-3 minecraft-font text-center md:text-left">
    <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold select-text drop-shadow-lg" style={{ color: themeColors.sparkle }}>
      Dzhumabekov Aziret
    </h1>
    <h2 className="text-sm sm:text-base md:text-lg font-semibold select-text" style={{ color: themeColors.sparkle }}>
      FullStack Developer
    </h2>
    <p className="text-xs sm:text-sm select-text tracking-wider" style={{ color: themeColors.textColor }}>
      aziretdzumabekov19@gmail.com
    </p>
    <p className="text-xs sm:text-sm select-text" style={{ color: themeColors.textColor }}>
      Возраст: 16 лет
    </p>
  </div>
</section>

            {/* Проекты */}
            <section
              ref={projectsRef}
              className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-gray-300"
              style={{ color: themeColors.textColor }}
            >
              <h3 className="minecraft-font text-3xl font-bold mb-8 border-b border-pink-600 pb-2 select-text drop-shadow-md" style={{ color: themeColors.sparkle }}>
                Мои проекты
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map(({ id, title, description, image }) => (
                  <Link
                  key={id}
  to={`/projects/${id}`}
                    className="group block rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-200 via-gray-100 to-white transform hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-pink-500 cursor-pointer"
                    style={{ textDecoration: 'none', color: themeColors.textColor }}
                    draggable={false}
                  >
                    <div className="w-full h-wull overflow-hidden relative rounded-t-xl">
                      <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full brightness-90 group-hover:brightness-110 transition duration-500"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50 pointer-events-none rounded-t-xl" />
                    </div>
                    <div className="p-5 ">
                      <h4 className="text-xl font-bold mb-2 text-pink-400 group-hover:text-pink-600 transition-colors" style={{ color: themeColors.sparkle }}>
                        {title}
                      </h4>
                      <p>{description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Правая колонка */}
          <div className="md:col-span-4 space-y-12">

            {/* Опыт работы в IT */}
            <section
              className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-gray-300 "
              style={{ color: themeColors.textColor }}
            >
              <h3 className="text-2xl font-bold mb-5 select-text drop-shadow-md minecraft-font" style={{ color: themeColors.sparkle }}>
                Опыт работы в IT
              </h3>
          <ul className="space-y-6 list-disc list-inside"> 
  <li>
    <strong style={{ color: themeColors.sparkle }}>Geeks (Компания 1):</strong> Ментор по backend-разработке, 2024
  </li>
  <li>
    <strong style={{ color: themeColors.sparkle }}>M205 (Компания 2):</strong> Фулстек-разработчик, 2024–2025 (неофициальная компания)
  </li>
  <li>
    <strong style={{ color: themeColors.sparkle }}>Фриланс:</strong> Разработка проектов на заказ, настоящее время
  </li>
</ul>

            </section>

<section
  className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-gray-300 minecraft-font"
  style={{ color: themeColors.textColor }}
>
  <h3 className="text-2xl font-bold mb-5 select-text drop-shadow-md" style={{ color: themeColors.sparkle }}>
    Навыки
  </h3>
  <div className="flex flex-col gap-4 max-w-xs">
    {skills.map(({ name, icon }) => (
      <div
        key={name}
        className="flex items-center gap-3 text-pink-900 px-4 py-2 rounded-full text-sm font-semibold" style={{ color: themeColors.sparkle }}
      >
        {icon}
        <span>{name}</span>
      </div>
    ))}
  </div>
</section>

          </div>

        </div>
      </div>
    </>
  )
}
