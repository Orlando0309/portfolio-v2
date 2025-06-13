import { motion } from 'framer-motion'
import { Code, Database, Brain, Zap, Terminal, Cpu } from 'lucide-react'
import ParallaxElement from '../ParallaxElement'

interface SkillsProps {
  content: {
    skills: string[]
    techStack: Array<{
      name: string
      category: string
      icon: string
    }>
    competencies: Array<{
      title: string
      description: string
    }>
  }
}

const Skills = ({ content }: SkillsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  // Group techStack by category
  const groupedTechStack = content.techStack.reduce((acc, tech) => {
    const category = tech.category.toUpperCase()
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(tech)
    return acc
  }, {} as Record<string, typeof content.techStack>)

  // Define category configurations
  const categoryConfigs = {
    "LANGUAGES": { icon: Terminal, color: "bg-neo-purple" },
    "FRONTEND": { icon: Code, color: "bg-neo-white" },
    "BACKEND": { icon: Code, color: "bg-neo-purple" },
    "AI/ML": { icon: Brain, color: "bg-neo-white" },
    "DATABASE": { icon: Database, color: "bg-neo-purple" },
    "DEVOPS": { icon: Cpu, color: "bg-neo-white" }
  }

  // Get remaining skills that are not in techStack
  const techStackNames = content.techStack.map(tech => tech.name)
  const remainingSkills = content.skills.filter(skill => 
    !techStackNames.includes(skill)
  )

  return (
    <section id="skills" className="py-20 bg-neo-black relative overflow-hidden">
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
            <Terminal className="w-12 h-12 text-neo-purple stroke-[3]" />
            <h2 className="text-5xl md:text-7xl font-black font-mono text-neo-white uppercase tracking-wider">
              TECH_STACK
            </h2>
            <Terminal className="w-12 h-12 text-neo-purple stroke-[3]" />
          </div>
          <div className="h-2 bg-neo-purple mb-8 max-w-md mx-auto" />
          <div className="bg-neo-white text-neo-black p-4 border-4 border-neo-black font-mono text-lg max-w-3xl mx-auto">
            COMPREHENSIVE TOOLKIT FOR BUILDING INTELLIGENT, SCALABLE APPLICATIONS
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Skill Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedTechStack).map(([category, techs], index) => {
              if (techs.length === 0) return null

              const config = categoryConfigs[category as keyof typeof categoryConfigs] || 
                           { icon: Terminal, color: "bg-neo-purple" }
              const IconComponent = config.icon
              const isWhiteBg = config.color === "bg-neo-white"

              return (
                <motion.div 
                  key={category} 
                  variants={itemVariants}
                  className="relative"
                >
                  <ParallaxElement speed={0.2 * (index + 1)}>
                    <div className={`${config.color} ${isWhiteBg ? 'text-neo-black' : 'text-neo-white'} border-8 border-neo-black p-6 relative`}>
                      {/* Corner decorations */}
                      <div className={`absolute -top-3 -left-3 w-12 h-12 ${isWhiteBg ? 'bg-neo-purple' : 'bg-neo-white'} border-4 border-neo-black`}></div>
                      <div className={`absolute -top-3 -right-3 w-12 h-12 ${isWhiteBg ? 'bg-neo-purple' : 'bg-neo-white'} border-4 border-neo-black`}></div>

                      <div className="flex items-center gap-3 mb-6">
                        <IconComponent className={`w-8 h-8 ${isWhiteBg ? 'text-neo-purple' : 'text-neo-purple'} stroke-[3]`} />
                        <h3 className="text-xl font-black font-mono uppercase tracking-wider">
                          {category.replace('_', '/')}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {techs.map((tech, techIndex) => (
                          <motion.div
                            key={tech.name}
                            className={`p-3 border-4 border-neo-black ${isWhiteBg ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'} font-mono font-bold`}
                            whileHover={{ scale: 1.05, rotate: techIndex % 2 === 0 ? 1 : -1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="uppercase tracking-wide">{tech.name}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-lg">{tech.icon}</span>
                                <div className={`w-3 h-3 ${isWhiteBg ? 'bg-neo-purple' : 'bg-neo-purple'} border-2 border-current`}></div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Status indicator */}
                      <div className={`absolute bottom-2 right-2 ${isWhiteBg ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'} px-2 py-1 font-mono text-xs font-bold border-2 border-current`}>
                        {techs.length}_LOADED
                      </div>
                    </div>
                  </ParallaxElement>
                </motion.div>
              )
            })}
          </div>

          {/* Additional Skills Terminal */}
          {remainingSkills.length > 0 && (
            <motion.div variants={itemVariants}>
              <ParallaxElement speed={0.4}>
                <div className="bg-neo-black text-neo-white border-8 border-neo-purple p-8 relative">
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-neo-white border-4 border-neo-black"></div>
                  
                  {/* Terminal header */}
                  <div className="bg-neo-white text-neo-black p-3 border-4 border-neo-black mb-6 flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 border-2 border-neo-black"></div>
                    <div className="w-4 h-4 bg-yellow-500 border-2 border-neo-black"></div>
                    <div className="w-4 h-4 bg-green-500 border-2 border-neo-black"></div>
                    <span className="font-mono font-bold ml-3">ADDITIONAL_TECH.exe</span>
                  </div>

                  <div className="font-mono">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-neo-purple font-bold">SYSTEM@ORLANDO:~$</span>
                      <span className="text-neo-white">cat additional_skills.txt</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {remainingSkills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          className="bg-neo-purple text-neo-white p-3 border-2 border-neo-white font-bold text-center"
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {skill.toUpperCase()}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </ParallaxElement>
            </motion.div>
          )}

          {/* Core Competencies Dashboard */}
          <motion.div variants={itemVariants}>
            <ParallaxElement speed={0.3}>
              <div className="bg-neo-white text-neo-black border-8 border-neo-black p-8 relative">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>

                <div className="flex items-center gap-4 mb-8">
                  <Zap className="w-10 h-10 text-neo-purple stroke-[3]" />
                  <h3 className="text-3xl font-black font-mono uppercase tracking-wider">
                    CORE_COMPETENCIES
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {content.competencies.slice(0, 3).map((competency, index) => {
                    // Define icon mapping for different competency types
                    const getCompetencyIcon = (title: string) => {
                      const titleLower = title.toLowerCase()
                      if (titleLower.includes('ai') || titleLower.includes('ml') || titleLower.includes('rag') || titleLower.includes('nlp') || titleLower.includes('crewai') || titleLower.includes('mcp')) {
                        return Brain
                      } else if (titleLower.includes('full') || titleLower.includes('web') || titleLower.includes('api')) {
                        return Code
                      } else if (titleLower.includes('data') || titleLower.includes('database')) {
                        return Database
                      } else {
                        return Terminal
                      }
                    }

                    const IconComponent = getCompetencyIcon(competency.title)
                    const bgColors = ['bg-neo-black', 'bg-neo-purple', 'bg-neo-black']
                    const iconColors = ['text-neo-purple', 'text-neo-white', 'text-neo-purple']

                    return (
                      <motion.div
                        key={competency.title}
                        className="text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={`w-24 h-24 mx-auto mb-4 ${bgColors[index % bgColors.length]} border-8 border-neo-purple flex items-center justify-center relative`}>
                          <IconComponent className={`w-12 h-12 ${iconColors[index % iconColors.length]} stroke-[3]`} />
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-neo-white border-2 border-neo-black"></div>
                        </div>
                        <h4 className="text-xl font-black font-mono mb-2 uppercase">{competency.title.replace(/ /g, '_')}</h4>
                        <div className="bg-neo-black text-neo-white p-3 border-4 border-neo-purple font-mono text-sm">
                          {competency.description.toUpperCase()}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </ParallaxElement>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 