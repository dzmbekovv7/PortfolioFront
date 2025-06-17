import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase } from 'react-icons/fa'
import { SiExpress, SiTypescript, SiDjango, SiTailwindcss, SiPostgresql, SiJavascript, SiMongodb, SiRedux, SiVite } from 'react-icons/si'

import bookdragon from '../assets/images/bookdragon.png'
import postinkg from '../assets/images/postinkg.png'
import realtime from '../assets/images/realtimechat.png'
import grammar from '../assets/images/grammar.png'
import learnitfree from '../assets/images/learnitfree.png'
import lego from '../assets/images/lego.png'
import salymbekov from '../assets/images/salymbekov.png'
import makeup from '../assets/images/makeup.png'
import dogs from '../assets/images/dogs.png'
import vspools from '../assets/images/vspools.png'
import gre2usa from '../assets/images/gre2usa.png'
import smarthome from '../assets/images/smarthome.png'
import msmoney from '../assets/images/msmoney.png'
import fitness from '../assets/images/fitness.png'
import infopeluang from '../assets/images/infopeluang.png'
import newSound from '../assets/images/101newSound.png'
import admindashboard from '../assets/images/admindashboard.png'
import chatspotfiy from '../assets/images/chatspotify.png'
import spotifyImage from '../assets/images/sportify.png'
type Project = {
  id: number
  title: string
  description: string
  image: string
  stack: string
  link: string
  github: string
  year: number
  role: string
  features: string[]
  demoVideo: string
  status: string
  launchDate?: string
  highlights?: string[]
  credentials?: { login: string; password: string }
  warning?: string
  extraImage?: string
  extraImage2?: string
}


