import PropTypes from "prop-types";

const PostItem = ({ post, onEdit, onDelete }) => (
  <div className="border p-4 mb-2 rounded shadow-sm">
    <h3 className="text-xl font-semibold">{post.title}</h3>
    <p className="text-gray-700">{post.content.slice(0, 100)}...</p>
    <div className="mt-2 space-x-2">
      <button
        className="bg-yellow-500 text-white px-3 py-1 rounded"
        onClick={() => onEdit(post.id)}
      >
        Edit
      </button>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => onDelete(post.id)}
      >
        Delete
      </button>
    </div>
  </div>
);

// Add prop types validation
PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostItem;
