import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Target, Users, Award, Coffee } from 'lucide-react';

const About = () => {
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

  const passionPoints = [
    {
      icon: Heart,
      title: "Passionate About Tech",
      description: "I have an unwavering passion for technology and its potential to solve real-world problems."
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding innovative, sustainable solutions."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Every project I undertake is driven by clear objectives and measurable outcomes."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "I believe in collaborative development and enjoy working with diverse teams."
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "I'm committed to delivering high-quality, maintainable, and scalable solutions."
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving my skills to stay current."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-r from-gradient-vip-start/10 to-gradient-vip-via/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Get to know the person behind the code and discover what drives my passion for technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-accent-cyan">
                  My Journey in Tech
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  As an aspirant software engineer, I've dedicated myself to mastering the art of 
                  transforming ideas into digital reality. My journey began with a simple curiosity 
                  about how things work behind the scenes, and it has evolved into a deep passion for 
                  creating solutions that make a meaningful impact.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I believe that technology should serve humanity, not the other way around. This 
                  philosophy drives me to approach every project with sustainability and user-centricity 
                  at its core. Whether it's building a UI library that simplifies development or 
                  creating platforms that connect communities, I strive to deliver solutions that 
                  stand the test of time.
                </p>
              </div>

              <motion.div 
                className="p-6 glass rounded-lg"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="text-xl font-semibold mb-3 text-accent-cyan">
                  My Mission
                </h4>
                <p className="text-text-secondary">
                  "To bridge the gap between innovative ideas and practical digital solutions, 
                  creating technology that empowers people and drives positive change in our world."
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content - Passion Points */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent-cyan mb-8">
                What Drives Me
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {passionPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="p-6 glass rounded-lg hover:bg-white/5 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-accent-cyan-bg to-gradient-vip-start rounded-lg">
                        <point.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary mb-2">
                          {point.title}
                        </h4>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 p-8 glass rounded-2xl"
          >
            <div className="text-center space-y-8">
              <h3 className="text-3xl font-bold">
                My <span className="gradient-text">Core Values</span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Innovation",
                    description: "Always pushing boundaries and exploring new possibilities in technology."
                  },
                  {
                    title: "Sustainability",
                    description: "Building solutions that are environmentally conscious and long-lasting."
                  },
                  {
                    title: "Excellence",
                    description: "Committed to delivering the highest quality in every project I undertake."
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="text-center space-y-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-cyan-bg to-gradient-vip-start rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-accent-cyan">
                      {value.title}
                    </h4>
                    <p className="text-text-secondary">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
