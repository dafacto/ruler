import Image from 'next/image';
import Link from 'next/link';

const H1 = ({ children }) => {
  return (
    <h1 className='block pb-5 text-4xl font-extrabold tracking-tight sm:pb-6 sm:text-5xl'>
      {children}
    </h1>
  );
};

const SubHeading = ({ children }) => {
  return (
    <p className='mx-auto text-lg font-medium text-gray-300 sm:font-semibold sm:text-xl'>
      {children}
    </p>
  );
};

const Header = ({ children }) => {
  return (
    <header className='relative px-6 pt-10 text-center text-white sm:pb-10 sm:pt-16'>
      <Link href='/'>
        <a className='relative block h-6 mx-auto mb-12 sm:h-8 w-28 sm:w-40 sm:mb-16 md:mb-20'>
          <Image layout='fill' src='/logo.png' alt='Ruler' />
        </a>
      </Link>
      <div className='max-w-3xl mx-auto'>{children}</div>
    </header>
  );
};

Header.H1 = H1;
Header.SubHeading = SubHeading;

export default Header;
