import PropTypes from "prop-types";

const PageItem = ({ page, onEdit, onDelete }) => (
  <div className="border p-4 mb-2 rounded shadow-sm">
    <h3 className="text-xl font-semibold">{page.title}</h3>
    <p
      className="text-gray-700"
      dangerouslySetInnerHTML={{
        __html: page.content.slice(0, 100),
      }}
    />
    <div className="mt-2 space-x-2">
      <button
        className="bg-yellow-500 text-white px-3 py-1 rounded"
        onClick={() => onEdit(page.id)}
      >
        Edit
      </button>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => onDelete(page.id)}
      >
        Delete
      </button>
    </div>
  </div>
);

// Add prop types validation
PageItem.propTypes = {
  page: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PageItem;
