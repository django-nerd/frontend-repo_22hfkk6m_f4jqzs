import { motion } from 'framer-motion'

export default function Experience() {
  const items = [
    { role: 'Senior Product Designer', company: 'Acme Corp', time: '2022 — Present', points: ['Led end-to-end design for core growth initiatives', 'Established component library and tokens', 'Mentored 4 designers'] },
    { role: 'UX Designer', company: 'Fintech Labs', time: '2020 — 2022', points: ['Shipped responsive web + mobile flows', 'Introduced research ops framework', 'Increased activation by 12%'] },
    { role: 'CX Analyst', company: 'RetailCo', time: '2018 — 2020', points: ['Mapped omnichannel journeys', 'Defined NPS program and VoC insights', 'Partnered with product and support'] },
  ]

  return (
    <section id="experience" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
          <p className="text-slate-300 mt-2">A blend of product, UX, and CX across high-growth teams.</p>
        </div>

        <ol className="relative border-l border-white/10 ml-3">
          {items.map((item, i) => (
            <motion.li
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-500"></span>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-white font-semibold">{item.role} · {item.company}</h3>
                <span className="text-slate-400 text-sm">{item.time}</span>
              </div>
              <ul className="mt-2 list-disc list-inside text-slate-300 text-sm space-y-1">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
