import React, { forwardRef } from 'react'

type Project = {
  id: number
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Портфолио',
    description: 'Мое личное портфолио, чтобы показать проекты и навыки.',
    image: require('../assets/images/bookdragon.png'),
    link: '#project1',
  },
  {
    id: 2,
    title: 'Блог',
    description: 'Платформа для публикации статей и новостей с редактором.',
    image: '/projects/blog.jpg',
    link: '#project2',
  },
  {
    id: 3,
    title: 'Интернет-магазин',
    description: 'Магазин с каталогом товаров, корзиной и оплатой онлайн.',
    image: '/projects/shop.jpg',
    link: '#project3',
  },
  {
    id: 4,
    title: 'Чат-приложение',
    description: 'Реальное время общения с поддержкой групп и эмодзи.',
    image: '/projects/chat.jpg',
    link: '#project4',
  },
  {
    id: 5,
    title: 'Таск-менеджер',
    description: 'Приложение для управления задачами и планирования работы.',
    image: '/projects/tasks.jpg',
    link: '#project5',
  },
]

type ProjectsSectionProps = {
  themeColors: {
    sparkle: string
    textColor: string
  }
}

const ProjectsSection = forwardRef<HTMLDivElement, ProjectsSectionProps>(({ themeColors }, ref) => (
  <section
    ref={ref}
    className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-gray-300"
    style={{ color: themeColors.textColor }}
  >
    <h3
      className="minecraft-font text-3xl font-bold mb-8 border-b border-pink-600 pb-2 select-text drop-shadow-md"
      style={{ color: themeColors.sparkle }}
    >
      Мои проекты
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {projects.map(({ id, title, description, image, link }) => (
        <a
          key={id}
          href={link}
          className="group block rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-200 via-gray-100 to-white transform hover:scale-105 transition-transform duration-300 border-2 border-transparent hover:border-pink-500 cursor-pointer"
          style={{ textDecoration: 'none', color: themeColors.textColor }}
          draggable={false}
        >
          <div className="w-full h-52 overflow-hidden relative rounded-t-xl">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full brightness-90 group-hover:brightness-110 transition duration-500"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50 pointer-events-none rounded-t-xl" />
          </div>
          <div className="p-5 minecraft-font">
            <h4
              className="text-xl font-bold mb-2 text-pink-400 group-hover:text-pink-600 transition-colors"
              style={{ color: themeColors.sparkle }}
            >
              {title}
            </h4>
            <p>{description}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
))

export default ProjectsSection
