import type { Image, User } from "./thingsToDo";

export interface ActionLink {
  id: number;
  label: string;
  url: string;
  target: string;
  is_active: boolean;
}

export interface Header {
  id: number;
  title: string;
  title_highlight: string | null;
  subtitle: string | null;
  description: string | null;
  action_link: ActionLink | null;
}

export interface VisaType {
  id: number;
  type: string;
  description: string;
  icon: Image;
}

export interface VisaSection {
  id: number;
  header: Header;
  visa_types: VisaType[];
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

export interface PlanYourTrip {
  id: number;
  documentId: string;
  title: string | null;
  slug: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  hero: Hero;
  visa_section: VisaSection;
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
  title: string | null;
  slug: string | null;
  hero: {
    id: number;
    title: string;
    background_image: Image;
    quick_links: any[];
  };
  visa_section: {
    id: number;
    header: {
      id: number;
      title: string;
    };
    visa_types: Array<{
      id: number;
      type: string;
      description: string;
    }>;
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

export interface PlanYourTripMeta {
  availableLocales: AvailableLocale[];
  availableStatus: AvailableStatus[];
}

export interface PlanYourTripResponse {
  data: PlanYourTrip;
  meta: PlanYourTripMeta;
}

