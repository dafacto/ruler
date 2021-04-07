import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import glob from 'glob';

const postsDirectory = join(process.cwd(), '_posts');
const pagesDirectory = join(process.cwd(), '_pages');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPageSlugs() {
  return fs.readdirSync(pagesDirectory);
}

export function getBySlug(slug, fields = []) {
  // Extract real slug from slug (e.g. 01_ruler.md --> ruler)
  let realSlug = slug.replace(/\.md$/, '');
  realSlug = realSlug.split('_').pop();

  // Check posts and pages directory for file
  let file = null;

  [file] = glob.sync(join(postsDirectory, `*${realSlug}.md`));

  if (!file) {
    [file] = glob.sync(join(pagesDirectory, `*${realSlug}.md`));
  }

  const fileContents = fs.readFileSync(file, 'utf8');
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

export function getPosts(fields = []) {
  const posts = getPostSlugs();

  const allPosts = posts.map((post) => getBySlug(post, fields));

  // Sort posts by number in ascending order
  allPosts.sort((post1, post2) => (post1.number > post2.number ? 1 : -1));

  return allPosts;
}

export function getPages(fields) {
  const pages = getPageSlugs();

  const allPages = pages.map((page) => getBySlug(page, fields));

  return allPages;
}
