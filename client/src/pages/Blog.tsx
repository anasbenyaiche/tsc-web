import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { Post } from '@/types/blog';
import { PostCard } from '@/components/blog/PostCard';
import { PaginationControls } from '@/components/ui/pagination-controls';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { api } from '@/services/api';

const Blog = () => {
  const [page, setPage] = useState(1);
  const [pageSize] = useState(9);

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => api.posts.list(page, pageSize),
  });

  const posts: Post[] = data?.data || [];
  const meta = data?.meta?.pagination || { page, pageSize, pageCount: 0, total: 0 };

  return (
    <>
      <Helmet>
        <title>Blog - ALTAQA</title>
        <meta
          name="description"
          content="Découvrez nos derniers articles et actualités sur ALTAQA"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Blog</h1>
          <p className="text-xl text-gray-600">
            Découvrez nos derniers articles, actualités et conseils
          </p>
        </div>

        {isLoading ? (
          <LoadingSpinner className="min-h-[400px]" size="lg" />
        ) : error ? (
          <div className="text-red-500 text-center">
            Une erreur s'est produite lors du chargement des articles
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            <PaginationControls
              meta={meta}
              onPageChange={setPage}
              className="mt-12"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Blog; 