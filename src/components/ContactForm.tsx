import React, { useRef } from 'react';
import type { FormEvent } from 'react';

import toast from 'react-hot-toast';
import axios from 'axios';

type ThemeColors = {
  textColor: string;
  sparkle: string;
};

interface ContactFormProps {
  themeColors: ThemeColors;
}

const ContactForm: React.FC<ContactFormProps> = ({ themeColors }) => {
  const contactRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = contactRef.current;
    if (!form) return;

    const name = form[0] as HTMLInputElement;
    const email = form[1] as HTMLInputElement;
    const message = form[2] as HTMLTextAreaElement;

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }

    const loadingToastId = toast.loading('Отправляем...');

    try {
      const res = await axios.post('https://portfolioback-8896.onrender.com/api/mail/contact', {
        name: name.value.trim(),
        email: email.value.trim(),
        message: message.value.trim(),
      });

      toast.dismiss(loadingToastId);

      if (res.data.success) {
        toast.success('Успешно отправлено!');
        form.reset();
      } else {
        toast.error(res.data.message || 'Ошибка при отправке');
      }
    } catch (err) {
      toast.dismiss(loadingToastId);
      toast.error('Ошибка сети или сервера');
    }
  };

  return (
    <>
      <section
        className="bg-white bg-opacity-60 backdrop-blur-md rounded-xl p-8 shadow-lg border border-gray-300"
        style={{ color: themeColors.textColor }}
      >
        <h3
          className="minecraft-font md:text-3xl text-l font-bold mb-6 border-b border-pink-600 pb-2 select-text drop-shadow-md"
          style={{ color: themeColors.sparkle }}
        >
          Контакты
        </h3>
        <form ref={contactRef} className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full p-3 rounded-lg bg-white bg-opacity-50 border border-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 "
            style={{ color: themeColors.textColor }}
          />
          <input
            type="email"
            placeholder="Ваш email"
            className="w-full p-3 rounded-lg bg-white bg-opacity-50 border border-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 "
            style={{ color: themeColors.textColor }}
          />
          <textarea
            placeholder="Сообщение"
            rows={5}
            className="w-full p-3 rounded-lg bg-white bg-opacity-50 border border-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500  resize-none"
            style={{ color: themeColors.textColor }}
          />
          <button
            type="submit"
            className="w-full py-3 transition-colors rounded-lg text-white font-bold  shadow-lg shadow-pink-500/60"
            style={{ color: themeColors.sparkle }}
          >
            Отправить
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
