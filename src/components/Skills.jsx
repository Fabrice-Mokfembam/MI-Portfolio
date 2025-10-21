import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Palette, 
  Zap,
  Server,
  Layers,
  Cpu,
  FileText
} from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skills = [
    { name: "React.js", percentage: 95, icon: Code, color: "from-blue-400 to-blue-600" },
    { name: "Next.js", percentage: 90, icon: Globe, color: "from-gray-400 to-gray-600" },
    { name: "MongoDB", percentage: 85, icon: Database, color: "from-green-400 to-green-600" },
    { name: "Express.js", percentage: 88, icon: Server, color: "from-gray-400 to-gray-600" },
    { name: "Firebase", percentage: 82, icon: Zap, color: "from-yellow-400 to-orange-500" },
    { name: "Supabase", percentage: 80, icon: Database, color: "from-green-400 to-green-600" },
    { name: "Prisma", percentage: 85, icon: Layers, color: "from-gray-400 to-gray-600" },
    { name: "PHP", percentage: 75, icon: Code, color: "from-purple-400 to-purple-600" },
    { name: "MySQL", percentage: 80, icon: Database, color: "from-blue-400 to-blue-600" },
    { name: "WordPress", percentage: 78, icon: Globe, color: "from-blue-400 to-blue-600" },
    { name: "React Native", percentage: 85, icon: Smartphone, color: "from-blue-400 to-blue-600" },
    { name: "Ionic", percentage: 70, icon: Smartphone, color: "from-blue-400 to-blue-600" },
    { name: "Flutter", percentage: 75, icon: Smartphone, color: "from-blue-400 to-blue-600" },
    { name: "UI/UX Design", percentage: 88, icon: Palette, color: "from-pink-400 to-pink-600" },
    { name: "TypeScript", percentage: 90, icon: FileText, color: "from-blue-400 to-blue-600" },
    { name: "Node.js", percentage: 87, icon: Cpu, color: "from-green-400 to-green-600" }
  ];

  const ProgressBar = ({ skill }) => {
    return (
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg`}>
              <skill.icon className="text-white" size={20} />
            </div>
            <span className="font-semibold text-text-primary">{skill.name}</span>
          </div>
          <span className="text-accent-cyan font-bold">{skill.percentage}%</span>
        </div>
        
        <div className="w-full bg-bg-secondary rounded-full h-2 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-10 w-80 h-80 bg-gradient-to-r from-accent-cyan/10 to-gradient-vip-start/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-64 h-64 bg-gradient-to-r from-gradient-vip-via/10 to-gradient-vip-end/10 rounded-full blur-3xl"
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life. Each skill represents 
              years of hands-on experience and continuous learning.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 glass rounded-lg hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProgressBar skill={skill} />
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-8 glass rounded-2xl"
          >
            <div className="text-center space-y-8">
              <h3 className="text-3xl font-bold">
                <span className="gradient-text">Technical Expertise</span>
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    category: "Frontend",
                    technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
                    icon: Palette,
                    color: "from-blue-400 to-blue-600"
                  },
                  {
                    category: "Backend",
                    technologies: ["Node.js", "Express.js", "PHP", "Prisma"],
                    icon: Server,
                    color: "from-green-400 to-green-600"
                  },
                  {
                    category: "Database",
                    technologies: ["MongoDB", "MySQL", "Supabase", "Firebase"],
                    icon: Database,
                    color: "from-purple-400 to-purple-600"
                  },
                  {
                    category: "Mobile",
                    technologies: ["React Native", "Flutter", "Ionic", "Expo"],
                    icon: Smartphone,
                    color: "from-pink-400 to-pink-600"
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    className="text-center space-y-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mx-auto flex items-center justify-center`}>
                      <category.icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-semibold text-accent-cyan">
                      {category.category}
                    </h4>
                    <div className="space-y-2">
                      {category.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="text-text-muted text-sm">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl font-semibold text-accent-cyan">
              Continuous Learning
            </h3>
            <p className="text-text-secondary max-w-4xl mx-auto leading-relaxed">
              Technology evolves rapidly, and so do I. I'm committed to staying current with the latest 
              trends, frameworks, and best practices. Every project is an opportunity to learn something 
              new and improve my skills. I believe in the power of continuous learning to deliver 
              cutting-edge solutions that meet modern standards.
            </p>
            
            <motion.div 
              className="flex justify-center space-x-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {[
                { label: "Always Learning", value: "100%" },
                { label: "Adapting to Change", value: "100%" },
                { label: "Innovation Focus", value: "100%" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{item.value}</div>
                  <div className="text-sm text-text-muted">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
