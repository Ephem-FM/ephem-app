import { useState, useEffect, useRef } from 'react'

import Marquee from 'react-fast-marquee'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import FadeIn from 'src/components/fadeIn'
import Loading from 'src/components/loading'

import Logo from './logo.png'

const MainLayout = ({ children }) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()
  const [loading, setLoading] = useState(true)
  const [device, setDevice] = useState()

  const audioRef = useRef()
  const toggleAudio = (ref) => {
    ref?.current?.paused ? ref?.current?.play() : ref?.current?.pause()
  }
  useEffect(() => {
    window.addEventListener('keydown', () => toggleAudio(audioRef))
    setDevice(window.outerWidth < 600 ? 'MOBILE' : 'DESKTOP')
    return () => window.removeEventListener('keydown', toggleAudio(audioRef))
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2600)
    return () => clearTimeout(timer)
  })

  return loading ? (
    <Loading />
  ) : (
    <FadeIn>
      <header>
        <Link
          onClick={() => device == 'MOBILE' && toggleAudio()}
          to={routes.landing()}
          className="absolute top-0 ml-4 mt-4 hover:scale-[125%] hover:translate-x-1/4 transition-all ease-in-out duration-regular"
        >
          <img
            src={Logo}
            alt={'ephem logo'}
            className="max-w-[30px] max-h-[30px] transition-all"
          />
        </Link>
        {isAuthenticated && (
          <>
            <audio
              className="hidden"
              ref={audioRef}
              src="https://t4.bcbits.com/stream/d86b96d11eefb7f7fbf96fe0a180733f/mp3-128/4153722682?p=0&ts=1658433496&t=a1abe1889ca75ffe24f87432d1309d7bed01838f&token=1658433496_9aca2e4480777c464ecd21a078e43a2a4a9397bf"
            >
              <track kind="captions"></track>
            </audio>
            <div className="absolute top-0 right-0 mr-4 mt-4">
              <div className="flex items-center gap-2">
                <p className="caption-text text-yellow">
                  ALIAS: {currentUser.username}
                </p>
                <button onClick={logOut}>
                  <p className="font-weird uppercase text-sm text-red">y</p>
                </button>
              </div>
            </div>
          </>
        )}
      </header>
      <main className="flex flex-col grow">{children}</main>
      <footer className="fixed bottom-0">
        <Marquee gradient={false}>
          {[...Array(25).keys()].map((item) => {
            if (item % 3 == 0) {
              return (
                <p key={item} className="text-yellow caption-text">
                  ephem.fm is an fda approved vibe curator.
                  <span>&nbsp;&nbsp;</span>
                </p>
              )
            }
            if (item % 3 == 1) {
              return (
                <p key={item} className="text-red caption-text">
                  press {device == 'MOBILE' ? `logo` : `any key`} to vibe
                  <span>&nbsp;&nbsp;</span>
                </p>
              )
            }
            if (item == 10 || item == 20) {
              return (
                <p key={item} className="text-grey caption-text">
                  {`<3 to kerri chandler for the vibes`}
                  <span>&nbsp;&nbsp;</span>
                </p>
              )
            }
            if (item == 15) {
              return (
                <p key={item} className="text-red caption-text">
                  {`hey mom <3`}
                  <span>&nbsp;&nbsp;</span>
                </p>
              )
            }
          })}
        </Marquee>
      </footer>
    </FadeIn>
  )
}

export default MainLayout
