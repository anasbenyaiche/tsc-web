import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/hooks/useAuth';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface PostFormData {
  title: string;
  slug: string;
  description: string;
  content: string;
  cover: File | null;
  publishedAt: string | null;
}

const PostEditor = () => {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const { token } = useAuth();

  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    slug: '',
    description: '',
    content: '',
    cover: null,
    publishedAt: null,
  });

  const [previewImage, setPreviewImage] = useState<string>('');

  // Fetch post data if editing
  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      if (!id) return null;
      const response = await fetch(`http://localhost:1337/api/posts/${id}?populate=cover`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch post');
      return response.json();
    },
    enabled: isEditing,
    onSuccess: (data) => {
      if (data) {
        const post = data.data;
        setFormData({
          title: post.attributes.title,
          slug: post.attributes.slug,
          description: post.attributes.description,
          content: post.attributes.content,
          cover: null,
          publishedAt: post.attributes.publishedAt,
        });
        if (post.attributes.cover?.data) {
          setPreviewImage(`http://localhost:1337${post.attributes.cover.data.attributes.url}`);
        }
      }
    },
  });

  // Create/Update mutation
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const url = isEditing
        ? `http://localhost:1337/api/posts/${id}`
        : 'http://localhost:1337/api/posts';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      if (!response.ok) throw new Error('Failed to save post');
      return response.json();
    },
    onSuccess: () => {
      navigate('/admin/posts');
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    formDataToSend.append('data', JSON.stringify({
      title: formData.title,
      slug: formData.slug,
      description: formData.description,
      content: formData.content,
      publishedAt: formData.publishedAt,
    }));

    if (formData.cover) {
      formDataToSend.append('files.cover', formData.cover);
    }

    mutation.mutate(formDataToSend);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, cover: file });
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  if (isEditing && isLoadingPost) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{isEditing ? 'Edit Post' : 'New Post'} - ALTAQA Admin</title>
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditing ? 'Edit Post' : 'New Post'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <div className="mt-1">
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                  className="h-64 mb-12"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Cover Image</label>
              <div className="mt-1 flex items-center space-x-4">
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="h-32 w-32 object-cover rounded-md"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Publication Status</label>
              <select
                value={formData.publishedAt ? 'published' : 'draft'}
                onChange={(e) => setFormData({
                  ...formData,
                  publishedAt: e.target.value === 'published' ? new Date().toISOString() : null,
                })}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/admin/posts')}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
            >
              {mutation.isPending ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostEditor; 