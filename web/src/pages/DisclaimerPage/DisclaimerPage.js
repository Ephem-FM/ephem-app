import classNames from 'classnames'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DisclaimerPage = () => {
  return (
    <div className="grow flex flex-col items-center mt-[20%] lg:mt-[10%] px-4 font-main gap-4">
      <MetaTags title="VIBE CHECK" description="vibe check page" />
      <p className="heading-text text-yellow text-center font-bold lg:text-4xl"></p>
      <div className="inline-block">
        <div className="text-yellow w-[0px] overflow-hidden whitespace-nowrap animate-typing border-r-2 border-yellow heading-text">
          pre flight check{' '}
        </div>
      </div>
      <p className="lg:text-2xl text-yellow lg:max-w-[50%] text-center leading-loose">
        EPHEM.FM's propietary vibe discovery algorithm will match a radio
        station with your mood. Give us your phone and your mood. We'll provide
        The Vibes, guaranteed.{' '}
      </p>
      <Link
        to={routes.signup()}
        className="bg-yellow border-2 border-red rounded-sm px-2 py-1 shadow-red-glow hover:shadow-red-glow-lg"
      >
        <p className="caption-text text-red">roger</p>
      </Link>
    </div>
  )
}

export default DisclaimerPage
