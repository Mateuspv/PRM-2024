export interface ICategory {
    id?: number;
    name: string;
    active: boolean;
  }
  
export interface IMovie {
    id?: string;
    title: string;
    description: string;
    ageRating: string;
    poster: string;
}