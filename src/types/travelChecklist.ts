import type { Image, User } from "./thingsToDo";

export interface ChecklistItem {
  id: number;
  label: string;
  icon: Image;
}

export interface Tip {
  id: number;
  text: string;
  icon: Image;
}

export interface TravelChecklist {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  items: ChecklistItem[];
  tip: Tip;
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
  title: string;
  subtitle: string;
  items: Array<{
    id: number;
    label: string;
  }>;
  tip: {
    id: number;
    text: string;
  };
  createdBy: User;
  updatedBy: User;
  status: string;
}

export interface TravelChecklistMeta {
  availableLocales: AvailableLocale[];
}

export interface TravelChecklistResponse {
  data: TravelChecklist;
  meta: TravelChecklistMeta;
}

