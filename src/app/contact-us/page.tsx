import BusinessAccount from '../../components/BusinessAccount/BusinessAccount'
import HeroBanner from './HeroBanner'
import ReadyBusiness from '../../components/ReadyBusiness/ReadyBusiness'
import Contact from './Contact'
import Testimonials from '@/components/Testimonials/Testimonials'

const page = () => {
  return (
    <div>
      <HeroBanner />
      <Contact />
      <BusinessAccount />
      <Testimonials />
      <ReadyBusiness />
    </div>
  )
}

export default page