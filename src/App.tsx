import gsap from 'gsap'
import { useEffect, useRef } from 'react'

const links = [
  { label: 'GitHub', href: 'https://github.com/Sloosmore' },
]

function App() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power2.out' },
    )
  }, [])

  return (
    <main className="min-h-screen bg-white px-6 font-sans text-neutral-900">
      <div
        ref={contentRef}
        className="mx-auto flex max-w-xl flex-col gap-10 pt-[22vh] pb-24"
      >
        <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
          Stan Loosmore
        </h1>

        <div className="space-y-5 text-[17px] leading-relaxed text-neutral-600">
          <p>
            I build software, mostly for the web. I like small, fast tools and
            interfaces that get out of the way.
          </p>
          <p>
            Lately I've been spending time on developer tooling, a bit of
            graphics programming, and learning to make things that feel good
            to use. Outside of that: long walks, too much coffee, and a
            growing stack of half-read books.
          </p>
        </div>

        <ul className="flex gap-6 text-[15px]">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default App
