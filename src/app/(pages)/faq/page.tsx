import HeroBanner from './HeroBanner'
import StillNotSure from './StillNotSure'
import CommonQuesttion from './CommonQuesttion'
import Trail from './Trail'

const page = () => {
  return (
    <div>
      <HeroBanner />
      <CommonQuesttion />
      <StillNotSure />
      <Trail />
    </div>
  )
}

export default page