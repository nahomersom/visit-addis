export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQ {
  id: number;
  documentId: string;
  title: string;
  items: FAQItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  locale: string | null;
  localizations: Array<{
    id: number;
    documentId: string;
    title: string;
    items: FAQItem[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    locale: string | null;
  }>;
}

export interface FAQResponse {
  data: FAQ;
  meta: Record<string, unknown>;
}

