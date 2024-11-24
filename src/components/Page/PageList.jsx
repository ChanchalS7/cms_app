import { useState, useEffect } from "react";
import { fetchPages, deletePage } from "../../api/Api";
import PageItem from "./PageItem";
import { useNavigate } from "react-router-dom";
import BackButton from "../Button/UniversalBackButton";

const PageList = () => {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    try {
      const { data } = await fetchPages();
      setPages(data);
    } catch (error) {
      console.error("Error loading pages:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePage(id);
      loadPages();
    } catch (error) {
      console.error("Error deleting page:", error);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Pages</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => navigate("/pages/new")}
        >
          Create New Page
        </button>
        {pages.map((page) => (
          <PageItem
            key={page.id}
            page={page}
            onEdit={(id) => navigate(`/pages/edit/${id}`)}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <BackButton className="my-5 mx-5" />
    </div>
  );
};

export default PageList;
