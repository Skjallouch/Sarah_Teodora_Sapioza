import { Author } from '../../authors/services/author.service';
export interface BlogArticle {
  id?: number;
  title: string;
  content: string;
  authorName: string;
  hairColor?: string;
  hairLength?: string;
  haircut?: string;
  isRead: any[]; // Par exemple, une liste d'objets ou d'IDs
}
