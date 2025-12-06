import type { StrapiMedia } from "./home";
import type { ActionLink } from "./home";

export interface SocialHighlight {
  id: number;
  documentId: string;
  image: StrapiMedia;
  title: string;
  author_avatar: StrapiMedia;
  author_name: string;
  location: string;
  likes_count: number;
  views_count: number;
  rating: number;
  action_link: ActionLink | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  localizations: Array<{
    id: number;
    documentId: string;
    image: StrapiMedia;
    title: string;
    author_avatar: StrapiMedia;
    author_name: string;
    location: string;
    likes_count: number;
    views_count: number;
    rating: number;
    action_link: ActionLink | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    locale: string | null;
  }>;
}

export interface SocialHighlightsPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface SocialHighlightsMeta {
  pagination: SocialHighlightsPagination;
}

export interface SocialHighlightsResponse {
  data: SocialHighlight[];
  meta: SocialHighlightsMeta;
}

