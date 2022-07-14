import Marquee from 'react-fast-marquee'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import Logo from './logo.png'

const MainLayout = ({ children }) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()
  const timeDiff = () =>
    currentUser
      ? Math.round((new Date(currentUser.createdAt) - Date.now()) * 0.001) * -1
      : 0
  const [timeLeft, setTimeLeft] = React.useState(timeDiff())
  React.useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(timeDiff())
    }, 1000)

    return () => {
      clearTimeout(id)
    }
  })
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
        {isAuthenticated && (
          <div className="absolute top-0 right-0 mr-4 mt-4">
            <button onClick={logOut}>
              <div className="flex items-center gap-2">
                <p className="caption-text text-yellow">
                  ALIAS: {currentUser.username}
                </p>
                <p className="font-weird uppercase text-sm text-red">y</p>
              </div>
              <p className="caption-text text-yellow">
                vibe duration: <span className="text-red">{timeLeft} SEC</span>
              </p>
            </button>
          </div>
        )}
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
