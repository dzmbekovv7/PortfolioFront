import React, { useRef, useState } from 'react';
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
  const [step, setStep] = useState<'info' | 'code' | 'message'>('info');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    code: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, code, message } = formData;

    if (step === 'info') {
      if (!name.trim() || !email.trim()) {
        toast.error('Введите имя и email');
        return;
      }

      const toastId = toast.loading('Отправляем код...');
      try {
        const res = await axios.post('https://portfolioback-8896.onrender.com/api/mail/send-code', { email });
        toast.dismiss(toastId);

        if (res.data.success) {
          toast.success('Код отправлен на почту');
          setStep('code');
        } else {
          toast.error(res.data.message || 'Ошибка при отправке кода');
        }
      } catch (err) {
        toast.dismiss(toastId);
        toast.error('Ошибка сети');
      }
    }

    else if (step === 'code') {
      if (!code.trim()) {
        toast.error('Введите код подтверждения');
        return;
      }

      const toastId = toast.loading('Проверка кода...');
      try {
        // Тестируем код, но пока не отправляем сообщение
        const res = await axios.post('https://portfolioback-8896.onrender.com/api/mail/verify-and-send', {
          name,
          email,
          code,
          message,
          step: 'code'
        });

        if (res.data.success) {
          toast.dismiss(toastId);
          toast.success('Код подтвержден!');
          setStep('message');
        } else {
          toast.dismiss(toastId);
          toast.error(res.data.message || 'Неверный код');
        }
      } catch {
        toast.dismiss(toastId);
        toast.error('Ошибка при проверке кода');
      }
    }

    else if (step === 'message') {
      if (!message.trim()) {
        toast.error('Введите сообщение');
        return;
      }

      const toastId = toast.loading('Отправляем сообщение...');
      try {
      const res = await axios.post('https://portfolioback-8896.onrender.com/api/mail/verify-and-send', {
  name,
  email,
  code,
  message,
  step: 'message',
});


        toast.dismiss(toastId);

        if (res.data.success) {
          toast.success('Сообщение отправлено!');
          contactRef.current?.reset();
          setFormData({ name: '', email: '', code: '', message: '' });
          setStep('info');
        } else {
          toast.error(res.data.message || 'Ошибка при отправке');
        }
      } catch {
        toast.dismiss(toastId);
        toast.error('Ошибка сети');
      }
    }
  };

  return (
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
        {/* Шаг 1: Имя и Email */}
        {(step === 'info' || step === 'code' || step === 'message') && (
          <>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
              className="w-full p-3 rounded-lg bg-white bg-opacity-50 border border-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              style={{ color: themeColors.textColor }}
              disabled={step !== 'info'}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ваш email"
              className="w-full p-3 rounded-lg bg-white bg-opacity-50 border border-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              style={{ color: themeColors.textColor }}
              disabled={step !== 'info'}
            />
          </>
        )}

        {/* Шаг 2: Код подтверждения */}
        {(step === 'code' || step === 'message') && (
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="Код из email"
            className="w-full p-3 rounded-lg bg-white bg-opacity-50 border border-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            style={{ color: themeColors.textColor }}
            disabled={step === 'message'}
          />
        )}

        {/* Шаг 3: Сообщение */}
        {step === 'message' && (
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ваше сообщение"
            rows={5}
            className="w-full p-3 rounded-lg bg-white bg-opacity-50 border border-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
            style={{ color: themeColors.textColor }}
          />
        )}

        <button
          type="submit"
          className="w-full py-3 transition-colors rounded-lg text-white font-bold shadow-lg shadow-pink-500/60"
          style={{ backgroundColor: themeColors.sparkle }}
        >
          {step === 'info' && 'Получить код'}
          {step === 'code' && 'Подтвердить код'}
          {step === 'message' && 'Отправить сообщение'}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
