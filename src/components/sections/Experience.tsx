import { motion } from 'framer-motion'
import { Building, ArrowRight, Terminal, Clock, FileText } from 'lucide-react'
import ParallaxElement from '../ParallaxElement'

interface ExperienceProps {
  content: {
    experience: Array<{
      id: number
      title: string
      company: string
      period: string
      description: string
      technologies: string[]
      status: string
    }>
  }
}

const Experience = ({ content }: ExperienceProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-neo-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <FileText className="w-12 h-12 text-neo-purple stroke-[3]" />
            <h2 className="text-5xl md:text-7xl font-black font-mono text-neo-white uppercase tracking-wider">
              EXPERIENCE
            </h2>
            <FileText className="w-12 h-12 text-neo-purple stroke-[3]" />
          </div>
          <div className="h-2 bg-neo-purple mb-8 max-w-md mx-auto" />
          <div className="bg-neo-white text-neo-black p-4 border-4 border-neo-black font-mono text-lg max-w-3xl mx-auto">
            JOURNEY THROUGH INNOVATIVE PROJECTS AND TECHNICAL ACHIEVEMENTS
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Command-line Timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-neo-purple" />

          {content.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline connector */}
              <div className="absolute left-6 w-8 h-8 bg-neo-purple border-4 border-neo-black flex items-center justify-center z-10">
                <div className="w-2 h-2 bg-neo-white border border-neo-black"></div>
              </div>
              
              {/* Experience card */}
              <div className="ml-20">
                <ParallaxElement speed={0.1 * (index + 1)}>
                  <div className={`${index % 2 === 0 ? 'bg-neo-white text-neo-black' : 'bg-neo-black text-neo-white border-neo-purple'} border-8 border-neo-black p-8 relative`}>
                    {/* Corner decorations */}
                    <div className={`absolute -top-3 -right-3 w-12 h-12 ${index % 2 === 0 ? 'bg-neo-purple' : 'bg-neo-white'} border-4 border-neo-black`}></div>
                    
                    {/* Terminal header */}
                    <div className={`${index % 2 === 0 ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'} p-3 border-4 ${index % 2 === 0 ? 'border-neo-purple' : 'border-neo-black'} mb-6 flex items-center gap-3`}>
                      <div className="w-3 h-3 bg-red-500 border border-current"></div>
                      <div className="w-3 h-3 bg-yellow-500 border border-current"></div>
                      <div className="w-3 h-3 bg-green-500 border border-current"></div>
                      <span className="font-mono font-bold ml-2">POSITION_{String(index + 1).padStart(2, '0')}.exe</span>
                    </div>

                    {/* Experience details */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Clock className={`w-6 h-6 ${index % 2 === 0 ? 'text-neo-purple' : 'text-neo-purple'} stroke-[3]`} />
                        <span className="font-mono font-bold text-lg uppercase tracking-wider">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-black font-mono uppercase tracking-wide leading-tight">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center gap-3">
                        <Building className={`w-6 h-6 ${index % 2 === 0 ? 'text-neo-purple' : 'text-neo-purple'} stroke-[3]`} />
                        <span className="font-mono font-bold text-xl uppercase">
                          {exp.company}
                        </span>
                      </div>
                      
                      <div className={`${index % 2 === 0 ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'} p-4 border-4 ${index % 2 === 0 ? 'border-neo-purple' : 'border-neo-black'} font-mono leading-relaxed`}>
                        {exp.description}
                      </div>
                      
                      {/* Technologies grid */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Terminal className={`w-5 h-5 ${index % 2 === 0 ? 'text-neo-purple' : 'text-neo-purple'} stroke-[3]`} />
                          <span className="font-mono font-bold uppercase text-sm tracking-wider">
                            TECH_STACK:
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              className={`p-2 border-2 ${index % 2 === 0 ? 'border-neo-black bg-neo-purple text-neo-white' : 'border-neo-white bg-neo-purple text-neo-white'} font-mono font-bold text-xs text-center uppercase`}
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                            >
                              {tech}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Status indicator */}
                      <div className={`absolute bottom-2 left-2 ${index % 2 === 0 ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'} px-3 py-1 font-mono text-xs font-bold border-2 border-current`}>
                        STATUS: {exp.status}
                      </div>
                    </div>
                  </div>
                </ParallaxElement>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action terminal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <ParallaxElement speed={0.2}>
            <div className="bg-neo-black text-neo-white border-8 border-neo-purple p-8 max-w-2xl mx-auto relative">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-neo-white border-4 border-neo-black"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-neo-white border-4 border-neo-black"></div>
              
              {/* Terminal header */}
              <div className="bg-neo-white text-neo-black p-3 border-4 border-neo-black mb-6 flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 border-2 border-neo-black"></div>
                <div className="w-4 h-4 bg-yellow-500 border-2 border-neo-black"></div>
                <div className="w-4 h-4 bg-green-500 border-2 border-neo-black"></div>
                <span className="font-mono font-bold ml-3">NEXT_ACTION.exe</span>
              </div>

              <div className="font-mono space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-neo-purple font-bold">SYSTEM@ORLANDO:~$</span>
                  <span className="text-neo-white">echo "Interested in my work?"</span>
                </div>
                
                <div className="text-neo-white bg-neo-purple p-3 border-2 border-neo-white font-bold text-center">
                  INTERESTED IN MY WORK?
                </div>

                <motion.button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-neo-purple text-neo-white font-bold text-lg px-6 py-4 border-4 border-neo-white hover:bg-neo-white hover:text-neo-black transition-colors duration-200 font-mono uppercase tracking-wider flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ArrowRight className="w-6 h-6 stroke-[3]" />
                  VIEW_PROJECTS.sh
                </motion.button>
              </div>
            </div>
          </ParallaxElement>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 