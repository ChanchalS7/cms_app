import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-teal-400 to-blue-600 text-white">
      <div className="text-center">
        {/* Logo Section */}
        <div className="mb-6">
          <img
            src="https://www.kgkgroup.com/wp-content/uploads/2022/02/KGK-Group-Logo.png"
            className="w-32 h-32 mx-auto"
            alt="Logo"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
          Content Management System
        </h1>
        <p className="text-lg mb-6 opacity-80">
          Streamline your content creation and management effortlessly.
        </p>

        {/* Buttons Section */}
        <div className="space-y-4">
          <Link
            to="/posts"
            className="block w-64 bg-white text-teal-600 py-3 px-6 rounded-lg shadow-md text-lg font-medium hover:bg-teal-100 transition"
          >
            Manage Posts
          </Link>
          <Link
            to="/pages"
            className="block w-64 bg-white text-blue-500 py-3 px-6 rounded-lg shadow-md text-lg font-medium hover:bg-blue-100 transition"
          >
            Manage Pages
          </Link>
          <Link
            to="/plugins"
            className="block w-64 bg-white text-pink-500 py-3 px-6 rounded-lg shadow-md text-lg font-medium hover:bg-pink-100 transition"
          >
            Manage Plugins
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center py-4">
        <div className="h-2 w-2 bg-white rounded-full animate-pulse mr-1"></div>
        <div className="h-2 w-2 bg-white rounded-full animate-pulse delay-200 mr-1"></div>
        <div className="h-2 w-2 bg-white rounded-full animate-pulse delay-400"></div>
      </div>
    </div>
  );
};

export default Home;
