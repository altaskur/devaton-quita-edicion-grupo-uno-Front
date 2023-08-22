import { Comment } from './Comment';

export interface User {
  id: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  image: string;
  zipcode: string;
  description: string;

  rating: number;
  comments?: Comment[];
  totalContractedServices?: number;
}
