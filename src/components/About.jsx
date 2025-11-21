export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m a CX/UX designer focused on crafting human-centered products. My toolkit spans discovery research, journey mapping, prototyping, and design systems. I love collaborating with engineering and product to turn insights into simple, elegant experiences.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-white/10 p-4 bg-slate-900/40">
                <p className="text-slate-400">Strengths</p>
                <p className="text-white mt-1">IA, Design Systems, Motion, A11y</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-slate-900/40">
                <p className="text-slate-400">Tools</p>
                <p className="text-white mt-1">Figma, FigJam, Framer, Notion</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
            <h3 className="text-white font-semibold">Awards & Highlights</h3>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li>2024 Design System of the Year · ADA compliant</li>
              <li>2023 Best Onboarding Experience · ProductHunt Golden Kitty nominee</li>
              <li>Spoken at local design meetups about journey analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
