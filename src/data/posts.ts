// Published articles. Add a new entry at the top each time a post goes live
// on Substack. The Writing section shows a Substack call to action when this
// list is empty.
export interface Post {
  title: string;
  excerpt: string;
  date: string; // e.g. "Nov 12, 2026"
  readTime: string; // e.g. "6 min read"
  url: string; // full Substack post URL
}

export const posts: Post[] = [];
