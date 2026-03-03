import React, { memo, useMemo } from "react";
import { Code, ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

// ------------------ Animations ------------------

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ------------------ Card ------------------

const ProjectCard = memo(({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow p-6 flex flex-col h-full"
    >
      <h3 className="text-xl font-bold text-foreground mb-3">
        {project.title}
      </h3>

      <p className="text-base text-muted-foreground mb-4 flex-grow">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-5 mt-auto">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
              style={{ color: "teal" }}
             className="flex items-center gap-2 font-semibold text-sm transition-all duration-300 hover:scale-[1.1]"
          >
            {link.type === "code" ? <Code size={16} /> : <ExternalLink size={16} />}
            {link.type === "code" ? "Code" : "Demo"}
          </a>
        ))}
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

// ------------------ Main ------------------

function ProjectsComponent() {

  const projectsData = useMemo(
    () => [
      // ---------- REACT ----------
      {
        title: "Modern Todo App",
        desc: "A modern Todo application built with React featuring task add, delete and completion tracking.",

        tags: ["React.js", "CSS"],
        category: "react",
        links: [{ type: "demo", href: "https://moderntodoap.netlify.app/"}]
      },
      {
        title: "My Notes",
        desc: "A React-based notes application to create, edit, and manage personal notes efficiently.",
        tags: ["React.js", "Tailwind CSS"],
        category: "react",
        links: [{ type: "demo", href: "https://rajlaxmi-app-notes.netlify.app/" }]
      },
      {
        title: "Food Delivery site",
        desc: "An interactive food delivery platform with real-time search and filtering.",
        tags: ["React.js", "Tailwind css"],
        category: "react",
        links: [{ type: "demo", href: "https://rajlaxmi-js.github.io/data-generator/" }]
      },

      // ---------- JAVASCRIPT ----------
      {
        title: "Tic-Tac-Toe Game",
        desc: "A classic Tic-Tac-Toe game built using JavaScript with interactive UI.",
        tags: ["JavaScript","CSS"],
        category: "js",
        links: [{ type: "demo", href: "https://tic-toegameproject.netlify.app/" }]
      },
      {
        title: "Portfolio",
        desc: "A personal portfolio website to showcase projects, skills, and contact information.",
        tags: ["JavaScript","CSS"],
        category: "js",
        links: [{ type: "demo", href: "https://teal-hotteok-63109b.netlify.app/" }]
      },
      {
        title: "Counter",
        desc: "A simple JavaScript counter app with increment, decrement, and reset functionality.",
        tags: ["JavaScript","CSS"],
        category: "js",
        links: [{ type: "demo", href: "https://redcounte.netlify.app/" }]
      },

      // ---------- HTML & CSS ----------
      {
        title: "Amazon",
        desc: "A responsive Amazon clone homepage built using HTML, CSS, and JavaScript.",
        tags: ["HTML", "CSS"],
        category: "htmlcss",
        links: [{ type: "demo", href: "https://harmonious-gaufre-fc882e.netlify.app/" }]
      },
      {
        title: "Netflix",
        desc: "A Netflix landing page clone with responsive layout and modern UI design.",
        tags: ["HTML", "CSS"],
        category: "htmlcss",
        links: [{ type: "demo", href: "#" }]
      },
      {
        title: "Landing Page",
        desc: "A responsive landing page designed using HTML and CSS.",
        tags: ["HTML", "CSS"],
        category: "htmlcss",
        links: [{ type: "demo", href: "#" }]
      }
    ],
    []
  );

  // -------- FILTER --------

  const reactProjects = projectsData.filter(p => p.category === "react");
  const jsProjects = projectsData.filter(p => p.category === "js");
  const htmlCssProjects = projectsData.filter(p => p.category === "htmlcss");

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center px-4 py-12">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center"
      >

        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="text-4xl font-bold flex items-center gap-3 justify-center">
            <FolderKanban />
            Projects
          </h2>
        </motion.div>

        {/* React */}
        <h3 className="text-2xl font-bold mb-4 text-teal-600 hover:text-teal-400 transition">
          React Projects
        </h3>

        <motion.div
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reactProjects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </motion.div>

        {/* JavaScript */}
        <h3 className="text-2xl font-bold mb-4 mt-10 text-teal-600 hover:text-teal-400 transition">
          JavaScript Projects
        </h3>

        <motion.div
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {jsProjects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </motion.div>

        {/* HTML & CSS */}
        <h3 className="text-2xl font-bold mb-4 mt-10 text-teal-600 hover:text-teal-400 transition">
          HTML & CSS Projects
        </h3>

        <motion.div
          variants={containerVariants}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {htmlCssProjects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}

export default memo(ProjectsComponent);
