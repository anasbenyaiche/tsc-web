import { PaginationMeta } from '@/types/blog';

interface PaginationControlsProps {
  meta: PaginationMeta;
  onPageChange: (page: number) => void;
  className?: string;
}

export const PaginationControls = ({ meta, onPageChange, className = '' }: PaginationControlsProps) => {
  const { page, pageCount } = meta;

  if (pageCount <= 1) return null;

  return (
    <div className={`flex justify-center ${className}`}>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
        >
          <span className="sr-only">Previous</span>
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Page numbers */}
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
              page === index + 1
                ? 'z-10 bg-primary border-primary text-white'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === pageCount}
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
        >
          <span className="sr-only">Next</span>
          <i className="fas fa-chevron-right"></i>
        </button>
      </nav>
    </div>
  );
}; 