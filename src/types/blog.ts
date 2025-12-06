export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface StrapiImage {
  documentId: string;
  url: string;
  formats?: {
     large?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    thumbnail?: ImageFormat;
  };
}

export interface BlogAttribute {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published_date: string;
  is_featured: boolean | null;
  featured?: StrapiImage;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface BlogResponse {
  data: BlogAttribute[];
  meta: {
    pagination: Pagination;
  };
}