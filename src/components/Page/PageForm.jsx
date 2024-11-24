// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchPageById, createPage, updatePage } from "../../api/Api";
// import QuillEditor from "../Editor/QuilEditor";

// const PageForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     if (id) {
//       loadPage();
//     }
//   }, [id]);

//   const loadPage = async () => {
//     try {
//       const { data } = await fetchPageById(id);
//       setTitle(data.title);
//       setContent(data.content);
//     } catch (error) {
//       console.error("Error loading page:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const pageData = { title, content };

//     try {
//       if (id) {
//         await updatePage(id, pageData);
//       } else {
//         await createPage(pageData);
//       }
//       navigate("/pages");
//     } catch (error) {
//       console.error("Error saving page:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="m-auto">
//         <label>Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           className="w-full p-2 border rounded mb-4"
//         />
//       </div>
//       <div>
//         <label>Content</label>
//         <QuillEditor value={content} onChange={setContent} />
//       </div>
//       <button
//         type="submit"
//         className="bg-green-500 text-white px-4 py-2 rounded mt-4"
//       >
//         Save Page
//       </button>
//     </form>
//   );
// };

// export default PageForm;

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPageById, createPage, updatePage } from "../../api/Api";
import QuillEditor from "../Editor/QuilEditor";
import BackButton from "../Button/UniversalBackButton";

const PageForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      loadPage();
    }
  }, [id]);

  const loadPage = async () => {
    try {
      const { data } = await fetchPageById(id);
      setTitle(data.title);
      setContent(data.content);
    } catch (error) {
      console.error("Error loading page:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pageData = { title, content };

    try {
      if (id) {
        await updatePage(id, pageData);
      } else {
        await createPage(pageData);
      }
      navigate("/pages");
    } catch (error) {
      console.error("Error saving page:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          {id ? "Edit Page" : "Create New Page"}
        </h2>

        {/* Title Input */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Content Editor */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Content
          </label>
          <QuillEditor value={content} onChange={setContent} />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Save Page
          </button>
        </div>
      </form>
      <BackButton className="ml-[25px] mt-[10px] bg-green-600" />
    </div>
  );
};

export default PageForm;
