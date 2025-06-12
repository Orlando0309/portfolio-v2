import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, FolderOpen, Code2, Zap } from 'lucide-react'
import ParallaxElement from '../ParallaxElement'

interface ProjectsProps {
  content: {
    projects: Array<{
      id: number
      name: string
      description: string
      stack: string[]
      link: string
      featured: boolean
    }>
  }
}

const Projects = ({ content }: ProjectsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const featuredProjects = content.projects.filter(project => project.featured)
  const otherProjects = content.projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-neo-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <FolderOpen className="w-12 h-12 text-neo-purple stroke-[3]" />
            <h2 className="text-5xl md:text-7xl font-black font-mono text-neo-white uppercase tracking-wider">
              PROJECTS
            </h2>
            <FolderOpen className="w-12 h-12 text-neo-purple stroke-[3]" />
          </div>
          <div className="h-2 bg-neo-purple mb-8 max-w-md mx-auto" />
          <div className="bg-neo-white text-neo-black p-4 border-4 border-neo-black font-mono text-lg max-w-3xl mx-auto">
            SHOWCASE OF INNOVATIVE AI-POWERED SOLUTIONS AND FULL-STACK APPLICATIONS
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
            >
              <ParallaxElement speed={0.1 * (index + 1)}>
                <div className="bg-neo-white text-neo-black border-8 border-neo-black p-8 h-full relative">
                  {/* Corner decorations */}
                  <div className="absolute -top-3 -left-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>

                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 bg-neo-black text-neo-white px-3 py-1 border-2 border-neo-purple flex items-center gap-2 font-mono font-bold text-sm">
                    <Star className="w-4 h-4 fill-current stroke-[2]" />
                    FEATURED
                  </div>

                  {/* Terminal header */}
                  <div className="bg-neo-black text-neo-white p-3 border-4 border-neo-purple mb-6 flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 border-2 border-neo-white"></div>
                    <div className="w-4 h-4 bg-yellow-500 border-2 border-neo-white"></div>
                    <div className="w-4 h-4 bg-green-500 border-2 border-neo-white"></div>
                    <span className="font-mono font-bold ml-3">PROJECT_{String(project.id).padStart(2, '0')}.exe</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-black font-mono uppercase tracking-wide leading-tight mb-4">
                        {project.name}
                      </h3>
                      <div className="bg-neo-black text-neo-white p-4 border-4 border-neo-purple font-mono leading-relaxed">
                        {project.description}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-neo-purple stroke-[3]" />
                        <span className="font-mono font-bold uppercase text-sm tracking-wider">
                          TECH_STACK:
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {project.stack.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            className="p-2 border-2 border-neo-black bg-neo-purple text-neo-white font-mono font-bold text-xs text-center uppercase"
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

                    {/* Action buttons */}
                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-neo-purple text-neo-white font-bold px-4 py-3 border-4 border-neo-black hover:bg-neo-black hover:text-neo-purple transition-colors duration-200 font-mono uppercase tracking-wider flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-5 h-5 stroke-[3]" />
                        VIEW_CODE
                      </motion.a>
                      <motion.button
                        className="flex-1 bg-neo-black text-neo-white font-bold px-4 py-3 border-4 border-neo-purple hover:bg-neo-purple hover:text-neo-white transition-colors duration-200 font-mono uppercase tracking-wider flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-5 h-5 stroke-[3]" />
                        LIVE_DEMO
                      </motion.button>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute bottom-2 left-2 bg-neo-black text-neo-white px-3 py-1 font-mono text-xs font-bold border-2 border-neo-purple">
                    STATUS: PRODUCTION
                  </div>
                </div>
              </ParallaxElement>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code2 className="w-8 h-8 text-neo-purple stroke-[3]" />
                <h3 className="text-3xl font-black font-mono text-neo-white uppercase tracking-wider">
                  OTHER_PROJECTS
                </h3>
              </div>
              <div className="w-16 h-1 bg-neo-purple mx-auto" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="group"
                >
                  <ParallaxElement speed={0.05 * (index + 1)}>
                    <div className="bg-neo-black text-neo-white border-8 border-neo-purple p-6 h-full relative">
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-neo-white border-2 border-neo-black"></div>

                      {/* Mini terminal header */}
                      <div className="bg-neo-white text-neo-black p-2 border-2 border-neo-black mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 border border-current"></div>
                        <div className="w-2 h-2 bg-yellow-500 border border-current"></div>
                        <div className="w-2 h-2 bg-green-500 border border-current"></div>
                        <span className="font-mono font-bold text-xs ml-1">mini_project.exe</span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xl font-black font-mono uppercase tracking-wide mb-3">
                            {project.name}
                          </h4>
                          <div className="bg-neo-white text-neo-black p-3 border-2 border-neo-purple font-mono text-sm leading-relaxed">
                            {project.description}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <span className="font-mono font-bold uppercase text-xs tracking-wider text-neo-purple">
                            STACK:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {project.stack.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-neo-purple text-neo-white border border-neo-white font-mono text-xs font-bold uppercase"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.stack.length > 3 && (
                              <span className="px-2 py-1 text-xs text-neo-purple font-mono font-bold">
                                +{project.stack.length - 3}_MORE
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="pt-2">
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-neo-purple text-neo-white font-bold px-3 py-2 border-2 border-neo-white hover:bg-neo-white hover:text-neo-black transition-colors duration-200 font-mono uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Github className="w-4 h-4 stroke-[3]" />
                            VIEW_CODE
                          </motion.a>
                        </div>
                      </div>

                      {/* Mini status */}
                      <div className="absolute bottom-1 right-1 bg-neo-purple text-neo-white px-2 py-1 font-mono text-xs font-bold border border-neo-white">
                        ACTIVE
                      </div>
                    </div>
                  </ParallaxElement>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {/* Call to action terminal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <ParallaxElement speed={0.3}>
            <div className="bg-neo-white text-neo-black border-8 border-neo-black p-8 max-w-2xl mx-auto relative">
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>
              
              {/* Terminal header */}
              <div className="bg-neo-black text-neo-white p-3 border-4 border-neo-purple mb-6 flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 border-2 border-neo-white"></div>
                <div className="w-4 h-4 bg-yellow-500 border-2 border-neo-white"></div>
                <div className="w-4 h-4 bg-green-500 border-2 border-neo-white"></div>
                <span className="font-mono font-bold ml-3">COLLABORATION.exe</span>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-neo-purple stroke-[3]" />
                    <h3 className="text-2xl font-black font-mono uppercase tracking-wider">
                      HAVE_PROJECT_IN_MIND?
                    </h3>
                  </div>
                  <div className="bg-neo-black text-neo-white p-4 border-4 border-neo-purple font-mono">
                    LET'S COLLABORATE AND BUILD SOMETHING AMAZING TOGETHER.
                  </div>
                </div>

                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-neo-purple text-neo-white font-bold text-lg px-6 py-4 border-4 border-neo-black hover:bg-neo-black hover:text-neo-purple transition-colors duration-200 font-mono uppercase tracking-wider"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  START_CONVERSATION.sh
                </motion.button>
              </div>
            </div>
          </ParallaxElement>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 