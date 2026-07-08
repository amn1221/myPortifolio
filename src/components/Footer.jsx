export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-6 py-10 font-mono text-[11.5px] text-ink-faint md:px-8">
      <span>© {new Date().getFullYear()} Yesgat Mulu Tsehay. IT Support &amp; Fullstack Developer.</span>
      <a href="#top" className="hover:text-copper">Back to top ↑</a>
    </footer>
  )
}