export const projects: Project[] = [
  {
    id: 11,
    title: 'Lego',
    description: 'Минималистичный таск-менеджер с визуальными блоками, вдохновлённый принципами LEGO. Управляйте задачами просто и удобно.',
    image: lego,
    stack: 'React, TS + Vite, Tailwind CSS',
    link: 'https://lego-tawny.vercel.app/',
    github: 'https://github.com/username/lego',
    year: 2023,
    role: 'Fullstack Developer',
    features: [
      'Drag & Drop задачи',
      'Реальное время через Socket.io',
      'Уведомления о дедлайнах',
      'Фильтрация и сортировка задач',
    ],
    demoVideo: 'https://youtu.be/example1',
    status: 'завершён',
  },
    {
    id: 14,
    title: 'InfoPeluangUsaha',
    description:
      'Платформа для предпринимателей, предоставляющая проверенные бизнес-возможности, стратегические партнёрства и рыночную аналитику.',
    image: infopeluang, // Замените на актуальное изображение
    stack: 'React, TS + Vite, Tailwind CSS',
    link: 'https://info-peluang-beryl.vercel.app/',
    github: '',
    year: 2024,
    role: 'Fullstack Developer',
    features: [
      'Каталог бизнес-возможностей',
      'Публикация статей и советов',
      'Поиск агентов и инвесторов',
      'Бесплатная регистрация и доступ к информации',
    ],
    demoVideo: '',
    status: 'в разработке',
  },
{
  id: 16,
  title: 'SpotifyClone',
  description:
    'Мощная музыкальная платформа с современным дизайном в стиле Spotify. Поддерживает воспроизведение музыки, личные плейлисты, админ-панель и чат в реальном времени — всё для полноценного музыкального опыта.',
  image: spotifyImage, // замените на актуальное изображение
  extraImage: admindashboard,
  extraImage2: chatspotfiy,
  stack: 'React, Node.js, TypeScript, MongoDB, Socket.IO',
  link: 'https://spotify-front-tau.vercel.app',
  github: '',
  year: 2024,
  role: 'Fullstack Developer',
  features: [
    'Современный интерфейс, вдохновлённый Spotify',
    'Пользовательская аутентификация и личные аккаунты',
    'Админ-дешборд для управления треками и пользователями',
    'Онлайн-чат в реальном времени с использованием Socket.IO',
    'Воспроизведение музыки и создание плейлистов',
    'Реактивный дизайн, адаптивный под все устройства'
  ],
  demoVideo: '',
  status: 'в разработке',
},

  {
    id: 15,
    title: '101soundMusic',
    description:
      'Музыкальный блог-сайт с новостями, рецензиями, интервью и обзорами музыкальных событий.',
    image: newSound, // Замените на актуальное изображение
    stack: 'React, TS + Vite, Tailwind CSS',
    link: 'https://101new-sound.vercel.app/',
    github: 'https://github.com/username/101soundMusic',
    year: 2024,
    role: 'Frontend Developer',
    features: [
      'Статьи и рецензии о музыке',
      'Современный дизайн с анимациями',
      'Категории и фильтры по жанрам',
      'Адаптивность под мобильные устройства',
    ],
    demoVideo: '',
    status: 'завершён',
  },
  {
    id: 1,
    title: 'Bookdragon',
    description: 'Bookdragon — блог о книгах с рецензиями, подборками и вдохновением для чтения.',
    image: bookdragon,
    stack: 'React, Tailwind CSS',
    link: 'https://book-dragon.vercel.app/',
    github: 'https://github.com/username/bookdragon',
    year: 2022,
    role: 'Frontend Developer',
    features: [
      'Отзывы пользователей',
      'Рейтинги книг',
      'Рекомендации на основе предпочтений',
      'Поиск и фильтрация по жанрам',
    ],
    demoVideo: '',
    status: 'поддержка',
  },
    {
    id: 10,
    title: 'MsMoney',
description: 'Образовательный блог о финансах: от личного бюджета и инвестиций до психологии денег и лайфхаков по экономии.',
    image: msmoney,
    stack: 'React, TS + Vite, Tailwind CSS',
    link: 'https://ms-money.vercel.app/',
    github: 'https://github.com/username/grammar-nerd',
    year: 2023,
    role: 'Frontend Developer',
    features: [
      'Интерактивные тесты',
      'Подсказки и объяснения',
      'Статистика прогресса',
      'Система достижений и наград',
    ],
    demoVideo: 'https://youtu.be/example2',
    status: 'завершён',
  },
    {
    id: 13,
    title: 'Fitness Blog',
description: 'Блог о фитнесе с актуальными статьями, программами тренировок, советами по питанию и современным UI/UX-дизайном.',
    image: fitness,
    stack: 'React, TS + Vite, Tailwind CSS',
    link: 'https://fitness-six-dusky.vercel.app/',
    github: 'https://fitness-six-dusky.vercel.app/',
    year: 2023,
    role: 'Fullstack Developer',
    features: [
      'Интерактивные тесты',
      'Подсказки и объяснения',
      'Статистика прогресса',
      'Система достижений и наград',
    ],
    demoVideo: 'https://youtu.be/example2',
    status: 'завершён',
  },
  {
    id: 10,
    title: 'Grammar Nerd',
    description: 'Интерактивная платформа для изучения грамматики английского с тестами и практикой.',
    image: grammar,
    stack: 'React, TS + Vite, Tailwind CSS',
    link: 'https://grammar-nerd.vercel.app/',
    github: 'https://github.com/username/grammar-nerd',
    year: 2023,
    role: 'Fullstack Developer',
    features: [
      'Интерактивные тесты',
      'Подсказки и объяснения',
      'Статистика прогресса',
      'Система достижений и наград',
    ],
    demoVideo: 'https://youtu.be/example2',
    status: 'завершён',
  },
  {
    id: 2,
    title: 'PostInKG',
    description: 'Платформа для публикации статей и новостей, ориентированная на Кыргызстан.',
    image: postinkg,
    stack: 'React, Node.js, MongoDB, Tailwind CSS',
    link: '',
    github: 'https://github.com/username/postinkg',
    year: 2023,
    role: 'Backend Developer',
    features: [
      'Публикация статей',
      'Модерация контента',
      'Мультимедийные вложения',
      'Поддержка тегов и категорий',
    ],
    demoVideo: '',
    status: 'в разработке',
  },
  {
    id: 3,
    title: 'Salymbekov College',
    description: 'Сайт колледжа с каталогом курсов и формой поступления.',
    image: salymbekov,
    stack: 'React, Tailwind CSS',
    link: 'https://college-gamma.vercel.app/',
    github: '',
    year: 2022,
    role: 'Frontend Developer',
    features: [
      'Каталог курсов',
      'Онлайн-заявка на поступление',
      'Новости и события колледжа',
      'Адаптивный дизайн',
    ],
    demoVideo: '',
    status: 'завершён',
  },
  {
    id: 4,
    title: 'MakeUp',
    description: 'Интерактивный сайт для любителей макияжа с чатами и персональными рекомендациями.',
    image: makeup,
    stack: 'React, Tailwind CSS',
    link: 'https://make-up-bay.vercel.app',
    github: 'https://github.com/username/makeup',
    year: 2023,
    role: 'Fullstack Developer',
    features: [
      'Чаты с экспертами',
      'Персональные рекомендации',
      'Лайв поддержка',
      'Галерея образов',
    ],
    demoVideo: 'https://youtu.be/example3',
    status: 'поддержка',
  },
  {
    id: 5,
    title: 'SmartHome',
    description: 'Система умного дома с контролем освещения, температуры и безопасности.',
    image: smarthome,
    stack: 'React, Django REST, Machine Learning, Tailwind CSS',
    link: 'https://smart-home-front.vercel.app',
    credentials: {
      login: 'testuser@example.com',
      password: 'Test1234',
    },
    warning: 'Проект находится в бета-версии — возможны ошибки.',
    github: 'https://github.com/username/smarthome',
    year: 2023,
    role: 'Fullstack Developer',
    features: [
      'Контроль освещения',
      'Мониторинг температуры',
      'Система безопасности',
      'Мобильное приложение',
    ],
    demoVideo: '',
    status: 'бета',
  },
  {
    id: 6,
    title: 'GRE2USA',
    description: 'Помощник для подготовки к GRE и поступлению в американские вузы.',
    image: gre2usa,
    stack: 'React,  Tailwind CSS',
    link: 'https://usa-mu-opal.vercel.app',
    github: 'https://github.com/username/gre2usa',
    year: 2022,
    role: 'Frontend Developer',
    features: [
      'Тесты и тренировочные задания',
      'Советы по поступлению',
      'Отслеживание прогресса',
    ],
    demoVideo: '',
    status: 'поддержка',
  },
  {
    id: 7,
    title: 'VSPools',
    description: 'Сервис для бронирования бассейнов и спортивных площадок с отзывами и онлайн-оплатой.',
    image: vspools,
    stack: 'React, tailwind CSS',
    link: 'https://v-spools.vercel.app',
    github: 'https://github.com/username/vspools',
    year: 2023,
    role: 'Fullstack Developer',
    features: [
      'Онлайн-бронирование',
      'Отзывы пользователей',
      'Календарь занятости',
      'Онлайн-оплата',
    ],
    demoVideo: '',
    status: 'завершён',
  },
  {
    id: 8,
    title: 'LearnITFree',
    description: 'Образовательная платформа с бесплатными курсами по программированию и дизайну.',
    image: learnitfree,
    stack: 'React, Tailwind CSS',
    link: 'https://learn-free-eight.vercel.app',
    github: 'https://github.com/username/learnitfree',
    year: 2023,
    role: 'Fullstack Developer',
    features: [
      'Каталог курсов',
      'Видео-лекции',
      'Тестирование знаний',
      'Форум для обсуждений',
    ],
    demoVideo: '',
    status: 'поддержка',
  },
  {
    id: 9,
    title: 'DogsTraining',
    description: 'Платформа для обучения и дрессировки собак с видеоуроками и трекером прогресса.',
    image: dogs,
    stack: 'React, Tailwind CSS',
    link: 'https://dogstraining.onrender.com',
    github: 'https://github.com/username/dogstraining',
    year: 2023,
    role: 'Fullstack Developer',
    features: [
      'Видео уроки',
      'Планы тренировок',
      'Трекер прогресса',
      'Советы экспертов',
    ],
    demoVideo: '',
    status: 'завершён',
  },
  {
    id: 12,
    title: 'Realtime Chat',
    description: 'Современный мессенджер с групповыми чатами, эмодзи и уведомлениями в реальном времени.',
    image: realtime,
    stack: 'React, Node.js, Socket.io, Tailwind CSS',
    link: 'https://real-time-front-one.vercel.app/',
    github: 'https://github.com/username/realtime-chat',
    credentials: {
      login: 'user@mail.com',
      password: 'user1234',
    },
    year: 2023,
    role: 'Fullstack Developer',
    features: [
      'Групповые чаты',
      'Поддержка эмодзи',
      'Push-уведомления',
      'История сообщений',
    ],
    demoVideo: '',
    status: 'поддержка',
  },
];


// Массив навыков
export const skills = [
  { name: 'JavaScript', icon: <SiJavascript color="yellow" size={28} /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={28} /> },
  { name: 'React', icon: <FaReact color="#61DAFB" size={28} /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" size={28} /> },
  { name: 'Express', icon: <SiExpress color="#000000" size={28} /> },
  { name: 'Python', icon: <FaPython color="#3776AB" size={28} /> },
  { name: 'Django', icon: <SiDjango color="#092E20" size={28} /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss color="#38B2AC" size={28} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" size={28} /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={28} /> },
  { name: 'Docker', icon: <FaDocker color="#2496ED" size={28} /> },
  { name: 'Git', icon: <FaGitAlt color="#F05032" size={28} /> },
  { name: 'Redux', icon: <SiRedux color="#764ABC" size={28} /> },
  { name: 'Vite', icon: <SiVite color="#646CFF" size={28} /> },
  { name: 'EJS', icon: <FaDatabase color="#a91e50" size={28} /> },
]
