import HeroBanner from '@/components/HeroBanner/HeroBanner'
import StillNotSure from './StillNotSure'
import CommonQuesttion from './CommonQuesttion'
import Trail from './Trail'

const page = () => {
  return (
    <div>
      <HeroBanner title='Frequently asked questions' desc='We envision a world where businesses of all sizes can harness the full
          potential of technology to achieve their goals, no matter how
          ambitious they may be.' image='/assets/images/faq/banner-img.webp' btn='Contact Us' />
      <CommonQuesttion />
      <StillNotSure />
      <Trail />
    </div>
  )
}

export default page