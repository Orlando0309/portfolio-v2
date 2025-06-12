import { motion } from 'framer-motion'
import { Quote, Star, MessageSquare, User, ThumbsUp } from 'lucide-react'
import ParallaxElement from '../ParallaxElement'

interface TestimonialsProps {
  content: {
    testimonials: Array<{
      id: number
      name: string
      role: string
      company: string
      content: string
      avatar: string
    }>
  }
}

const Testimonials = ({ content }: TestimonialsProps) => {
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

  return (
    <section id="testimonials" className="py-20 bg-neo-black relative overflow-hidden">
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
            <MessageSquare className="w-12 h-12 text-neo-purple stroke-[3]" />
            <h2 className="text-5xl md:text-7xl font-black font-mono text-neo-white uppercase tracking-wider">
              REVIEWS
            </h2>
            <MessageSquare className="w-12 h-12 text-neo-purple stroke-[3]" />
          </div>
          <div className="h-2 bg-neo-purple mb-8 max-w-md mx-auto" />
          <div className="bg-neo-white text-neo-black p-4 border-4 border-neo-black font-mono text-lg max-w-3xl mx-auto">
            FEEDBACK FROM COLLEAGUES AND CLIENTS I'VE HAD THE PLEASURE TO WORK WITH
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group"
            >
              <ParallaxElement speed={0.1 * (index + 1)}>
                <div className={`${index % 2 === 0 ? 'bg-neo-white text-neo-black' : 'bg-neo-black text-neo-white border-neo-purple'} border-8 border-neo-black p-8 h-full relative`}>
                  {/* Corner decorations */}
                  <div className={`absolute -top-3 -left-3 w-12 h-12 ${index % 2 === 0 ? 'bg-neo-purple' : 'bg-neo-white'} border-4 border-neo-black`}></div>
                  <div className={`absolute -bottom-3 -right-3 w-12 h-12 ${index % 2 === 0 ? 'bg-neo-purple' : 'bg-neo-white'} border-4 border-neo-black`}></div>

                  {/* Terminal header */}
                  <div className={`${index % 2 === 0 ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'} p-3 border-4 ${index % 2 === 0 ? 'border-neo-purple' : 'border-neo-black'} mb-6 flex items-center gap-3`}>
                    <div className="w-3 h-3 bg-red-500 border border-current"></div>
                    <div className="w-3 h-3 bg-yellow-500 border border-current"></div>
                    <div className="w-3 h-3 bg-green-500 border border-current"></div>
                    <span className="font-mono font-bold ml-2">REVIEW_{String(testimonial.id).padStart(2, '0')}.txt</span>
                  </div>

                  <div className="flex flex-col h-full">
                    {/* Rating system */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono font-bold uppercase text-sm tracking-wider">
                        RATING:
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-4 h-4 border-2 ${index % 2 === 0 ? 'border-neo-black bg-neo-purple' : 'border-neo-white bg-neo-purple'}`}
                          />
                        ))}
                      </div>
                      <span className="font-mono font-bold text-lg">5.0</span>
                    </div>

                    {/* Quote icon and content */}
                    <div className="flex-grow space-y-4">
                      <div className="flex items-start gap-3">
                        <Quote className={`w-8 h-8 ${index % 2 === 0 ? 'text-neo-purple' : 'text-neo-purple'} stroke-[3] mt-1`} />
                        <div className={`${index % 2 === 0 ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'} p-4 border-4 ${index % 2 === 0 ? 'border-neo-purple' : 'border-neo-black'} font-mono leading-relaxed flex-grow`}>
                          {testimonial.content}
                        </div>
                      </div>
                    </div>

                    {/* Author info */}
                    <div className="mt-6 pt-4 border-t-4 border-current">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className={`w-16 h-16 ${index % 2 === 0 ? 'bg-neo-purple border-neo-black' : 'bg-neo-purple border-neo-white'} border-4 flex items-center justify-center`}>
                            <User className={`w-8 h-8 ${index % 2 === 0 ? 'text-neo-white' : 'text-neo-white'} stroke-[3]`} />
                          </div>
                          {/* Status indicator */}
                          <div className={`absolute -top-1 -right-1 w-4 h-4 ${index % 2 === 0 ? 'bg-green-500 border-neo-black' : 'bg-green-500 border-neo-white'} border-2`}></div>
                        </div>
                        <div className="flex-grow">
                          <div className="font-mono font-black text-lg uppercase tracking-wide mb-1">
                            {testimonial.name}
                          </div>
                          <div className="font-mono font-bold text-sm uppercase tracking-wider opacity-80">
                            {testimonial.role}
                          </div>
                          <div className="font-mono font-bold text-xs uppercase tracking-widest opacity-60">
                            @ {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Verification badge */}
                    <div className={`absolute top-4 right-4 ${index % 2 === 0 ? 'bg-neo-black text-neo-white' : 'bg-neo-white text-neo-black'} px-2 py-1 border-2 border-current flex items-center gap-1`}>
                      <ThumbsUp className="w-3 h-3 stroke-[3]" />
                      <span className="font-mono font-bold text-xs">VERIFIED</span>
                    </div>
                  </div>
                </div>
              </ParallaxElement>
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
          <ParallaxElement speed={0.3}>
            <div className="bg-neo-white text-neo-black border-8 border-neo-black p-8 max-w-2xl mx-auto relative">
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>
              
              {/* Terminal header */}
              <div className="bg-neo-black text-neo-white p-3 border-4 border-neo-purple mb-6 flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 border-2 border-neo-white"></div>
                <div className="w-4 h-4 bg-yellow-500 border-2 border-neo-white"></div>
                <div className="w-4 h-4 bg-green-500 border-2 border-neo-white"></div>
                <span className="font-mono font-bold ml-3">JOIN_CLIENT_LIST.exe</span>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Star className="w-8 h-8 text-neo-purple stroke-[3]" />
                    <h3 className="text-2xl font-black font-mono uppercase tracking-wider">
                      WANT_TO_WORK_TOGETHER?
                    </h3>
                  </div>
                  <div className="bg-neo-black text-neo-white p-4 border-4 border-neo-purple font-mono">
                    JOIN THE LIST OF SATISFIED CLIENTS AND LET'S CREATE SOMETHING AMAZING.
                  </div>
                </div>

                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-neo-purple text-neo-white font-bold text-lg px-6 py-4 border-4 border-neo-black hover:bg-neo-black hover:text-neo-purple transition-colors duration-200 font-mono uppercase tracking-wider"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  START_PROJECT.exe
                </motion.button>
              </div>
            </div>
          </ParallaxElement>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 