import PropTypes from "prop-types";
const PluginItem = ({ plugin, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{plugin.name}</h3>
        <p className="text-gray-600">{plugin.description}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(plugin)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(plugin.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

PluginItem.propTypes = {
  plugin: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default PluginItem;
