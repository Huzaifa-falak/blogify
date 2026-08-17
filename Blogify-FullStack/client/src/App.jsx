import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/author/Layout";
import Dashboard from "./pages/author/Dashboard";
import AddBlog from "./pages/author/AddBlog";
import ListBlog from "./pages/author/ListBlog";
import Comments from "./pages/author/Comments";
import Login from "./components/author/Login";
import "quill/dist/quill.snow.css";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";

const App = () => {
    const { token } = useAppContext();

    return (
        <div>
            <Toaster />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/author" element={token ? <Layout /> : <Login />}>
                    <Route index element={<Dashboard />} />
                    <Route path="add-blog" element={<AddBlog />} />
                    <Route path="list-blog" element={<ListBlog />} />
                    <Route path="list-comment" element={<Comments />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
