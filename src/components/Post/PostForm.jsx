import { useState, useEffect } from "react";
import { createPost, updatePost } from "../../api/Api";
import { useNavigate, useParams } from "react-router-dom";
import QuillEditor from "../Editor/QuilEditor";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Fetch post to edit
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, content };
    if (id) {
      await updatePost(id, data);
    } else {
      await createPost(data);
    }
    navigate("/posts");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">
        {id ? "Edit" : "Create"} Post
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Content</label>
          <QuillEditor value={content} onChange={setContent} />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PostForm;
