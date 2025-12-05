export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ImageFormats {
  large?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  thumbnail?: ImageFormat;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  url: string;
  formats: ImageFormats | null;
  alternativeText: string | null;
}

export interface Blog {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string | null;
  author: string | null;
  published_date: string;
  createdAt: string;
  featured?: StrapiImage; 
  images?: StrapiImage[];
}

export interface BlogResponse {
  data: Blog[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}