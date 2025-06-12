import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Linkedin, Github, User, Target, Code } from 'lucide-react'
import ParallaxElement from '../ParallaxElement'

interface AboutProps {
  content: {
    bio: {
      name: string
      title: string
      email: string
      phone: string
      address: string
      linkedin: string
      github: string
      shortBio: string
    }
  }
}

const About = ({ content }: AboutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section id="about" className="py-20 bg-neo-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left side - Personal info card */}
          <motion.div variants={itemVariants}>
            <ParallaxElement speed={0.3}>
              <div className="bg-neo-white border-8 border-neo-black p-8 lg:p-12 space-y-8 relative">
                {/* Corner decorations */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-neo-purple border-4 border-neo-black"></div>
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-neo-purple border-4 border-neo-black"></div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                    <User className="w-8 h-8 text-neo-purple stroke-[3]" />
                    <h2 className="text-4xl md:text-5xl font-black font-mono text-neo-black uppercase">
                      ABOUT_ME
                    </h2>
                  </div>
                  <div className="h-2 bg-neo-purple mb-8" />
                </div>

                <div className="space-y-6">
                  <div className="bg-neo-black text-neo-white p-4 border-4 border-neo-purple">
                    <h3 className="text-2xl font-bold font-mono mb-2 text-neo-purple">
                      {content.bio.name}
                    </h3>
                    <p className="text-lg font-mono font-bold uppercase tracking-wider">
                      {content.bio.title}
                    </p>
                  </div>

                  <div className="text-neo-black font-mono text-lg leading-relaxed border-l-8 border-neo-purple pl-4">
                    {content.bio.shortBio}
                  </div>

                  <div className="space-y-4 bg-neo-gray p-4 border-4 border-neo-black">
                    <h4 className="font-mono font-bold text-neo-black uppercase tracking-wider mb-4">
                      CONTACT_INFO
                    </h4>
                    <div className="flex items-center gap-3 text-neo-black font-mono">
                      <Mail className="w-6 h-6 text-neo-purple stroke-[3]" />
                      <a 
                        href={`mailto:${content.bio.email}`} 
                        className="hover:text-neo-purple transition-colors font-bold"
                      >
                        {content.bio.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-neo-black font-mono font-bold">
                      <Phone className="w-6 h-6 text-neo-purple stroke-[3]" />
                      <span>{content.bio.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-neo-black font-mono font-bold">
                      <MapPin className="w-6 h-6 text-neo-purple stroke-[3]" />
                      <span>{content.bio.address}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={content.bio.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-neo-purple border-4 border-neo-black flex items-center justify-center hover:bg-neo-black hover:text-neo-purple transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="w-8 h-8 text-neo-white stroke-[2.5]" />
                    </motion.a>
                    <motion.a
                      href={content.bio.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-neo-purple border-4 border-neo-black flex items-center justify-center hover:bg-neo-black hover:text-neo-purple transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-8 h-8 text-neo-white stroke-[2.5]" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </ParallaxElement>
          </motion.div>

          {/* Right side - Stats and highlights */}
          <motion.div variants={itemVariants} className="space-y-8">
            <ParallaxElement speed={0.4}>
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="bg-neo-purple text-neo-white border-4 border-neo-black p-6 text-center relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-black font-mono mb-2">2+</div>
                  <div className="font-mono font-bold uppercase text-sm tracking-wider">YEARS EXP</div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-neo-white border-2 border-neo-black"></div>
                </motion.div>
                <motion.div 
                  className="bg-neo-white text-neo-black border-4 border-neo-black p-6 text-center relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-black font-mono mb-2 text-neo-purple">10+</div>
                  <div className="font-mono font-bold uppercase text-sm tracking-wider">PROJECTS</div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-neo-purple border-2 border-neo-black"></div>
                </motion.div>
              </div>
            </ParallaxElement>

            <ParallaxElement speed={0.2}>
              <div className="bg-neo-white border-8 border-neo-black p-8 relative">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neo-purple border-2 border-neo-black"></div>
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-neo-purple stroke-[3]" />
                  <h3 className="text-2xl font-black font-mono text-neo-black uppercase">WHAT_I_DO</h3>
                </div>
                <ul className="space-y-4 text-neo-black font-mono">
                  <li className="flex items-center gap-3 p-2 bg-neo-gray border-2 border-neo-black">
                    <div className="w-4 h-4 bg-neo-purple border-2 border-neo-black" />
                    AI/ML MODEL DEVELOPMENT
                  </li>
                  <li className="flex items-center gap-3 p-2 bg-neo-gray border-2 border-neo-black">
                    <div className="w-4 h-4 bg-neo-purple border-2 border-neo-black" />
                    FULL-STACK WEB DEV
                  </li>
                  <li className="flex items-center gap-3 p-2 bg-neo-gray border-2 border-neo-black">
                    <div className="w-4 h-4 bg-neo-purple border-2 border-neo-black" />
                    DATA ANALYSIS & VIZ
                  </li>
                  <li className="flex items-center gap-3 p-2 bg-neo-gray border-2 border-neo-black">
                    <div className="w-4 h-4 bg-neo-purple border-2 border-neo-black" />
                    SYSTEM INTEGRATION
                  </li>
                </ul>
              </div>
            </ParallaxElement>

            <ParallaxElement speed={0.5}>
              <div className="bg-neo-black text-neo-white border-8 border-neo-purple p-8 relative">
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-neo-white border-2 border-neo-black"></div>
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-8 h-8 text-neo-purple stroke-[3]" />
                  <h3 className="text-2xl font-black font-mono text-neo-white uppercase">SPECIALTIES</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['RAG_SYSTEMS', 'COMPUTER_VISION', 'NLP', 'API_DEV', 'DATABASE_DESIGN'].map((specialty, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-neo-purple text-neo-white border-2 border-neo-white text-sm font-mono font-bold text-center uppercase"
                      whileHover={{ scale: 1.05 }}
                    >
                      {specialty}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ParallaxElement>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 