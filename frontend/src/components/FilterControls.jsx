import { FaSearch, FaSortAmountDown, FaStar } from "react-icons/fa";

const FilterControls = ({
  searchTerm,
  onSearchChange,
  filterRating,
  onFilterRatingChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title, author, or content..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
          />
        </div>

        <div className="flex items-center space-x-2">
          <FaStar className="text-yellow-400" />
          <select
            value={filterRating}
            onChange={(e) => onFilterRatingChange(Number(e.target.value))}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
          >
            <option value={0}>All Ratings</option>
            <option value={5}>5 Stars & Up</option>
            <option value={4}>4 Stars & Up</option>
            <option value={3}>3 Stars & Up</option>
            <option value={2}>2 Stars & Up</option>
            <option value={1}>1 Star & Up</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <FaSortAmountDown className="text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
          >
            <option value="dateAdded">Latest First</option>
            <option value="rating">Highest Rated</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
