import { Category } from './Category';
import { Comment } from './Comment';
import { Image } from './Image';
import { Tag } from './Tag';

export interface Service {
  id: number;
  title: string;
  images: Image[];
  category_id: number;
  tags_id: number[];

  rating: number;
  commentsCount: number;
  comments: Comment[];

  category: Category;
  tags: Tag[];
}
