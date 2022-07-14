import Marquee from 'react-fast-marquee'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import Logo from './logo.png'

const MainLayout = ({ children }) => {
  const { logOut } = useAuth()

  return (
    <>
      <header>
        <Link
          to={routes.landing()}
          className="absolute top-0 ml-4 mt-4 hover:scale-[125%] hover:translate-x-1/4 transition-all ease-in-out duration-regular"
        >
          <img
            src={Logo}
            alt={'ephem logo'}
            className="max-w-[30px] max-h-[30px] transition-all"
          />
        </Link>
        <button
          onClick={logOut}
          className="absolute top-0 right-0 mr-4 mt-4 hover:scale-[125%] transition-all ease-in-out duration-regular"
        >
          <p className="font-weird uppercase text-xl text-red">y</p>
        </button>
      </header>
      <main className="flex flex-col grow">{children}</main>
      <footer className="fixed bottom-0">
        <Marquee gradient={false}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
            <p key={item} className="caption-text text-yellow">
              ephem.fm is an fda approved vibe curator.
              <span>&nbsp;&nbsp;</span>
            </p>
          ))}
        </Marquee>
      </footer>
    </>
  )
}

export default MainLayout
