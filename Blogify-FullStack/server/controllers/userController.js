import jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Register ( Public Route )
// POST /api/user/register
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({ name, email, password: hashedPassword });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ success: true, token });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Login ( Public Route )
// POST /api/user/login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        if (!(await bcrypt.compare(password, user.password))) {
            return res.json({ success: false, message: "Invalid Credentials" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ success: true, token });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get All Author Blogs ( Private Route , Auth Required )
// GET /api/user/blogs
export const getAuthorBlogs = async (req, res) => {
    try {
        const userId = req.userId;
        const query = req.isAdmin ? {} : { author: userId };
        console.log(query);
        const blogs = await Blog.find(query).sort({ createdAt: -1 });
        res.json({ success: true, blogs });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get Author Dashboard ( Private Route , Auth Required )
// GET /api/user/dashboard
export const getAuthorDashboard = async (req, res) => {
    try {
        const userId = req.userId;
        const query = req.isAdmin ? {} : { author: userId };
        const recentBlogs = await Blog.find(query).sort({ createdAt: -1 }).limit(5);
        const blogs = await Blog.countDocuments(query);
        const comments = await Comment.countDocuments(query);
        const drafts = await Blog.countDocuments({ ...query, isPublished: false });

        const dashboardData = {
            blogs,
            comments,
            drafts,
            recentBlogs,
        };

        res.json({ success: true, dashboardData });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
