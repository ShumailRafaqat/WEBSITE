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
