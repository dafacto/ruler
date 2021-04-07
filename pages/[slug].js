import Footer from '../components/Footer';
import Header from '../components/Header';
import PostsScroller from '../components/PostsScroller';
import { getPosts, getPages, getBySlug } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import { NextSeo } from 'next-seo';

const Post = ({ post, posts }) => {
  const { number, title, intro, content } = post;

  return (
    <>
      <NextSeo title={title} description={intro} />
      <Header>
        <Header.H1>{title}</Header.H1>
        <Header.SubHeading>{intro}</Header.SubHeading>
      </Header>
      <main
        className='px-6 py-8 mx-auto prose sm:py-16 sm:prose-lg'
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {number && <PostsScroller posts={posts} />}
      <Footer />
    </>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const post = getBySlug(params.slug, ['number', 'title', 'intro', 'content']);
  const content = await markdownToHtml(post.content || '');

  const posts = getPosts(['number', 'slug', 'title', 'intro']);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      posts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getPosts(['slug']);
  const pages = getPages(['slug']);

  const all = posts.concat(pages);

  return {
    paths: all.map((item) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: false,
  };
}
