export interface Activity {
  id: number
  documentId: string
  title: string
  slug: string | null
  description: string
  short_description: string
  location: string
  coordinates: any | null
  rating: number
  featured: any | null
  is_published: boolean
  published_date: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface ActivityType {
  id: number
  documentId: string
  name: string
  slug: string
  category: string
  description: string | null
  is_published: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string | null
  icon: any | null
  activities: Activity[]
}

export interface ActivityTypePagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface ActivityTypeMeta {
  pagination: ActivityTypePagination
}

export interface ActivityTypeResponse {
  data: ActivityType[]
  meta: ActivityTypeMeta
}

// Activity response types for /activities endpoint
export interface ActivityImage {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    large?: {
      ext: string
      url: string
      hash: string
      mime: string
      name: string
      path: string | null
      size: number
      width: number
      height: number
      sizeInBytes: number
      provider_metadata: {
        public_id: string
        resource_type: string
      }
    }
    small?: {
      ext: string
      url: string
      hash: string
      mime: string
      name: string
      path: string | null
      size: number
      width: number
      height: number
      sizeInBytes: number
      provider_metadata: {
        public_id: string
        resource_type: string
      }
    }
    medium?: {
      ext: string
      url: string
      hash: string
      mime: string
      name: string
      path: string | null
      size: number
      width: number
      height: number
      sizeInBytes: number
      provider_metadata: {
        public_id: string
        resource_type: string
      }
    }
    thumbnail?: {
      ext: string
      url: string
      hash: string
      mime: string
      name: string
      path: string | null
      size: number
      width: number
      height: number
      sizeInBytes: number
      provider_metadata: {
        public_id: string
        resource_type: string
      }
    }
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: {
    public_id: string
    resource_type: string
  }
  folderPath: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string | null
  folder: string | null
}

export interface ActivityItem {
  id: number
  documentId: string
  title: string
  slug: string | null
  description: string
  short_description: string
  location: string | null
  rating: number | null
  featured: any | null
  is_published: boolean | null
  published_date: string | null
  createdAt: string
  updatedAt: string
  publishedAt: string | null
  locale: string | null
  bannerImage: ActivityImage | null
  activity_type: {
    id: number
    documentId: string
    name: string
    slug: string
    category: string
    description: string | null
    is_published: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string | null
    locale: string | null
    icon: any | null
    activities: any[]
  } | null
  images: ActivityImage[] | null
  coordinates: any[]
  tags: any | null
  createdBy: {
    id: number
    firstname: string
    lastname: string
    username: string | null
    email: string
    isActive: boolean
  }
  updatedBy: {
    id: number
    firstname: string
    lastname: string
    username: string | null
    email: string
    isActive: boolean
  }
  localizations: any[]
  status: string
}

export interface ActivityPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface ActivityResponse {
  data: ActivityItem[]
  meta: {
    pagination: ActivityPagination
  }
}

