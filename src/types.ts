export interface Post {
  data: {
    title: string;
    pubDate: Date;
    description: string;
    author: string;
    tags: string[];
  };
  slug: string;
  image: {
    url: string;
    alt: string;
  };
}
