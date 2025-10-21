import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  X, 
  Code, 
  Smartphone, 
  Globe,
  Database,
  Users,
  Zap,
  ArrowRight,
  Calendar,
  Tag
} from 'lucide-react';

const Projects = ({ selectedProject, setSelectedProject }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "SweetSlickUI",
      category: "UI Library",
      description: "A comprehensive React UI component library built with TypeScript and Tailwind CSS, providing developers with beautiful, accessible, and customizable components.",
      shortDescription: "A comprehensive React UI component library with TypeScript and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook", "NPM"],
      features: [
        "50+ Reusable Components",
        "TypeScript Support",
        "Dark/Light Themes",
        "Accessibility Compliant",
        "NPM Package Distribution",
        "Comprehensive Documentation"
      ],
      links: {
        live: "https://sweetslickui.com",
        github: "https://github.com/fabrice/sweetslickui"
      },
      status: "Published",
      icon: Code,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "ViralBoost",
      category: "Web Application",
      description: "A comprehensive social media task management platform where users can earn money by completing social media tasks. Built for Intech company with React frontend and Laravel backend.",
      shortDescription: "Social media task management platform for earning through engagement tasks.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Laravel", "MySQL", "Tailwind CSS", "JWT Auth", "Cloudinary"],
      features: [
        "Task Management System",
        "Multi-tier Membership",
        "Cryptocurrency Payments",
        "Referral Program",
        "Admin Dashboard",
        "Real-time Progress Tracking"
      ],
      links: {
        live: "https://viralboost.com",
        github: "Private Repository"
      },
      status: "Live",
      icon: Users,
      color: "from-green-400 to-green-600"
    },
    {
      id: 3,
      title: "REEPLS",
      category: "Content Platform",
      description: "A modern content creation and social platform combining blogging, podcasting, and social networking. Built with MERN stack to amplify African voices and stories.",
      shortDescription: "Modern content platform for blogging, podcasting, and social networking.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express", "WaveSurfer.js", "TipTap"],
      features: [
        "Rich Text Blogging",
        "Audio Podcast Platform",
        "Social Feed System",
        "User Profiles",
        "Search & Discovery",
        "Multi-language Support"
      ],
      links: {
        live: "https://reepls.com",
        github: "https://github.com/fabrice/reepls"
      },
      status: "In Development",
      icon: Globe,
      color: "from-purple-400 to-purple-600"
    }
  ];

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        onClick={() => setSelectedProject(project)}
      >
        <div className="p-6 glass rounded-xl hover:bg-white/5 transition-all duration-300 group-hover:scale-105">
          <div className="space-y-6">
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={`${project.title} project screenshot showing the application interface`}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`p-2 bg-gradient-to-r ${project.color} rounded-lg`}>
                  <project.icon className="text-white" size={20} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 bg-gradient-to-r ${project.color} rounded-lg`}>
                    <project.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm">{project.category}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'Published' ? 'bg-green-500/20 text-green-400' :
                  project.status === 'Live' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-text-secondary leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-bg-secondary rounded-full text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 bg-bg-secondary rounded-full text-xs text-text-muted">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center space-x-2 text-accent-cyan font-semibold group-hover:text-accent-cyan-hover transition-colors duration-300">
                <span>View Details</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const ProjectModal = ({ project }) => {
    if (!project) return null;

    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 glass-dark rounded-t-2xl p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${project.color} rounded-lg`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
                    <p className="text-text-muted">{project.category}</p>
                  </div>
                </div>
                <motion.button
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                  onClick={() => setSelectedProject(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={`${project.title} detailed project screenshot`}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent-cyan">About This Project</h3>
                <p className="text-text-secondary leading-relaxed">{project.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent-cyan">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 glass rounded-lg">
                      <Zap className="text-accent-cyan" size={16} />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent-cyan">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-accent-cyan-bg to-gradient-vip-start rounded-lg text-white font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent-cyan">Project Links</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent-cyan-bg to-gradient-vip-start rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    <span>View Live Project</span>
                  </motion.a>
                  
                  {project.links.github !== "Private Repository" && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 glass rounded-lg font-semibold text-text-primary hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-10 w-96 h-96 bg-gradient-to-r from-gradient-vip-start/10 to-gradient-vip-via/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-accent-cyan/10 to-gradient-vip-end/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating my skills in web development, 
              mobile apps, and innovative solutions that make a real impact.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-8 glass rounded-2xl"
          >
            <div className="text-center space-y-8">
              <h3 className="text-3xl font-bold">
                Project <span className="gradient-text">Statistics</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "3", label: "Featured Projects" },
                  { number: "15+", label: "Total Projects" },
                  { number: "100%", label: "Client Satisfaction" },
                  { number: "2+", label: "Years Experience" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center space-y-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-text-muted">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} />
    </section>
  );
};

export default Projects;
