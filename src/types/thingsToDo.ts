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
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    thumbnail?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  folderPath: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  folder: string | null;
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string | null;
  email: string;
  isActive: boolean;
}

export interface Hero {
  id: number;
  title: string;
  title_highlight: string;
  subtitle: string;
  background_image: Image;
  search_bar: any | null;
  quick_links: any[];
}

export interface Header {
  id: number;
  title: string;
  title_highlight: string | null;
  subtitle: string;
  description: string | null;
  action_link: any | null;
}

export interface Tag {
  id: number;
  label: string;
}

export interface FeaturedCard {
  id: number;
  title: string;
  description: string;
  rating: number;
  location: string | null;
  image: Image;
  tags: Tag[];
  cta_button: any | null;
  metadata: any | null;
}

export interface Activities {
  id: number;
  header: Header;
  activity_types: any[];
}

export interface MostLoved {
  id: number;
  header: Header;
  featured_cards: FeaturedCard[];
}

export interface Button {
  id: number;
  label: string;
  url: string | null;
  icon: any | null;
}

export interface PlanYourDay {
  id: number;
  title: string;
  description: string;
  background_image: Image | null;
  buttons: Button[];
}

export interface IconicPlaceItem {
  id: number;
  title: string;
  description: string;
  image: Image;
  action_link: any | null;
}

export interface IconicPlaces {
  id: number;
  items: IconicPlaceItem[];
}

export interface SEO {
  id: number;
  [key: string]: any;
}

export interface ThingsToDo {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  hero: Hero;
  activities: Activities;
  seo: SEO | null;
  most_loved: MostLoved;
  plan_your_day: PlanYourDay;
  iconic_places: IconicPlaces;
  createdBy: User;
  updatedBy: User;
  localizations: any[];
  status: string;
}

export interface AvailableLocale {
  id: number;
  documentId: string;
  locale: string | null;
  updatedAt: string;
  createdAt: string;
  publishedAt: string | null;
  slug: string;
  title: string;
  hero: {
    id: number;
    title: string;
    background_image: Image;
    quick_links: any[];
  };
  activities: {
    id: number;
    header: {
      id: number;
      title: string;
    };
  };
  most_loved: {
    id: number;
    header: {
      id: number;
      title: string;
    };
    featured_cards: Array<{
      id: number;
      title: string;
      tags: Tag[];
    }>;
  };
  plan_your_day: {
    id: number;
    title: string;
  };
  createdBy: User;
  updatedBy: User;
  status: string;
}

export interface AvailableStatus {
  id: number;
  documentId: string;
  locale: string | null;
  updatedAt: string;
  createdAt: string;
  publishedAt: string | null;
  createdBy: User;
  updatedBy: User;
}

export interface ThingsToDoMeta {
  availableLocales: AvailableLocale[];
  availableStatus: AvailableStatus[];
}

export interface ThingsToDoResponse {
  data: ThingsToDo;
  meta: ThingsToDoMeta;
}

