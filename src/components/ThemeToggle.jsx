import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const initialLight = stored === 'light'
    setIsLight(initialLight)
    document.documentElement.classList.toggle('light', initialLight)
  }, [])

  const toggle = () => {
    const next = !isLight
    setIsLight(next)
    document.documentElement.classList.toggle('light', next)
    localStorage.setItem('theme', next ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-line-strong text-ink-soft transition hover:border-copper hover:text-copper"
    >
      {isLight ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  )
}
