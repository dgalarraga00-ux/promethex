import SplashScreen from '@/components/ui/SplashScreen'
import { Hero } from '@/components/sections/Hero'
import { EliteStack } from '@/components/sections/EliteStack'
import ServicesGrid from '@/components/sections/ServicesGrid'
import Consultation from '@/components/sections/Consultation'
import { Pricing } from '@/components/sections/Pricing'
import { IAReady } from '@/components/sections/IAReady'
import { Portfolio } from '@/components/sections/Portfolio'
import { WhyUs } from '@/components/sections/WhyUs'
import { Contact } from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'
import AIAssistant from '@/components/ui/AIAssistant'

export default function Home() {
  return (
    <main>
      <SplashScreen />
      <Hero />
      <EliteStack />
      <ServicesGrid />
      <Consultation />
      <Pricing />
      <IAReady />
      <Portfolio />
      <WhyUs />
      <Contact />
      <FAQ />
      <Footer />
      <AIAssistant />
    </main>
  )
}
