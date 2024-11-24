import { useState, useEffect } from "react";
import { createPlugin, updatePlugin } from "../../api/Api";
import { useNavigate, useLocation } from "react-router-dom";
import BackButton from "../Button/UniversalBackButton";

const PluginForm = () => {
  const [pluginData, setPluginData] = useState({
    name: "",
    description: "",
    callback: "",
    contentBlocks: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const pluginToEdit = location.state?.plugin;

  useEffect(() => {
    if (pluginToEdit) {
      setPluginData(pluginToEdit);
    }
  }, [pluginToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPluginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContentBlocksChange = (e) => {
    const { value } = e.target;
    setPluginData((prev) => ({
      ...prev,
      contentBlocks: value.split(",").map((block) => block.trim()),
    }));
  };

  const handleCreate = async () => {
    setIsSubmitting(true);
    setError(""); // Reset any previous error
    try {
      await createPlugin(pluginData);
      navigate("/plugins");
    } catch (error) {
      console.error(
        "Error creating plugin:",
        error.response?.data || error.message
      );
      setError("Error creating plugin. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdate = async () => {
    setIsSubmitting(true);
    setError(""); // Reset any previous error
    try {
      if (pluginToEdit) {
        await updatePlugin(pluginToEdit.id, pluginData);
        navigate("/plugins"); // Redirect after successful update
      }
    } catch (error) {
      console.error(
        "Error updating plugin:",
        error.response?.data || error.message
      );
      setError("Error updating plugin. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pluginToEdit) {
      await handleUpdate();
    } else {
      await handleCreate();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {pluginToEdit ? "Edit Plugin" : "Create New Plugin"}
      </h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Plugin Name
          </label>
          <input
            type="text"
            name="name"
            value={pluginData.name}
            onChange={handleChange}
            placeholder="Enter plugin name"
            required
            className="w-full border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Plugin Description
          </label>
          <textarea
            name="description"
            value={pluginData.description}
            onChange={handleChange}
            placeholder="Enter plugin description"
            required
            className="w-full border-gray-300 rounded-lg p-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Callback URL
          </label>
          <input
            type="url"
            name="callback"
            value={pluginData.callback}
            onChange={handleChange}
            placeholder="Enter callback URL"
            required
            className="w-full border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Content Blocks
          </label>
          <input
            type="text"
            value={pluginData.contentBlocks.join(", ")}
            onChange={handleContentBlocksChange}
            placeholder="Enter content blocks (comma separated)"
            required
            className="w-full border-gray-300 rounded-lg p-2"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded ${
              isSubmitting
                ? "bg-gray-400 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isSubmitting
              ? "Saving..."
              : pluginToEdit
              ? "Update Plugin"
              : "Create Plugin"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/plugins")}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
      <BackButton className="my-5 mx-5" />
    </div>
  );
};

export default PluginForm;
