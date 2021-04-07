import Footer from '../components/Footer';
import Header from '../components/Header';
import PostsScroller from '../components/PostsScroller';
import { getPostBySlug, getAllPosts } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import { NextSeo } from 'next-seo';

const Post = ({ post, posts, pages }) => {
  const { number, title, intro, content } = post;

  return (
    <>
      <NextSeo title={title} description={intro} />
      <Header>
        <Header.H1>{title}</Header.H1>
        <Header.SubHeading>{intro}</Header.SubHeading>
      </Header>
      <main
        className='px-4 py-16 mx-auto prose md:py-24 sm:py-20 sm:prose-lg sm:px-6 md:px-0'
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {number && <PostsScroller posts={posts} />}
      <Footer links={pages} />
    </>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'number',
    'title',
    'intro',
    'content',
  ]);
  const content = await markdownToHtml(post.content || '');

  const { posts, pages } = getAllPosts(['number', 'slug', 'title', 'intro']);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      posts,
      pages,
    },
  };
}

export async function getStaticPaths() {
  const { posts, pages } = getAllPosts(['slug']);

  const allPosts = posts.concat(pages);

  return {
    paths: allPosts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
