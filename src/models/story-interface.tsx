export interface IStory {
  id: string;
  title: string;
  author: author;
  date: string;
  content: string;
  branch_url: string;
  thumbnail: thumbnail;
}

interface author {
  author_url: string;
  avatar: string;
  name: string
}

interface thumbnail {
  desktop: string;
  location: string;
  images: {
    large: string;
    medium: string;
    small: string;
  }
}
