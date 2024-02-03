import React from 'react'
import HeroBanner from './HeroBanner'
import HowWorks from './HowWorks'
import InOneApp from './InOneApp'
import Start from './Start'
import Plans from '@/app/pricing/Plans'
import LatestNews from './LatestNews'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <HowWorks />
      <InOneApp />
      <Start />
      <Plans />
      <LatestNews />
    </div>
  )
}

export default Home