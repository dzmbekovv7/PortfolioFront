type ExperienceSectionProps = {
  themeColors: {
    sparkle: string
    textColor: string
  }
}

const ExperienceSection = ({ themeColors }: ExperienceSectionProps) => (
  <section
    className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-gray-300 minecraft-font"
    style={{ color: themeColors.textColor }}
  >
    <h3
      className="text-2xl font-bold mb-5 select-text drop-shadow-md"
      style={{ color: themeColors.sparkle }}
    >
      Опыт работы в IT
    </h3>
    <ul className="space-y-6 list-disc list-inside">
      <li>
        <strong style={{ color: themeColors.sparkle }}>Компания 1:</strong> Веб-разработчик (фронтенд), 2023–2024
      </li>
      <li>
        <strong style={{ color: themeColors.sparkle }}>Компания 2:</strong> Стажер backend, 2022–2023
      </li>
      <li>
        <strong style={{ color: themeColors.sparkle }}>Фриланс:</strong> Разработка сайтов, 2021–настоящее время
      </li>
    </ul>
  </section>
)

export default ExperienceSection
