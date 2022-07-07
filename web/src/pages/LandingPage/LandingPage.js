import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Logo from './logo.png'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="EPHEM.FM" description="fm landing page" />
      <Link
        to={routes.login()}
        className="absolute top-0 right-0 mr-4 mt-4 btn-red"
      >
        <p className="text-yellow caption-text">request new vibe</p>
      </Link>
      <div className="min-w-full min-h-[90vh] flex flex-col justify-center items-center">
        <img src={Logo} alt="fm logo" className="lg:max-w-[65%] mx-auto"></img>
        <Link to={routes.disclaimer()} className="mt-8 btn-yellow">
          <p className="font-black text-red font-main heading-text">enter</p>
        </Link>
      </div>
    </>
  )
}

export default LandingPage
