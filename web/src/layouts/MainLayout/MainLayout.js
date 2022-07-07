import Marquee from 'react-fast-marquee'

import { Link, routes } from '@redwoodjs/router'

import Logo from './logo.png'

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Link to={routes.landing()} className="absolute top-0 ml-4 mt-4">
          <img
            src={Logo}
            alt={'ephem logo'}
            className="max-w-[30px] max-h-[30px]"
          />
        </Link>
      </header>
      <main className="min-h-[75%] m-4">{children}</main>
      <footer className="fixed bottom-0">
        <Marquee gradient={false}>
          <p className="font-main font-black text-yellow uppercase tracking-tight">
            ephem.fm is an fda approved vibe curator.{' '}
          </p>
          <p className="font-main font-black text-yellow uppercase tracking-tight">
            ephem.fm is an fda approved vibe curator.{' '}
          </p>
          <p className="font-main font-black text-yellow uppercase tracking-tight">
            ephem.fm is an fda approved vibe curator.{' '}
          </p>
          <p className="font-main font-black text-yellow uppercase tracking-tight">
            ephem.fm is an fda approved vibe curator.{' '}
          </p>
        </Marquee>
      </footer>
    </>
  )
}

export default MainLayout
