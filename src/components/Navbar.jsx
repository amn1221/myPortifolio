import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/nav'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display text-base font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-copper/15 font-mono text-xs text-copper">YM</span>
          Yesgat&nbsp;Mulu
        </a>

        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider text-ink-soft md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="border-b border-transparent pb-0.5 transition hover:border-copper hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-md bg-copper px-5 py-2.5 font-display text-sm font-semibold text-white shadow-lg shadow-copper/20 transition hover:brightness-110"
          >
            Hire Me
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line-strong"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line px-6 py-4 font-mono text-sm uppercase tracking-wider md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="block py-2 text-ink-soft hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-md bg-copper px-4 py-2.5 text-center font-display text-sm normal-case tracking-normal text-white">
              Hire Me
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
