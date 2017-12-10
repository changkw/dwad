export class Post {
    id?: string;
    title: string;
    content: string;
    date_created: Date;
    author_id: string;
    author_name: string;
    comments?: Comment[];
  }

export class Comment {
    id?: string;
    content: string;
    author_name: string;
    date_created?: Date;
}