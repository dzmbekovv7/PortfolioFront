import React, { forwardRef } from 'react'
import myphoto from '../assets/myphoto.jpg'

type ProfileSectionProps = {
  themeColors: {
    sparkle: string
    shadowColor: string
    textColor: string
  }
}

const ProfileSection = forwardRef<HTMLDivElement, ProfileSectionProps>(({ themeColors }, ref) => (
  <section
    ref={ref}
    className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg border border-gray-300"
    style={{
      color: themeColors.sparkle,
      textShadow: `0 0 8px ${themeColors.shadowColor}`,
    }}
  >
    <div className="flex-shrink-0">
      <img
        src={myphoto}
        alt="My Photo"
        className="w-40 h-40 rounded-full object-cover border-4 border-gradient-to-tr from-pink-600 to-purple-600 shadow-xl hover:scale-105 transition-transform duration-300 cursor-default"
        draggable={false}
      />
    </div>

    <div className="flex flex-col justify-center space-y-3 minecraft-font">
      <h1 className="text-3xl font-extrabold select-text drop-shadow-lg" style={{ color: themeColors.sparkle }}>
        Dzhumabekov Aziret
      </h1>
      <h2 className="text-xl font-semibold select-text" style={{ color: themeColors.sparkle }}>
        FullStack Developer
      </h2>
      <p className="text-sm select-text tracking-wider" style={{ color: themeColors.textColor }}>
        aziretdzumabekov19@gmail.com
      </p>
      <p style={{ color: themeColors.textColor }} className="select-text">
        Возраст: 16 лет
      </p>
    </div>
  </section>
))

export default ProfileSection
