import type { Image, User } from "./thingsToDo";

export interface Header {
  id: number;
  title: string;
  title_highlight: string | null;
  subtitle: string | null;
  description: string | null;
  action_link: any | null;
}

export interface Hero {
  id: number;
  title: string;
  title_highlight: string | null;
  subtitle: string;
  background_image: Image;
  search_bar: any | null;
  quick_links: any[];
}

export interface DurationButton {
  id: number;
  label: string;
  icon: Image;
}

export interface Itineraries {
  id: number;
  description: string | null;
  header: Header;
  duration_buttons: DurationButton[];
}

export interface Guide {
  id: number;
  title: string;
  description: string;
  button_text: string;
  file: Image;
}

export interface DownloadableGuides {
  id: number;
  background_image: Image;
  header: Header;
  guides: Guide[];
}

export interface TransportMethod {
  id: number;
  name: string;
  description: string | null;
  icon: Image;
}

export interface GettingAround {
  id: number;
  header: Header;
  transport_methods: TransportMethod[];
}

export interface GuideData {
  id: number;
  documentId: string;
  title: string | null;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  hero: Hero;
  itineraries: Itineraries;
  downloadable_guides: DownloadableGuides;
  getting_around: GettingAround;
  video_section: any | null;
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
  title: string | null;
  hero: {
    id: number;
    title: string;
    background_image: Image;
    quick_links: any[];
  };
  itineraries: {
    id: number;
    description: string | null;
    header: {
      id: number;
      title: string;
    };
    duration_buttons: Array<{
      id: number;
      label: string;
    }>;
  };
  downloadable_guides: {
    id: number;
    header: {
      id: number;
      title: string;
    };
    guides: Array<{
      id: number;
      title: string;
      description: string;
      button_text: string;
      file: Image;
    }>;
  };
  getting_around: {
    id: number;
    header: {
      id: number;
      title: string;
    };
    transport_methods: Array<{
      id: number;
      name: string;
      description: string | null;
      icon: Image;
    }>;
  };
}

export interface GuideMeta {
  availableLocales: AvailableLocale[];
}

export interface GuideResponse {
  data: GuideData;
  meta: GuideMeta;
}

