export interface Step {
  id: number
  number: number
  title: string
  description: string
}

export interface Header {
  id: number
  title: string
  title_highlight: string | null
  subtitle: string | null
  description: string
  action_link: any | null
}

export interface NumberedStepsSection {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string | null
  locale: string | null
  header: Header
  steps: Step[]
}

export interface NumberedStepsResponse {
  data: NumberedStepsSection
  meta: Record<string, unknown>
}

