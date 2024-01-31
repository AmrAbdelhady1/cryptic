import BusinessAccount from '../../components/BusinessAccount/BusinessAccount'
import HeroBanner from './HeroBanner'
import ReadyBusiness from '../../components/ReadyBusiness/ReadyBusiness'
import Contact from './Contact'

const page = () => {
  return (
    <div>
      <HeroBanner />
      <Contact />
      <BusinessAccount />
      <ReadyBusiness />
    </div>
  )
}

export default page