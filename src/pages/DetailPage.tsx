import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projectsAndSkills'
import { motion } from 'framer-motion'
import { FiAlertTriangle, FiArrowLeft, FiCalendar, FiUser } from 'react-icons/fi'

type ThemeColors = {
  shadowColor: string
  sparkle: string
  textColor: string
  backgroundFrom: string
  backgroundTo: string
}

type ProjectDetailPageProps = {
  themeColors: ThemeColors
}

export default function ProjectDetailPage({ themeColors }: ProjectDetailPageProps) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const projectId = Number(id)
  const project = projects.find(p => p.id === projectId)
console.log(project)
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-red-400 p-6">
        <h1 className="text-4xl font-bold mb-6">Проект не найден</h1>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-red-700 rounded-lg text-white hover:bg-red-800 transition-colors duration-300 flex items-center gap-2"
        >
          <FiArrowLeft size={20} />
          Назад
        </button>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen relative bg-gradient-to-tr from-[#0a122a] via-[#162b45] to-[#0a122a] overflow-auto p-6 sm:p-12 flex flex-col"
      style={{ color: themeColors.textColor }}
    >
      {/* Навбар с кнопкой назад */}
      <nav className="max-w-6xl mx-auto flex items-center mb-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-pink-500 transition"
        >
          <FiArrowLeft size={20} />
          Назад к проектам
        </button>
      </nav>

      {/* Основной контент - две колонки */}
      <main className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Левая часть */}
        <section className="lg:w-2/3 flex flex-col items-center bg-[#14253dcc] backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-lg">
          <motion.h1
            className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {project.title}
          </motion.h1>

          {/* Дополнительные метаданные */}
          <div className="flex gap-6 mb-8 text-indigo-200 text-sm sm:text-base">
            {project.launchDate && (
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>Запуск: {project.launchDate}</span>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2">
                <FiUser />
                <span>Роль: {project.role}</span>
              </div>
            )}
          </div>

          <motion.div
            className="w-full rounded-lg overflow-hidden border-4 border-indigo-600 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover max-h-[400px]"
              draggable={false}
            />
          </motion.div>

          <motion.p
            className="mt-8 text-lg leading-relaxed text-white/90 font-light text-center max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.description}
          </motion.p>

{project.features && (
  <motion.div
    className="
      mt-8 
      max-w-3xl 
      bg-indigo-900 bg-opacity-80 
      rounded-2xl 
      p-6 
      text-indigo-100 
      shadow-lg 
      flex 
      flex-wrap 
      justify-center 
      gap-6
      "
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
  >
    <h3 className="w-full text-center text-2xl mb-6 font-semibold text-indigo-300">
      Основные особенности
    </h3>
    {project.features.map((point: string, i: number) => (
      <span
        key={i}
        className="
          text-lg 
          px-4 py-2 
          bg-gradient-to-r from-indigo-700 to-indigo-600 
          rounded-full 
          shadow-[0_0_8px_rgba(99,102,241,0.8)] 
          cursor-default 
          select-none
          whitespace-nowrap
          relative
        "
      >
        {point}
        {/* Добавим разделитель, кроме последнего */}
        {i !== project.features.length - 1 && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 h-6 border-r border-indigo-400 opacity-50"></span>
        )}
      </span>
    ))}
  </motion.div>
)}



          {project.warning && (
            <motion.div
              className="mt-8 bg-yellow-900 bg-opacity-90 border-l-8 border-yellow-400 rounded-md p-6 flex items-center gap-4 text-yellow-200 max-w-3xl shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <FiAlertTriangle size={28} />
              <p className="text-base">{project.warning}</p>
            </motion.div>
          )}
        </section>

        {/* Правая часть — технологии, креды, кнопки */}
        <aside className="lg:w-1/3 flex flex-col gap-10">
          {/* Технологии */}
          {project.stack && (
            <motion.div
              className="bg-[#1f2f4a] rounded-xl p-6 shadow-lg border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-indigo-300 text-center">Технологии</h2>
              <ul className="flex flex-wrap gap-3 justify-center">
                {project.stack.split(', ').map((tech, i) => (
                  <motion.li
                    key={i}
                    className="px-5 py-2 bg-gradient-to-tr from-indigo-400 to-purple-500 text-white rounded-full font-semibold shadow-md cursor-default select-none"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(99,102,241,0.8)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Учётные данные */}
          {project.credentials && (
            <motion.div
              className="bg-indigo-900 bg-opacity-70 rounded-xl p-6 border border-indigo-700 shadow-inner text-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-center">Данные для входа</h3>
              <p className="mb-2 text-center">
                <strong>Логин:</strong> {project.credentials.login}
              </p>
              <p className="text-center">
                <strong>Пароль:</strong> {project.credentials.password}
              </p>
            </motion.div>
          )}

          {/* Кнопка перехода */}
          {project.link ? (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-8 py-4 rounded-xl font-semibold text-white shadow-lg"
              style={{ backgroundColor: themeColors.shadowColor }}
              whileHover={{
                scale: 1.05,
                backgroundColor: themeColors.sparkle,
                boxShadow: `0 0 20px ${themeColors.sparkle}`,
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 250, delay: 1 }}
            >
              Перейти на сайт проекта →
            </motion.a>
          ) : (
            <p className="italic text-gray-400 text-center">Ссылка на проект отсутствует</p>
          )}

          {/* Кнопка GitHub */}
          {/* {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 rounded-xl text-white hover:bg-gray-700 shadow-md transition"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <FiGithub size={20} />
              Исходный код на GitHub
            </motion.a>
          )} */}
        </aside>
      </main>
    </div>
  )
}
