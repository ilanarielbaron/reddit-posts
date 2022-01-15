interface IPost {
  index: number;
  title: string;
  author: string;
  entryDate: string;
  image?: string;
  commentsCount: number;
  isRead: boolean;
  disable: boolean;
  fullname: string;
}