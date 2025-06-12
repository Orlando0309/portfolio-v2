import { motion } from 'framer-motion'
import { Code, Database, Brain, Zap, Terminal, Cpu } from 'lucide-react'
import ParallaxElement from '../ParallaxElement'

interface SkillsProps {
  content: {
    skills: string[]
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

  const skillCategories = {
    "LANGUAGES": {
      skills: ["Python", "JavaScript", "TypeScript"],
      icon: Terminal,
      color: "bg-neo-purple"
    },
    "FRAMEWORKS": {
      skills: ["Django", "React", "FastAPI"],
      icon: Code,
      color: "bg-neo-white"
    },
    "AI_ML": {
      skills: ["LangChain", "Scikit-learn", "Pandas"],
      icon: Brain,
      color: "bg-neo-purple"
    },
    "DATABASES": {
      skills: ["PostgreSQL", "SQL/NoSQL", "Prisma"],
      icon: Database,
      color: "bg-neo-white"
    },
    "TOOLS": {
      skills: ["Docker", "Git", "JWT"],
      icon: Cpu,
      color: "bg-neo-purple"
    }
  }

  const getSkillsForCategory = (categorySkills: string[]) => {
    return content.skills.filter(skill => categorySkills.includes(skill))
  }

  const remainingSkills = content.skills.filter(skill => 
    !Object.values(skillCategories).flatMap(cat => cat.skills).includes(skill)
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
            {Object.entries(skillCategories).map(([category, config], index) => {
              const categorySkills = getSkillsForCategory(config.skills)
              if (categorySkills.length === 0) return null

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
                        {categorySkills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            className={`p-3 border-4 border-neo-black ${isWhiteBg ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'} font-mono font-bold`}
                            whileHover={{ scale: 1.05, rotate: skillIndex % 2 === 0 ? 1 : -1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="uppercase tracking-wide">{skill}</span>
                              <div className={`w-3 h-3 ${isWhiteBg ? 'bg-neo-purple' : 'bg-neo-purple'} border-2 border-current`}></div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Status indicator */}
                      <div className={`absolute bottom-2 right-2 ${isWhiteBg ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'} px-2 py-1 font-mono text-xs font-bold border-2 border-current`}>
                        {categorySkills.length}_LOADED
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
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-24 h-24 mx-auto mb-4 bg-neo-black border-8 border-neo-purple flex items-center justify-center relative">
                      <Brain className="w-12 h-12 text-neo-purple stroke-[3]" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-neo-white border-2 border-neo-black"></div>
                    </div>
                    <h4 className="text-xl font-black font-mono mb-2 uppercase">AI/ML_DEV</h4>
                    <div className="bg-neo-black text-neo-white p-3 border-4 border-neo-purple font-mono text-sm">
                      BUILDING INTELLIGENT SYSTEMS WITH MODERN AI FRAMEWORKS
                    </div>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-24 h-24 mx-auto mb-4 bg-neo-purple border-8 border-neo-black flex items-center justify-center relative">
                      <Code className="w-12 h-12 text-neo-white stroke-[3]" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-neo-white border-2 border-neo-black"></div>
                    </div>
                    <h4 className="text-xl font-black font-mono mb-2 uppercase">FULL_STACK</h4>
                    <div className="bg-neo-black text-neo-white p-3 border-4 border-neo-purple font-mono text-sm">
                      END-TO-END WEB APPLICATION DEVELOPMENT
                    </div>
                  </motion.div>

                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-24 h-24 mx-auto mb-4 bg-neo-black border-8 border-neo-purple flex items-center justify-center relative">
                      <Database className="w-12 h-12 text-neo-purple stroke-[3]" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-neo-white border-2 border-neo-black"></div>
                    </div>
                    <h4 className="text-xl font-black font-mono mb-2 uppercase">DATA_ANALYSIS</h4>
                    <div className="bg-neo-black text-neo-white p-3 border-4 border-neo-purple font-mono text-sm">
                      EXTRACTING INSIGHTS FROM COMPLEX DATASETS
                    </div>
                  </motion.div>
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