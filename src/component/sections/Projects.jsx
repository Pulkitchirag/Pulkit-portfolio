import RevealOnScroll from './RevealOnScroll';

const ProjectCard = ({ title, description, techStack }) => (
  <div className='p-6 rounded-xl border border-[#cccccc49] hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all overflow-hidden bg-[#1e293b]'>
    <h3 className='text-xl font-semibold mb-2 text-white'>{title}</h3>
    <p className='text-sm text-gray-300 mb-4'>{description}</p>
    <div className='flex flex-wrap gap-2 mb-4'>
      {techStack.map((tech, key) => (
        <span
          key={key}
          className="bg-purple-500 text-white py-1 px-3 rounded-full text-sm hover:bg-purple-600/70 hover:shadow-lg transition"
        >
          {tech}
        </span>
      ))}
    </div>
    <a href="#" target="_blank" className='text-blue-400 hover:text-blue-300 transition-colors text-sm'>
      View Project ➡️
    </a>
  </div>
);

export const Projects = () => {
  const projects = [
    {
      title: "Amazon Clone",
      description: "An e-commerce frontend clone of Amazon with basic cart and product listings.",
      techStack: ["React", "Tailwind", "HTML", "JavaScript"],
    },
    {
      title: "Netflix Clone",
      description: "A UI replica of Netflix with trailer previews and movie cards.",
      techStack: ["React", "Tailwind", "HTML", "JavaScript"],
    },
    {
      title: "Workin Gemini Chatbot",
      description: "A full-stack chatbot using Gemini AI API with NextJS and MongoDB integration.",
      techStack: ["React", "Tailwind", "HTML", "JavaScript", "Node.js", "MongoDB", "NextJS"],
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio with animations and responsive design.",
      techStack: ["NextJS", "Tailwind", "Framer Motion"],
    },
    {
      title: "PDF Merger",
      description: "A simple web app to merge multiple PDF files into one.",
      techStack: ["React", "Tailwind", "HTML", "JavaScript", "Node.js"],
    },
    {
      title: "Employee Management System",
      description: "A full-stack application for managing employee records with CRUD operations.",
      techStack: ["React", "Tailwind", "HTML", "JavaScript", "Node.js", "Express", "MongoDB"],
    }
  ];

  return (
    <section id="projects" className='flex justify-center items-center min-h-screen py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white'>
      <RevealOnScroll>
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center'>
          Featured Projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              description={proj.description}
              techStack={proj.techStack}
            />
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
