import { ApiResponse, Post, PostFormData } from '@/types/blog';

const API_URL = 'http://localhost:1337';

export const api = {
  posts: {
    list: async (page: number, pageSize: number, search?: string): Promise<ApiResponse<Post[]>> => {
      const searchQuery = search ? `&filters[title][$containsi]=${search}` : '';
      const response = await fetch(
        `${API_URL}/api/posts?pagination[page]=${page}&pagination[pageSize]=${pageSize}${searchQuery}&sort=publishedAt:desc&populate=cover`
      );
      if (!response.ok) throw new Error('Failed to fetch posts');
      return response.json();
    },

    getBySlug: async (slug: string): Promise<ApiResponse<Post>> => {
      const response = await fetch(
        `${API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=cover`
      );
      if (!response.ok) throw new Error('Failed to fetch post');
      return response.json();
    },

    getById: async (id: number, token: string): Promise<ApiResponse<Post>> => {
      const response = await fetch(`${API_URL}/api/posts/${id}?populate=cover`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch post');
      return response.json();
    },

    create: async (data: PostFormData, token: string): Promise<ApiResponse<Post>> => {
      const formData = new FormData();
      formData.append(
        'data',
        JSON.stringify({
          title: data.title,
          slug: data.slug,
          description: data.description,
          content: data.content,
          publishedAt: data.publishedAt,
        })
      );

      if (data.cover) {
        formData.append('files.cover', data.cover);
      }

      const response = await fetch(`${API_URL}/api/posts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to create post');
      return response.json();
    },

    update: async (id: number, data: PostFormData, token: string): Promise<ApiResponse<Post>> => {
      const formData = new FormData();
      formData.append(
        'data',
        JSON.stringify({
          title: data.title,
          slug: data.slug,
          description: data.description,
          content: data.content,
          publishedAt: data.publishedAt,
        })
      );

      if (data.cover) {
        formData.append('files.cover', data.cover);
      }

      const response = await fetch(`${API_URL}/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to update post');
      return response.json();
    },

    delete: async (id: number, token: string): Promise<void> => {
      const response = await fetch(`${API_URL}/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to delete post');
    },
  },
}; 