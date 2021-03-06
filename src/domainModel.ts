export type Resource = 'books' | 'reviews';

export type ReviewCreate = Pick<ReviewApiItem, 'body' | 'rating' | 'author' | 'publicationDate'> & {
  book: string;
};

export type ReviewApiCollection = Omit<ReviewApiItem, '@context'>;

export interface ReviewApiItem {
  '@id': string;
  id: string;
  '@type': string;
  '@context': string;
  body: string;
  rating: number;
  letter: string | null;
  book: Pick<BookApiItem, '@id' | '@type' | 'title'>;
  author: string;
  publicationDate: string;
  attributes: ReviewApiItem;
}

export type BookCreate = Pick<
  BookApiItem,
  'isbn' | 'title' | 'description' | 'author' | 'publicationDate'
>;

export type BookApiCollection = Omit<BookApiItem, '@context'>;

export interface BookApiItem {
  '@id': string;
  id: string;
  '@type': string;
  '@context': string;
  isbn: string;
  title: string;
  description: string;
  author: string;
  publicationDate: string;
  reviews: Pick<ReviewApiItem, '@id' | '@type' | 'body'>[];
  attributes: BookCreate;
  relationships?: { reviews: { data: ReviewApiItem[] } };
}
