
import { Link, routes } from '@redwoodjs/router'
import Marquee from "react-fast-marquee";
import Logo from './logo.png';

const MainLayout = ({ children }) => {

  return (
    <>
      {/* <header className='absolute top-0 ml-4 mt-4'>
        <Link to={routes.home()}>
          <img
            src={Logo}
            alt={'ephem logo'}
            className="max-w-[200px] max-h-[200px]"
          />
        </Link>
      </header> */}
      <main>{children}</main>
      <footer className='absolute bottom-0'>
        <Marquee gradient={false}>
          <p className='font-main font-black text-grey uppercase tracking-tight'>ephem.fm is an fda approved vibe curator. </p>
          <p className='font-main font-black text-grey uppercase tracking-tight'>ephem.fm is an fda approved vibe curator. </p>
          <p className='font-main font-black text-grey uppercase tracking-tight'>ephem.fm is an fda approved vibe curator. </p>
          <p className='font-main font-black text-grey uppercase tracking-tight'>ephem.fm is an fda approved vibe curator. </p>
        </Marquee>
      </footer>
    </>
  );
}

export default MainLayout
