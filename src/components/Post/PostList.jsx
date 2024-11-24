import { useEffect, useState } from "react";
import { fetchPosts, deletePost } from "../../api/Api";
import { Link } from "react-router-dom";
import BackButton from "../Button/UniversalBackButton";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((res) => setPosts(res.data));
  }, []);

  const handleDelete = (id) => {
    deletePost(id).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Posts</h2>
      <Link
        to="/create-post"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Create Post
      </Link>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="font-semibold text-xl">{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
            <div className="flex justify-between mt-4">
              <Link to={`/edit-post/${post.id}`} className="text-blue-500">
                Edit
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <BackButton className="my-5" />
    </div>
  );
};

export default PostList;
