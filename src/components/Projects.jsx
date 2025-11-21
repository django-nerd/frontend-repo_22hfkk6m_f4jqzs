const sampleProjects = [
  {
    title: 'E-commerce Redesign',
    tags: ['CX Strategy', 'Design System', 'Usability'],
    desc: 'Improved checkout conversion by 18% via streamlined IA, accessibility upgrades, and motion micro-interactions.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Banking App Onboarding',
    tags: ['UX Research', 'Prototyping', 'Motion'],
    desc: 'Reduced time-to-value with progressive onboarding and contextual guidance across web and mobile.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'SaaS Analytics Dashboard',
    tags: ['Information Architecture', 'UI Design', 'Accessibility'],
    desc: 'Built modular components and patterns to simplify complex data while keeping it delightful and discoverable.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwQW5hbHl0aWNzJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjM3NTQ4NjB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="text-slate-300 mt-2">Case studies that highlight process, impact, and measurable outcomes.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((p) => (
            <article key={p.title} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 hover:bg-slate-900/60 transition">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
