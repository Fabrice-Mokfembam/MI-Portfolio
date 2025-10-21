import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  BookOpen, 
  Users, 
  Palette, 
  Briefcase,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Target
} from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, scalable web applications using modern technologies like React, Next.js, and Node.js.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "API Development",
        "Performance Optimization"
      ],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Creating cross-platform mobile applications with React Native, Flutter, and Ionic for iOS and Android.",
      features: [
        "Cross-Platform Apps",
        "Native Performance",
        "UI/UX Integration",
        "App Store Deployment"
      ],
      color: "from-green-400 to-green-600"
    },
    {
      icon: BookOpen,
      title: "Tutoring",
      description: "Providing comprehensive programming education and mentorship to help others grow in their tech journey.",
      features: [
        "1-on-1 Mentorship",
        "Code Reviews",
        "Project Guidance",
        "Career Advice"
      ],
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Leading development teams and managing projects from conception to deployment with agile methodologies.",
      features: [
        "Agile Development",
        "Team Leadership",
        "Timeline Management",
        "Quality Assurance"
      ],
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Palette,
      title: "UX Design",
      description: "Designing intuitive user experiences and beautiful interfaces that users love to interact with.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems"
      ],
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Briefcase,
      title: "Consulting",
      description: "Providing technical expertise and strategic guidance to help businesses make informed technology decisions.",
      features: [
        "Technical Audits",
        "Architecture Planning",
        "Technology Selection",
        "Implementation Strategy"
      ],
      color: "from-cyan-400 to-cyan-600"
    }
  ];

  const ServiceCard = ({ service, index }) => {
    return (
      <motion.div
        className="p-8 glass rounded-xl hover:bg-white/5 transition-all duration-300 group"
        whileHover={{ scale: 1.05, y: -10 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="space-y-6">
          {/* Icon */}
          <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <service.icon className="text-white" size={32} />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <div className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-cyan" size={16} />
                  <span className="text-text-muted text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              className="flex items-center space-x-2 text-accent-cyan font-semibold group-hover:text-accent-cyan-hover transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              <span>Learn More</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-r from-gradient-vip-start/10 to-gradient-vip-via/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/3 left-20 w-80 h-80 bg-gradient-to-r from-accent-cyan/10 to-gradient-vip-end/10 rounded-full blur-3xl"
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
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Comprehensive solutions tailored to your needs. From web development to project management, 
              I provide end-to-end services to bring your ideas to life.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 p-8 glass rounded-2xl"
          >
            <div className="text-center space-y-8">
              <h3 className="text-3xl font-bold">
                My <span className="gradient-text">Process</span>
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description: "Understanding your needs and project requirements",
                    icon: Target,
                    color: "from-blue-400 to-blue-600"
                  },
                  {
                    step: "02",
                    title: "Planning",
                    description: "Creating detailed project roadmap and timeline",
                    icon: Globe,
                    color: "from-green-400 to-green-600"
                  },
                  {
                    step: "03",
                    title: "Development",
                    description: "Building your solution with best practices",
                    icon: Code,
                    color: "from-purple-400 to-purple-600"
                  },
                  {
                    step: "04",
                    title: "Launch",
                    description: "Deploying and optimizing your project",
                    icon: Zap,
                    color: "from-orange-400 to-orange-600"
                  }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    className="text-center space-y-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-full mx-auto flex items-center justify-center`}>
                      <process.icon className="text-white" size={24} />
                    </div>
                    <div className="text-accent-cyan font-bold text-lg">
                      {process.step}
                    </div>
                    <h4 className="text-xl font-semibold text-accent-cyan">
                      {process.title}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-8"
          >
            <h3 className="text-3xl font-bold">
              Ready to <span className="gradient-text">Work Together?</span>
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and explore how I can help you achieve your goals. 
              Every great project starts with a conversation.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-accent-cyan-bg to-gradient-vip-start rounded-lg font-semibold text-white flex items-center gap-2 hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase size={20} />
                Start a Project
              </motion.button>
              
              <motion.button
                className="px-8 py-4 glass rounded-lg font-semibold text-text-primary flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen size={20} />
                Get Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
