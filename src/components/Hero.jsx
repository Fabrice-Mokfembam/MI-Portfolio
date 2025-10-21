import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Code, Smartphone, Globe } from 'lucide-react';

const Hero = () => {
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-accent-cyan/20 to-gradient-vip-start/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-gradient-vip-via/20 to-gradient-vip-end/20 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                I'm{' '}
                <span className="gradient-text">
                  Mokfembam Fabrice
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl lg:text-3xl text-accent-cyan font-semibold"
                variants={itemVariants}
              >
                Aspirant Software Engineer
              </motion.h2>
            </motion.div>

            <motion.p 
              className="text-lg text-text-secondary leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Transforming ideas into digital reality with passion for technology and 
              sustainable problem-solving solutions. I create innovative web applications, 
              mobile apps, and digital experiences that make a difference.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-accent-cyan-bg to-gradient-vip-start rounded-lg font-semibold text-white flex items-center gap-2 hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download CV
              </motion.button>
              
              <motion.button
                className="px-8 py-4 glass rounded-lg font-semibold text-text-primary flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ChevronRight size={20} />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
              variants={itemVariants}
            >
              {[
                { number: "3+", label: "Years Experience" },
                { number: "15+", label: "Projects Completed" },
                { number: "5+", label: "Technologies Mastered" },
                { number: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 glass rounded-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main Profile Image */}
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass border-4 border-accent-cyan/30"
                variants={floatingVariants}
                animate="animate"
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Professional headshot of Mokfembam Fabrice - a confident software engineer with a modern, tech-focused appearance"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 glass rounded-full flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Code className="text-accent-cyan" size={24} />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 glass rounded-full flex items-center justify-center"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Smartphone className="text-gradient-vip-start" size={24} />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 glass rounded-full flex items-center justify-center"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Globe className="text-gradient-vip-via" size={20} />
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan/20 to-gradient-vip-start/20 blur-xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-accent-cyan rounded-full mt-2"
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
