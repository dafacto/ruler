import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Card from './Card';

const PostsScroller = ({ posts }) => {
  const { query } = useRouter();

  const containerEl = useRef(null);
  const currentEl = useRef(null);

  useEffect(() => {
    const container = containerEl.current;
    const current = currentEl.current;

    if (container && current) {
      const offset = container.offsetWidth / 2 - current.offsetWidth / 2;

      container.scrollTo(current.offsetLeft - offset, 0);
    }
  }, [query.slug]);

  return (
    <ol
      ref={containerEl}
      className='flex w-full px-4 py-8 space-x-5 overflow-x-auto snap snap-x hide-scrollbar md:no-snap snap-mandatory sm:space-x-8 sm:py-12 sm:px-6 md:py-16 md:px-8'
    >
      {posts.map(({ number, slug, title, intro }) => {
        const active = query.slug === slug;
        return (
          <li key={slug} ref={active ? currentEl : null}>
            <Card
              number={number}
              href={`/${slug}`}
              active={active}
              additionalClasses='min-w-56 sm:min-w-72 md:min-w-96 snap-center'
            >
              <Card.Heading>{title}</Card.Heading>
              <Card.Text>{intro}</Card.Text>
            </Card>
          </li>
        );
      })}
      <li aria-hidden='true' className='flex-shrink-0 block w-1' />
    </ol>
  );
};

export default PostsScroller;
