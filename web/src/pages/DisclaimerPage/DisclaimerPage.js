import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import FatalErrorPage from '../FatalErrorPage/FatalErrorPage'
const DisclaimerPage = () => {
  return (
    <div className="grow flex flex-col items-center justify-center">
      <FatalErrorPage></FatalErrorPage>
      <MetaTags title="VIBE CHECK" description="vibe check page" />
      <div className="bg-yellow rounded-sm px-4 py-2 ">
        <p className="heading-text text-red">pre flight check</p>
        <p className="font-main">
          EPHEM.FM is yr new fave music discovery service. Our propietary{' '}
          <span className="text-red">vibe-seeking algorithm </span> will find
          live radio shows that match <span className="text-red">Yr Vibe™</span>
        </p>
        <li>
          <ul></ul>
        </li>
      </div>
    </div>
  )
}

export default DisclaimerPage
