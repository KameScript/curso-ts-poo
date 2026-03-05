import { Category } from './category.model';

// --- Quicktype ---
// Permite transformar un archivo JSON en el tipado correspondiente para tipar nuestras respuestas HTTP.
// http://quicktype.io/
export interface Product {
  id:          number;
  title:       string;
  slug:        string;
  price:       number;
  description: string;
  category:    Category;
  images:      string[];
  creationAt:  Date;
  updatedAt:   Date;
}
