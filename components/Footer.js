import Link from 'next/link';
import Button from './Button';
import Ruler from './Ruler';
import { footerLinks } from '../lib/constants';

const Footer = () => {
  return (
    <footer className='relative text-center text-white'>
      <Ruler />
      <div className='flex flex-col items-center px-4 pt-16 pb-8 space-y-6 text-center sm:px-0 sm:space-y-12 md:pt-24 sm:pt-20'>
        <h3 className='block text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl'>
          Ready to get started with Ruler?
        </h3>
        <Button external={true} href='https://app.rulerprotocol.com/'>
          Connect to the Ruler App
        </Button>
        <div className='flex flex-col items-center space-y-6'>
          <ul className='flex space-x-6'>
            {footerLinks.map(({ name, href }) => {
              return (
                <li key={name}>
                  <Link href={href}>
                    <a className='block p-2 sm:text-lg hover:text-ruler'>
                      {name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className='flex justify-center space-x-6 text-white'>
            <li>
              <a
                href='https://rulerprotocol.medium.com/'
                target='_blank'
                rel='noopener'
                className='hover:text-ruler'
              >
                <span className='sr-only'>Medium</span>
                <svg
                  className='w-6 h-6 fill-current'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fillRule='evenodd'
                  clipRule='evenodd'
                >
                  <path d='M2.846 6.887a.928.928 0 00-.303-.784l-2.24-2.7V3h6.958l5.378 11.795L17.367 3H24v.403L22.084 5.24a.561.561 0 00-.213.538v13.498a.56.56 0 00.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537V8.321l-5.389 13.688h-.728L4.28 8.321v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404H0v-.404l2.521-3.058c.27-.279.39-.67.325-1.052V6.887z' />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='https://t.me/rulerprotocol'
                target='_blank'
                rel='noopener'
                className='hover:text-ruler'
              >
                <span className='sr-only'>Telegram</span>
                <svg
                  className='w-6 h-6 fill-current'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  strokeLinejoin='round'
                  strokeMiterlimit='1.414'
                >
                  <path d='M18.384 22.779a1.19 1.19 0 001.107.145 1.16 1.16 0 00.724-.84C21.084 18 23.192 7.663 23.983 3.948a.78.78 0 00-.26-.758.8.8 0 00-.797-.14C18.733 4.602 5.82 9.447.542 11.4a.827.827 0 00-.542.799c.012.354.25.661.593.764 2.367.708 5.474 1.693 5.474 1.693s1.452 4.385 2.209 6.615c.095.28.314.5.603.576a.866.866 0 00.811-.207l3.096-2.923s3.572 2.619 5.598 4.062zm-11.01-8.677l1.679 5.538.373-3.507 10.185-9.186a.277.277 0 00.033-.377.284.284 0 00-.376-.064L7.374 14.102z' />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='https://discord.com/invite/XcAQKg2YGP'
                target='_blank'
                rel='noopener'
                className='hover:text-ruler'
              >
                <span className='sr-only'>Discord</span>
                <svg
                  className='w-6 h-6 fill-current'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fillRule='evenodd'
                  clipRule='evenodd'
                >
                  <path d='M19.54 0A2.466 2.466 0 0122 2.472V24l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22H3.46A2.466 2.466 0 011 18.696V2.472A2.466 2.466 0 013.46 0h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524a9.782 9.782 0 00-6.036-1.128l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012a7.898 7.898 0 001.74-.516c.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z' />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/Ruler-Protocol'
                target='_blank'
                rel='noopener'
                className='hover:text-ruler'
              >
                <span className='sr-only'>Github</span>
                <svg
                  className='w-6 h-6 fill-current'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z' />
                </svg>
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/RulerProtocol'
                target='_blank'
                rel='noopener'
                className='hover:text-ruler'
              >
                <span className='sr-only'>Twitter</span>
                <svg
                  className='w-6 h-6 fill-current'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
