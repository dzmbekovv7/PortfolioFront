import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiClock } from 'react-icons/fi'
import languago from '../assets/languago.png'
import ecotravel from '../assets/ecotravel.png'
import smartgarden from '../assets/smartgarden.png'
import fitnesssocial from '../assets/fitnesssocial.png'
import youwatch from '../assets/logo.png'
type Project = {
  id: number
  title: string
  description: string
  image: string
  stack?: string
  launchDate?: string
  role?: string
  link?: string
  github?: string
  warning?: string
  features?: string[]
  credentials?: {
    login: string
    password: string
  }
  status?: string
  year?: string
}


const plannedProjects: Project[] = [
  {
    id: 101,
    title: 'LanguaGO – Smart Language Learning Tracker',
    description: 'Помогает языковым ученикам отслеживать, управлять и анализировать обучение по навыкам чтения, аудирования, письма и разговора с мотивацией и персональными статистиками.',
    image: languago,
    stack: 'NestJS, React, MongoDB',
    launchDate: '2025 Q4',
    features: [
      'JWT-аутентификация',
      'Отслеживание прогресса по 4 навыкам',
      'Дневные и недельные логи с визуализацией',
      'Установка языковых целей и напоминания',
      'Система геймификации: уровни, бейджи и XP',
      'Статистика и аналитика с графиками',
    ],
    status: 'в разработке',
    year: '30.07.2025',
    link: '',
  },
  {
    id: 102,
    title: 'YouWatch - YouTube Language Learner App',
    description: 'Мобильное приложение для изучающих языки, которое подбирает видео по категориям и уровню, позволяет сохранять слова и отслеживать прогресс.',
    image: youwatch,
    stack: 'Flutter, NestJS, MongoDB, Firebase',
    launchDate: '2026 Q1',
    features: [
      'Аутентификация Email/Google/Apple',
      'Персонализированные рекомендации видео',
      'Сохранение и тренировка словарного запаса',
      'Отслеживание времени просмотра и прогресса',
      'Кроссплатформенность',
      'Использование YouTube API',
    ],
    status: 'планируется',
    year: '30.07.2025',
    link: '',
  },
  // Дополнительные три выдуманных проекта для заполнения
  {
    id: 103,
    title: 'EcoTravel Planner',
    description: 'Платформа для планирования экологичных путешествий с рекомендациями и бронированием эко-отелей и транспорта.',
    image: ecotravel,
    stack: 'React, Node.js, PostgreSQL',
    launchDate: '2026 Q3',
    features: ['Персонализированные маршруты', 'Интеграция с картами', 'Отзывы пользователей'],
    status: 'в планах',
    year: '???',
  },
  {
    id: 104,
    title: 'Smart Garden Monitor',
    description: 'IoT система для мониторинга состояния растений и автоматического полива через мобильное приложение.',
    image: smartgarden,
    stack: 'React Native, Raspberry Pi, MQTT',
    launchDate: '2026 Q2',
    features: ['Датчики влажности и температуры', 'Уведомления о состоянии', 'Автоматический полив'],
    status: 'планируется',
    year: '01.10.2025',
  },
  {
    id: 105,
    title: 'Fitness Social Hub',
    description: 'Социальная платформа для обмена тренировками, вызовами и достижениями с друзьями.',
    image: fitnesssocial,
    stack: 'Next.js, Firebase, GraphQL',
    launchDate: '2025 Q4',
    features: ['Профили пользователей', 'Групповые челленджи', 'Чат и обмен медиа'],
    status: 'планируется',
    year: '15.08.2025',
  },
]


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#10172a] via-[#192d4a] to-[#10172a] text-indigo-200 p-8 sm:p-12">
      <h1 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-lg">
        Будущие проекты
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {plannedProjects.map(project => (
          <motion.article
            key={project.id}
            className="bg-[#1e2a47] rounded-2xl shadow-lg border border-indigo-600 hover:shadow-indigo-500 transition-shadow cursor-pointer flex flex-col overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(129, 140, 248, 0.8)' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-54 object-cover rounded-t-2xl"
              draggable={false}
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold mb-3 text-indigo-300">{project.title}</h2>
              <p className="text-indigo-100 flex-grow">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.features?.map((feat, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600 bg-opacity-70 px-3 py-1 rounded-full text-sm font-medium text-indigo-100 select-none"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center text-indigo-400 text-sm">
                {project.year && (
                  <div className="flex items-center gap-1">
                    <FiCalendar />
                    <span>{project.year}</span>
                  </div>
                )}

                {project.status && (
                  <div className="flex items-center gap-1 italic font-semibold text-indigo-300 uppercase tracking-wide">
                    {project.status}
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
