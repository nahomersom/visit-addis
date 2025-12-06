import type { StrapiMedia } from "./home";

export interface ActionLink {
  id: number;
  label: string;
  url: string;
  target: "_self" | "_blank";
  is_active: boolean;
}

export interface TravelTipHeader {
  id: number;
  title: string;
  title_highlight: string | null;
  subtitle: string | null;
  description: string | null;
  action_link: ActionLink | null;
}

export interface TravelTipItem {
  id: number;
  icon: StrapiMedia;
  title: string;
  short_description: string;
  description: string;
}

export interface TravelTip {
  id: number;
  documentId: string;
  header: TravelTipHeader;
  tips: TravelTipItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  status?: string;
  localizations: Array<{
    id: number;
    documentId: string;
    locale: string | null;
    updatedAt: string;
    createdAt: string;
    publishedAt: string | null;
    header: {
      id: number;
      title: string;
    };
    createdBy: {
      id: number;
      firstname: string;
      lastname: string;
      username: string | null;
      email: string;
      isActive: boolean;
    };
    updatedBy: {
      id: number;
      firstname: string;
      lastname: string;
      username: string | null;
      email: string;
      isActive: boolean;
    };
    status?: string;
  }>;
}

export interface TravelTipMeta {
  availableLocales?: Array<{
    id: number;
    documentId: string;
    locale: string | null;
    updatedAt: string;
    createdAt: string;
    publishedAt: string | null;
    header: {
      id: number;
      title: string;
    };
    createdBy: {
      id: number;
      firstname: string;
      lastname: string;
      username: string | null;
      email: string;
      isActive: boolean;
    };
    updatedBy: {
      id: number;
      firstname: string;
      lastname: string;
      username: string | null;
      email: string;
      isActive: boolean;
    };
    status?: string;
  }>;
  availableStatus?: Array<{
    id: number;
    documentId: string;
    locale: string | null;
    updatedAt: string;
    createdAt: string;
    publishedAt: string | null;
    createdBy: {
      id: number;
      firstname: string;
      lastname: string;
      username: string | null;
      email: string;
      isActive: boolean;
    };
    updatedBy: {
      id: number;
      firstname: string;
      lastname: string;
      username: string | null;
      email: string;
      isActive: boolean;
    };
  }>;
}

export interface TravelTipResponse {
  data: TravelTip;
  meta: TravelTipMeta;
}

