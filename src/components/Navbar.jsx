import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-semibold text-white text-lg tracking-tight">CX/UX Designer</a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm transition-colors">Let’s Talk</a>
          </nav>
          <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-3 pt-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-200 py-2" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-sm transition-colors" onClick={() => setOpen(false)}>
                Let’s Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
