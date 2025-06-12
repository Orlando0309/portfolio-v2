import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, MessageSquare, Terminal, Zap, CheckCircle, XCircle } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import ParallaxElement from '../ParallaxElement'
import { emailConfig } from '../../config/email'

interface ContactProps {
  content: {
    contact: {
      email: string
      phone: string
      location: string
      social: {
        linkedin: string
        github: string
        twitter: string
        instagram: string
      }
    }
  }
}

const Contact = ({ content }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('idle')

    try {
      // Check if EmailJS is properly configured
      if (emailConfig.publicKey === 'YOUR_PUBLIC_KEY' || !emailConfig.serviceId || !emailConfig.templateId) {
        // Demo mode - simulate email sending
        console.log('Demo mode: Email would be sent with:', formData)
        await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate network delay
        setStatus('success')
        setStatusMessage('DEMO_MODE: EMAIL_SIMULATION_SUCCESS')
        setFormData({ name: '', email: '', subject: '', message: '' })
        return
      }

      // Template parameters for EmailJS
      const now = new Date()
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: content.contact.email, // Your email where you want to receive messages
        sent_date: now.toLocaleDateString(),
        sent_time: now.toLocaleTimeString(),
      }

      // Send email using EmailJS
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams, emailConfig.publicKey)
      
      // Success
      setStatus('success')
      setStatusMessage('MESSAGE_SENT_SUCCESSFULLY')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      // Error handling
      console.error('Email sending failed:', error)
      setStatus('error')
      setStatusMessage('TRANSMISSION_FAILED: PLEASE_TRY_AGAIN')
    } finally {
      setIsLoading(false)
    }
  }

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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const socialLinks = [
    { name: 'LINKEDIN', url: content.contact.social.linkedin, icon: Linkedin, color: 'bg-neo-purple' },
    { name: 'GITHUB', url: content.contact.social.github, icon: Github, color: 'bg-neo-black' },
    { name: 'TWITTER', url: content.contact.social.twitter, icon: Twitter, color: 'bg-neo-purple' },
    { name: 'INSTAGRAM', url: content.contact.social.instagram, icon: Instagram, color: 'bg-neo-black' }
  ]

  return (
    <section id="contact" className="py-20 bg-neo-black relative overflow-hidden">
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
              CONNECT
            </h2>
            <MessageSquare className="w-12 h-12 text-neo-purple stroke-[3]" />
          </div>
          <div className="h-2 bg-neo-purple mb-8 max-w-md mx-auto" />
          <div className="bg-neo-white text-neo-black p-4 border-4 border-neo-black font-mono text-lg max-w-3xl mx-auto">
            READY TO DISCUSS YOUR NEXT PROJECT OR JUST WANT TO SAY HELLO? I'D LOVE TO HEAR FROM YOU.
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Info Terminal */}
            <ParallaxElement speed={0.2}>
              <div className="bg-neo-white text-neo-black border-8 border-neo-black p-8 relative">
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>

                {/* Terminal header */}
                <div className="bg-neo-black text-neo-white p-3 border-4 border-neo-purple mb-6 flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 border-2 border-neo-white"></div>
                  <div className="w-4 h-4 bg-yellow-500 border-2 border-neo-white"></div>
                  <div className="w-4 h-4 bg-green-500 border-2 border-neo-white"></div>
                  <span className="font-mono font-bold ml-3">CONTACT_INFO.exe</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-8 h-8 text-neo-purple stroke-[3]" />
                  <h3 className="text-2xl font-black font-mono uppercase tracking-wider">
                    GET_IN_TOUCH
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center gap-4 p-4 border-4 border-neo-black bg-neo-purple text-neo-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-neo-white border-4 border-neo-black flex items-center justify-center">
                      <Mail className="w-6 h-6 text-neo-black stroke-[3]" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-mono font-bold text-sm uppercase tracking-wider mb-1">EMAIL:</p>
                      <a 
                        href={`mailto:${content.contact.email}`}
                        className="font-mono font-bold text-lg hover:text-neo-black transition-colors"
                      >
                        {content.contact.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4 p-4 border-4 border-neo-black bg-neo-black text-neo-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-neo-white border-4 border-neo-purple flex items-center justify-center">
                      <Phone className="w-6 h-6 text-neo-black stroke-[3]" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-mono font-bold text-sm uppercase tracking-wider mb-1 text-neo-purple">PHONE:</p>
                      <p className="font-mono font-bold text-lg">{content.contact.phone}</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center gap-4 p-4 border-4 border-neo-black bg-neo-purple text-neo-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-neo-white border-4 border-neo-black flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-neo-black stroke-[3]" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-mono font-bold text-sm uppercase tracking-wider mb-1">LOCATION:</p>
                      <p className="font-mono font-bold text-lg">{content.contact.location}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ParallaxElement>

            {/* Social Links Terminal */}
            <ParallaxElement speed={0.3}>
              <div className="bg-neo-black text-neo-white border-8 border-neo-purple p-8 relative">
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-neo-white border-4 border-neo-black"></div>

                {/* Terminal header */}
                <div className="bg-neo-white text-neo-black p-3 border-4 border-neo-black mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 border border-current"></div>
                  <div className="w-3 h-3 bg-yellow-500 border border-current"></div>
                  <div className="w-3 h-3 bg-green-500 border border-current"></div>
                  <span className="font-mono font-bold ml-2 text-sm">social_links.sh</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-6 h-6 text-neo-purple stroke-[3]" />
                  <h3 className="text-xl font-black font-mono uppercase tracking-wider">
                    FOLLOW_ME
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 border-4 border-neo-white ${social.color} text-neo-white font-mono font-bold hover:bg-neo-white hover:text-neo-black transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5 stroke-[3]" />
                      <span className="text-sm uppercase tracking-wide">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </ParallaxElement>
          </motion.div>

          {/* Contact Form Terminal */}
          <motion.div variants={itemVariants}>
            <ParallaxElement speed={0.25}>
              <form onSubmit={handleSubmit} className="bg-neo-white text-neo-black border-8 border-neo-black p-8 relative">
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-neo-purple border-4 border-neo-black"></div>

                {/* Terminal header */}
                <div className="bg-neo-black text-neo-white p-3 border-4 border-neo-purple mb-6 flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 border-2 border-neo-white"></div>
                  <div className="w-4 h-4 bg-yellow-500 border-2 border-neo-white"></div>
                  <div className="w-4 h-4 bg-green-500 border-2 border-neo-white"></div>
                  <span className="font-mono font-bold ml-3">MESSAGE_FORM.exe</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-8 h-8 text-neo-purple stroke-[3]" />
                  <h3 className="text-2xl font-black font-mono uppercase tracking-wider">
                    SEND_MESSAGE
                  </h3>
                </div>

                {/* Status Message */}
                {status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 border-4 ${
                      status === 'success' 
                        ? 'bg-green-500 border-neo-black text-neo-white' 
                        : 'bg-red-500 border-neo-black text-neo-white'
                    } font-mono font-bold flex items-center gap-3`}
                  >
                    {status === 'success' ? (
                      <CheckCircle className="w-6 h-6 stroke-[3]" />
                    ) : (
                      <XCircle className="w-6 h-6 stroke-[3]" />
                    )}
                    <span className="uppercase tracking-wide">{statusMessage}</span>
                  </motion.div>
                )}
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-mono font-bold text-sm uppercase tracking-wider mb-2">
                        NAME:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 border-4 border-neo-black bg-neo-black text-neo-white font-mono placeholder-neo-gray focus:outline-none focus:border-neo-purple transition-colors disabled:opacity-50"
                        placeholder="your_name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-mono font-bold text-sm uppercase tracking-wider mb-2">
                        EMAIL:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        className="w-full px-4 py-3 border-4 border-neo-black bg-neo-black text-neo-white font-mono placeholder-neo-gray focus:outline-none focus:border-neo-purple transition-colors disabled:opacity-50"
                        placeholder="your.email@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block font-mono font-bold text-sm uppercase tracking-wider mb-2">
                      SUBJECT:
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 border-4 border-neo-black bg-neo-black text-neo-white font-mono placeholder-neo-gray focus:outline-none focus:border-neo-purple transition-colors disabled:opacity-50"
                      placeholder="project_collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono font-bold text-sm uppercase tracking-wider mb-2">
                      MESSAGE:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      rows={6}
                      className="w-full px-4 py-3 border-4 border-neo-black bg-neo-black text-neo-white font-mono placeholder-neo-gray focus:outline-none focus:border-neo-purple transition-colors resize-none disabled:opacity-50"
                      placeholder="tell_me_about_your_project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full font-bold text-lg px-6 py-4 border-4 border-neo-black font-mono uppercase tracking-wider flex items-center justify-center gap-3 transition-colors duration-200 ${
                      isLoading 
                        ? 'bg-neo-gray text-neo-black cursor-not-allowed' 
                        : 'bg-neo-purple text-neo-white hover:bg-neo-black hover:text-neo-purple'
                    }`}
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-6 h-6 border-2 border-neo-black border-t-transparent rounded-full animate-spin"></div>
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 stroke-[3]" />
                        EXECUTE_SEND.sh
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Status indicator */}
                <div className={`absolute top-4 right-4 px-3 py-1 border-2 font-mono text-xs font-bold ${
                  isLoading 
                    ? 'bg-yellow-500 border-neo-black text-neo-black' 
                    : 'bg-neo-black text-neo-white border-neo-purple'
                }`}>
                  {isLoading ? 'SENDING...' : 'READY'}
                </div>
              </form>
            </ParallaxElement>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 