import { useState } from 'react'
import RealityCheck from './components/RealityCheck'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import SeoSection from './components/SeoSection'
import Marketing from './components/Marketing'
import Dashboard from './components/Dashboard'
import Benefits from './components/Benefits'
import WhyNeed from './components/WhyNeed'
import Process from './components/Process'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  const [showRealityCheck, setShowRealityCheck] = useState(() => !window.location.hash || window.location.hash === '#top')
  if (showRealityCheck) return <RealityCheck onComplete={() => { setShowRealityCheck(false); window.scrollTo(0, 0) }} />
  return (
    <div className="min-h-screen bg-mist text-ink">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Problem />
        <HowItWorks />
        <SeoSection />
        <Marketing />
        <Dashboard />
        <WhyNeed />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
