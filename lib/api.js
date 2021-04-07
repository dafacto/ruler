import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();

  const allPosts = slugs.map((slug) => getPostBySlug(slug, fields));

  const posts = [];
  const pages = [];

  allPosts.forEach((post) => {
    if (post.hasOwnProperty('number')) {
      posts.push(post);
    } else {
      pages.push(post);
    }
  });

  // Sort posts by number in ascending order
  posts.sort((post1, post2) => (post1.number > post2.number ? 1 : -1));

  return { posts, pages };
}
