import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    try {
      setStatus('Sending...')
      // In a real project this would POST to your backend/email API
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks — I will get back to you soon!')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something great</h2>
          <p className="text-slate-300 mt-2">Email: <a className="underline underline-offset-4 decoration-white/30 hover:decoration-white" href="mailto:eng.mohamedhigazy@gmail.com">eng.mohamedhigazy@gmail.com</a></p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" required className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <input name="email" type="email" placeholder="Email" required className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          </div>
          <input name="subject" placeholder="Subject" className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <textarea name="message" rows="5" placeholder="Message" required className="bg-slate-900/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <div className="flex items-center gap-4">
            <button type="submit" className="inline-flex items-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 font-medium transition">Send Message</button>
            <p className="text-sm text-slate-400">{status}</p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
