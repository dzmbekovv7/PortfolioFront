import ContactForm from '../components/ContactForm';

type ThemeColors = {
  shadowColor: string;
  sparkle: string;
  textColor: string;
  backgroundFrom: string;
  backgroundTo: string;
};

type ContactPageProps = {
  themeColors: ThemeColors;
};

export default function ContactPage({ themeColors }: ContactPageProps) {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${themeColors.backgroundFrom}, ${themeColors.backgroundTo})`,
        color: themeColors.textColor,
      }}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-gray-300">
        {/* Левая часть — текст */}
        <div className="space-y-6">
          <h2 className="md:text-4xl text-xl  font-extrabold minecraft-font drop-shadow" style={{ color: themeColors.sparkle }}>
            Связаться со мной
          </h2>
          <p className="md:text-lg  text-l font-medium drop-shadow">
            У тебя есть вопросы, предложения или хочешь поработать со мной?
            <br />
            Напиши мне, и я обязательно отвечу!
          </p>
  <p className="hidden md:block text-base text-gray-700 dark:text-gray-300 drop-shadow">
  Я всегда открыт к новым идеям и сотрудничеству. Форма рядом — используй её!
</p>

        </div>

        {/* Правая часть — форма */}
        <ContactForm themeColors={themeColors} />
      </div>
    </section>
  );
}
