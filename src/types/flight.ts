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
  subtitle: string;
  description: string | null;
  action_link: ActionLink | null;
}

export interface Flight {
  id: number;
  documentId: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  header: Header;
  logos: Image[];
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
  description: string | null;
  header: {
    id: number;
    title: string;
  };
  createdBy: User;
  updatedBy: User;
  status: string;
}

export interface FlightMeta {
  availableLocales: AvailableLocale[];
}

export interface FlightResponse {
  data: Flight;
  meta: FlightMeta;
}

