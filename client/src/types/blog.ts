export interface Media {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  } | null;
}

export interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    content: string;
    publishedAt: string | null;
    createdAt: string;
    updatedAt: string;
    cover: Media;
  };
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ApiResponse<T> {
  data: T;
  meta: {
    pagination: PaginationMeta;
  };
}

export interface PostFormData {
  title: string;
  slug: string;
  description: string;
  content: string;
  cover: File | null;
  publishedAt: string | null;
} 