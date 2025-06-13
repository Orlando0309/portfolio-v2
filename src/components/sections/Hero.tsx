import { motion } from 'framer-motion'
import { ChevronDown, Github, Mail, Terminal, Code2 } from 'lucide-react'
import Avatar3D from '../Avatar3D'
import GeometricShapes from '../GeometricShapes'
import ParallaxElement from '../ParallaxElement'

interface HeroProps {
  content: {
    bio: {
      name: string
      title: string
      heroMessage: string
      github: string
      email: string
    }
  }
}

const Hero = ({ content }: HeroProps) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-neo-black">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Geometric shapes background */}
      <GeometricShapes />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-9 justify-center lg:justify-start">
              <Terminal className="w-6 h-6 text-neo-purple stroke-[3]" />
              <span className="text-neo-purple text-lg font-mono font-bold uppercase tracking-wider">
                Hello, I'm
              </span>
            </div>
            
            <ParallaxElement speed={0.3}>
              <h1 className="text-6xl md:text-8xl font-black font-sans mb-4 leading-none">
                <span className="text-neo-purple block">
                  {content.bio.name.split(' ')[0]}
                </span>
                <span className="text-neo-white block border-l-8 border-neo-purple pl-4">
                  {content.bio.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </ParallaxElement>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-2 bg-neo-purple mb-6 origin-left"
            />
            
            <h2 className="text-2xl md:text-4xl font-mono font-bold text-neo-white bg-neo-purple px-4 py-2 inline-block border-4 border-neo-black mb-8">
              {content.bio.title}
            </h2>
          </motion.div>

          <ParallaxElement speed={0.5}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-neo-white text-neo-black p-6 border-4 border-neo-black mb-8 font-mono text-lg leading-relaxed"
            >
              {content.bio.heroMessage}
            </motion.div>
          </ParallaxElement>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={scrollToProjects}
              className="bg-neo-purple text-neo-white font-bold text-lg px-8 py-4 border-4 border-neo-black hover:bg-neo-white hover:text-neo-black transition-colors duration-200 font-mono uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="inline w-6 h-6 mr-2 stroke-[3]" />
              VIEW PROJECTS
            </motion.button>
            
            <motion.button
              onClick={scrollToContact}
              className="bg-neo-white text-neo-black font-bold text-lg px-8 py-4 border-4 border-neo-black hover:bg-neo-purple hover:text-neo-white transition-colors duration-200 font-mono uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET IN TOUCH
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center lg:justify-start gap-6 mt-8"
          >
            <motion.a
              href={content.bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-neo-white border-4 border-neo-black flex items-center justify-center hover:bg-neo-purple hover:text-neo-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-8 h-8 text-neo-black stroke-[2.5]" />
            </motion.a>
            <motion.a
              href={`mailto:${content.bio.email}`}
              className="w-16 h-16 bg-neo-white border-4 border-neo-black flex items-center justify-center hover:bg-neo-purple hover:text-neo-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-8 h-8 text-neo-black stroke-[2.5]" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right content - 3D Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <ParallaxElement speed={0.2}>
            <div className="bg-neo-white border-8 border-neo-black p-4 max-w-lg w-full relative">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-neo-purple border-2 border-neo-black"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-neo-purple border-2 border-neo-black"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-neo-purple border-2 border-neo-black"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neo-purple border-2 border-neo-black"></div>
              
              <Avatar3D />
              
              {/* Label */}
              <div className="absolute bottom-4 left-4 bg-neo-black text-neo-white px-3 py-1 font-mono text-sm font-bold">
                DIGITAL_AVATAR.exe
              </div>
            </div>
          </ParallaxElement>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-neo-white"
        >
          <span className="text-sm mb-2 font-mono font-bold uppercase tracking-wider">SCROLL_DOWN</span>
          <div className="w-8 h-8 border-4 border-neo-white flex items-center justify-center">
            <ChevronDown className="w-4 h-4 stroke-[3]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 