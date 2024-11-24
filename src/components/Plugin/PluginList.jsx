import { useState, useEffect } from "react";
import { fetchPlugins, deletePlugin } from "../../api/Api";
import PluginItem from "./PluginItem";
import { useNavigate } from "react-router-dom";
import BackButton from "../Button/UniversalBackButton";

const PluginList = () => {
  const [plugins, setPlugins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadPlugins();
  }, []);

  const loadPlugins = async () => {
    try {
      const { data } = await fetchPlugins();
      setPlugins(data);
    } catch (error) {
      console.error(
        "Error loading plugins:",
        error.response?.data || error.message
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePlugin(id);
      loadPlugins();
    } catch (error) {
      console.error(
        "Error deleting plugin:",
        error.response?.data || error.message
      );
    }
  };

  const handleEdit = (plugin) => {
    navigate("/plugins/edit", { state: { plugin } });
  };

  const handleCreate = () => {
    navigate("/plugins/new");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Plugins</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleCreate}
      >
        Create New Plugin
      </button>
      {plugins.map((plugin) => (
        <PluginItem
          key={plugin.id}
          plugin={plugin}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}

      <BackButton className="my-5 mx-5" />
    </div>
  );
};

export default PluginList;
