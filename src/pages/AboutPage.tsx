import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js'
import { Link } from 'react-router-dom';

export default function AboutPage() {
  useEffect(() => {
    anime({
      targets: '.about-heading',
      translateY: [-30, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.about-text span',
      opacity: [0, 1],
      translateY: [10, 0],
      delay: anime.stagger(15), // faster animation
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.circle-float',
      translateX: () => anime.random(-25, 25),
      translateY: () => anime.random(-25, 25),
      direction: 'alternate',
      duration: 2500,
      loop: true,
      easing: 'easeInOutSine'
    });
  }, []);

  const aboutText = `Привет! Меня зовут [Твоё Имя], и я не просто разработчик. Я человек, который обожает создавать, учиться, исследовать новые технологии и превращать идеи в жизнь. Вне кода я увлекаюсь [путешествиями/искусством/музыкой/чем-то особенным]. Моя цель — не просто писать код, а делать цифровой мир красивее, доступнее и интереснее.`;

  return (
    <div className="relative px-6 py-20 min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100 text-gray-800 overflow-hidden">
      
      {/* Background Floating Circles */}
      {[...Array(14)].map((_, i) => (
        <div
          key={i}
          className="circle-float absolute w-16 h-16 rounded-full opacity-30 blur-2xl"
          style={{
            backgroundColor: `hsl(${i * 25}, 70%, 75%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Title */}
      <h1 className="about-heading text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-10">
        Обо мне
      </h1>

      {/* Animated About Text */}
      <p className="about-text max-w-3xl mx-auto text-lg leading-8 text-center text-gray-700 font-medium mb-16">
        {aboutText.split('').map((char, i) => (
          <span key={i} className="inline-block opacity-0">
            {char}
          </span>
        ))}
      </p>

      {/* Skills Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-purple-600">Навыки</h2>
        <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-lg">
          <li className="bg-white/60 px-4 py-2 rounded-lg shadow">JavaScript</li>
          <li className="bg-white/60 px-4 py-2 rounded-lg shadow">React</li>
          <li className="bg-white/60 px-4 py-2 rounded-lg shadow">Node.js</li>
          <li className="bg-white/60 px-4 py-2 rounded-lg shadow">Python</li>
          <li className="bg-white/60 px-4 py-2 rounded-lg shadow">Tailwind CSS</li>
        </ul>
      </div>

      {/* Goals Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4 text-pink-600">Мои цели</h2>
        <p className="text-lg text-gray-700">
          Продолжать развиваться как fullstack-разработчик, углубиться в машинное обучение, создавать проекты, которые приносят пользу и вдохновляют.
        </p>
      </div>

      {/* Button Back */}
      <div className="text-center">
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition"
        >
          Назад на главную
        </Link>
      </div>
    </div>
  );
}
