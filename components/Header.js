import Ruler from './Ruler';
import Image from 'next/image';
import Link from 'next/link';

const H1 = ({ children }) => {
  return (
    <h1 className='block pb-8 text-4xl font-extrabold tracking-tight md:pb-12 sm:text-5xl md:text-6xl'>
      {children}
    </h1>
  );
};

const SubHeading = ({ children }) => {
  return (
    <p className='mx-auto text-lg font-medium sm:font-semibold sm:text-xl md:text-2xl'>
      {children}
    </p>
  );
};

const Header = ({ children }) => {
  return (
    <header className='relative text-center text-white'>
      <div className='px-4 py-16 md:py-24 sm:py-20 sm:px-0'>
        <Link href='/'>
          <a className='relative block h-6 mx-auto mb-12 sm:h-8 w-28 sm:w-40 sm:mb-16 md:mb-20'>
            <Image layout='fill' src='/logo.png' alt='Ruler' />
          </a>
        </Link>
        <div className='max-w-3xl mx-auto'>{children}</div>
      </div>
      <Ruler />
    </header>
  );
};

Header.H1 = H1;
Header.SubHeading = SubHeading;

export default Header;
