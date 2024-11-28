const ReviewSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-blue-100 overflow-hidden p-6 animate-pulse">
      <div className="h-7 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-5 bg-gray-200 rounded w-1/3 mb-3"></div>

      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-gray-200 rounded-full"></div>
        ))}
      </div>

      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>

      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>

      <div className="flex justify-end space-x-3">
        <div className="h-9 bg-gray-200 rounded w-20"></div>
        <div className="h-9 bg-gray-200 rounded w-20"></div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
