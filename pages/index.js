import { getAllPosts } from '../lib/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = ({ posts }) => {
  return (
    <>
      <Header>
        <div className='pb-3 sm:pb-5 md:pb-8'>
          <span className='text-lg font-medium tracking-wide sm:text-xl md:text-2xl sm:font-semibold'>
            A Beginner's Guide to
          </span>
        </div>
        <Header.H1>Ruler Protocol</Header.H1>
        <Header.SubHeading>
          The leader in peer-to-peer DeFi credit!
        </Header.SubHeading>
      </Header>
      <main className='py-16 mx-auto md:py-24 sm:py-20'>
        <ol className='grid max-w-5xl gap-4 px-4 mx-auto sm:px-10 md:gap-10 md:grid-cols-2'>
          {posts.map(({ number, slug, title, intro }) => {
            return (
              <li key={slug}>
                <Card href={`/${slug}`} number={number}>
                  <Card.Heading>{title}</Card.Heading>
                  <Card.Text>{intro}</Card.Text>
                </Card>
              </li>
            );
          })}
        </ol>
      </main>
      <Footer />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { posts } = getAllPosts(['number', 'slug', 'title', 'intro']);

  return {
    props: { posts },
  };
}
