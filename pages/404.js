import { NextSeo } from 'next-seo';
import Button from '../components/Button';
import Header from '../components/Header';

const NotFound = () => {
  return (
    <>
      <NextSeo title='Page not found' />
      <Header>
        <Header.H1>Page not found</Header.H1>
        <div className='py-20'>
          <Button href='/'>Back to homepage</Button>
        </div>
      </Header>
    </>
  );
};

export default NotFound;
