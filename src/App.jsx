import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostList from "./components/Post/PostList";
import PostForm from "./components/Post/PostForm";
import PluginList from "./components/Plugin/PluginList";
import PageList from "./components/Page/PageList";
import PageForm from "./components/Page/PageForm";
import PluginForm from "./components/Plugin/PluginForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create-post" element={<PostForm />} />
        <Route path="/edit-post/:id" element={<PostForm />} />

        <Route path="/pages" element={<PageList />} />
        <Route path="/pages/new" element={<PageForm />} />
        <Route path="/pages/edit/:id" element={<PageForm />} />

        <Route path="/plugins" element={<PluginList />} />
        <Route path="/plugins/new" element={<PluginForm />} />
        <Route path="/plugins/edit" element={<PluginForm />} />
      </Routes>
    </Router>
  );
};

export default App;
