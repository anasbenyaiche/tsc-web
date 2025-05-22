import { Link } from 'react-router-dom';
import { Post } from '@/types/blog';
import { Card, CardContent } from '@/components/ui/Card';
import { formatDate } from '@/utils/date';

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const { attributes } = post;

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <Link to={`/blog/${attributes.slug}`}>
        {attributes.cover?.data && (
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={`http://localhost:1337${attributes.cover.data.attributes.url}`}
              alt={attributes.title}
              className="w-full h-48 object-cover"
            />
          </div>
        )}
        <CardContent>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {attributes.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {attributes.description}
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <time dateTime={attributes.publishedAt || ''}>
              {attributes.publishedAt ? formatDate(attributes.publishedAt) : 'Draft'}
            </time>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}; 