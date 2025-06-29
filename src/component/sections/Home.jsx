import RevealOnScroll from './RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      <RevealOnScroll>
      {/* 🌈 Gradient background behind content */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-30 blur-2xl" />

      {/* 🔮 Fancy blob animation layer (optional) */}
      <div className="absolute w-[1000px] h-[1000px] bg-gradient-to-tr from-pink-500 via-purple-600 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -top-1/2 -left-1/2 z-0" />

      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-sans mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
          Hi, I'm Pulkit
        </h1>
        <p className="text-xl font-semibold text-gray-400 mb-8 mx-auto">
          I'm a full stack developer who loves crafting clean, scalable web
          applications.
          <br />
          My goal is to build solutions that offer both exceptional performance <br />
          and a delightful user experience.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 py-3 px-6 rounded-xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-110 duration-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 transition-all py-3 px-6 rounded-xl font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 hover:scale-110 duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
