import gsap from 'gsap'
import { Suspense, lazy, useEffect, useRef } from 'react'
import SceneErrorBoundary from './components/SceneErrorBoundary'

const Scene = lazy(() => import('./components/Scene'))

function App() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    gsap.fromTo(
      heroRef.current.children,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
    )
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08060d]">
      <div
        ref={heroRef}
        className="relative z-10 flex min-h-screen flex-col items-start justify-center gap-4 px-8 sm:px-16"
      >
        <p className="text-sm tracking-[0.3em] text-purple-300 uppercase">
          Stan Loosmore
        </p>
        <h1 className="max-w-2xl text-5xl font-medium tracking-tight text-white sm:text-7xl">
          Building things on the web.
        </h1>
        <p className="max-w-md text-lg text-gray-400">
          Personal site scaffold — Vite, React, React Three Fiber, and GSAP.
        </p>
      </div>

      <div className="absolute inset-0 z-0">
        <SceneErrorBoundary>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </SceneErrorBoundary>
      </div>
    </main>
  )
}

export default App
