import type { StrapiImage } from "./blog";

export interface StrapiMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: string | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  related: Array<{
    id: number;
    documentId: string;
  }>;
  folder: {
    id: number;
    documentId: string;
  } | null;
  folderPath: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  createdBy: {
    id: number;
    documentId: string;
  } | null;
  updatedBy: {
    id: number;
    documentId: string;
  } | null;
  locale: string | null;
  localizations: Array<{
    id: number;
    documentId: string;
  }>;
}

export interface SearchBar {
  id: number;
  placeholder: string;
  button_text: string;
}

export interface QuickLink {
  id: number;
  icon: StrapiMedia;
  label: string;
  url: string;
}

export interface Hero {
  id: number;
  background_image: StrapiMedia;
  title: string;
  title_highlight: string;
  subtitle: string;
  search_bar: SearchBar;
  quick_links: QuickLink[];
}

export interface ActionLink {
  id: number;
  label: string;
  url: string;
  target: "_self" | "_blank";
  is_active: boolean;
}

export interface Header {
  id: number;
  title: string;
  title_highlight: string;
  subtitle: string;
  description: string;
  action_link: ActionLink;
}

export interface Tag {
  id: number;
  label: string;
}

export interface CTAButton {
  id: number;
  label: string;
  url: string;
  icon: StrapiMedia;
}

export interface Metadata {
  id: number;
  date: string;
  category: string;
  posted_time: string;
  read_time: string;
}

export interface FeaturedCard {
  id: number;
  image: StrapiMedia;
  title: string;
  description: string;
  rating: number;
  location: string;
  tags: Tag[];
  cta_button: CTAButton;
  metadata: Metadata;
}

export interface TopAttractions {
  id: number;
  header: Header;
  featured_cards: FeaturedCard[];
}

export interface Guide {
  id: number;
  title: string;
  description: string;
  file: StrapiMedia;
  button_text: string;
}

export interface DownloadableGuides {
  id: number;
  background_image: StrapiMedia;
  header: Header;
  guides: Guide[];
}

export interface PrimaryButton {
  id: number;
  label: string;
  url: string;
  icon: StrapiMedia;
}

export interface PromotionalBanner {
  id: number;
  date: string;
  background_image: StrapiMedia;
  title: string;
  subtitle: string;
  primary_button: PrimaryButton;
  embedded_images: StrapiMedia[];
  video_url: string | null;
  video_thumbnail: StrapiMedia | null;
}

export interface SEO {
  id: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  og_image: StrapiMedia;
  canonical_url: string;
}

export interface HomeLocalization {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  hero: Hero;
  seo: SEO;
  top_attractions: TopAttractions;
  downloadable_guides: DownloadableGuides;
  promotional_banner: PromotionalBanner;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  createdBy: {
    id: number;
    documentId: string;
  } | null;
  updatedBy: {
    id: number;
    documentId: string;
  } | null;
  locale: string;
  localizations: Array<{
    id: number;
    documentId: string;
  }>;
}

export interface Home {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  hero: Hero;
  seo: SEO;
  top_attractions: TopAttractions;
  downloadable_guides: DownloadableGuides;
  promotional_banner: PromotionalBanner;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  createdBy: {
    id: number;
    documentId: string;
  } | null;
  updatedBy: {
    id: number;
    documentId: string;
  } | null;
  locale: string;
  localizations: HomeLocalization[];
}

export interface HomeResponse {
  data: Home;
  meta: Record<string, unknown>;
}

