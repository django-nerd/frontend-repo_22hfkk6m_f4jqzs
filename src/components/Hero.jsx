import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/50 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
        <div className="max-w-3xl">
          <p className="text-blue-300/80 text-sm tracking-widest uppercase mb-3">Portfolio • Product • Interaction</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Crafting engaging, accessible customer experiences
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            I blend user research, design systems, and motion to build digital products that feel intuitive and memorable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-2.5 font-medium hover:bg-slate-100 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/20 text-white px-5 py-2.5 font-medium hover:bg-white/10 transition">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}
