import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';

interface Post {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    content: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery<{ data: Post }>({
    queryKey: ['post', slug],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=cover`
      );
      if (!response.ok) throw new Error('Failed to fetch post');
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !post?.data) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        <p className="mt-4 text-gray-600">
          The post you're looking for doesn't exist or has been removed.
        </p>
      </div>
    );
  }

  const postData = post.data;

  return (
    <>
      <Helmet>
        <title>{postData.attributes.title} - ALTAQA Blog</title>
        <meta name="description" content={postData.attributes.description} />
      </Helmet>

      <article className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {postData.attributes.cover?.data && (
          <div className="mb-8">
            <img
              src={`http://localhost:1337${postData.attributes.cover.data.attributes.url}`}
              alt={postData.attributes.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {postData.attributes.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <time dateTime={postData.attributes.publishedAt}>
              {new Date(postData.attributes.publishedAt).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: postData.attributes.content }} />
        </div>
      </article>
    </>
  );
};

export default BlogPost; 