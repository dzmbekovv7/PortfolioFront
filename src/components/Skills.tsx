import React from 'react'

type SkillsSectionProps = {
  themeColors: {
    sparkle: string
    textColor: string
  }
}

const skills = [
  'JavaScript / TypeScript',
  'React / Redux',
  'Node.js / Express',
  'Python / Django',
  'HTML / CSS / Tailwind',
  'PostgreSQL / MongoDB',
  'Git / GitHub',
]

const SkillsSection = ({ themeColors }: SkillsSectionProps) => (
  <section
    className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-gray-300 minecraft-font"
    style={{ color: themeColors.textColor }}
  >
    <h3
      className="text-2xl font-bold mb-5 select-text drop-shadow-md"
      style={{ color: themeColors.sparkle }}
    >
      Навыки
    </h3>
    <ul className="list-disc list-inside space-y-2">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </section>
)

export default SkillsSection
