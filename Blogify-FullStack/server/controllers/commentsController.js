import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

// Add Comment ( Public Route , No Auth Required )
// POST /api/comment/add
export const addComment = async (req, res) => {
    try {
        const { blog, name, content } = req.body;
        const blogData = await Blog.findById(blog);
        await Comment.create({ blog, name, content, author: blogData.author });
        res.json({ success: true, message: "Comment added for review" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get Blog Approved Comments ( Public Route , No Auth Required )
// GET /api/comment/blog/:blogId
export const getBlogApprovedComments = async (req, res) => {
    try {
        const { blogId } = req.params;
        const comments = await Comment.find({ blog: blogId, isApproved: true }).sort({ createdAt: -1 });
        res.json({ success: true, comments });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Get Author Comments ( Private Route , Auth Required )
// GET /api/comment/author
export const getAuthorComments = async (req, res) => {
    try {
        const userId = req.userId;
        const query = req.isAdmin ? {} : { author: userId };
        const comments = await Comment.find(query).populate("blog").sort({ createdAt: -1 });

        res.json({ success: true, comments });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Approve Comment By Id ( Private Route , Auth Required )
// PUT /api/comment/approve/:commentId
export const approveCommentById = async (req, res) => {
    try {
        const { commentId } = req.params;
        const userId = req.userId;
        const query = req.isAdmin ? {} : { author: userId };

        const comment = await Comment.findOne({ _id: commentId, ...query });

        if (!comment) {
            return res.json({ success: false, message: "Comment not found or not authorized" });
        }

        await Comment.findByIdAndUpdate(commentId, { isApproved: true });
        res.json({ success: true, message: "Comment approved successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// Delete Comment By Id ( Private Route , Auth Required )
// DELETE /api/comment/:commentId
export const deleteCommentById = async (req, res) => {
    try {
        const { commentId } = req.params;
        const userId = req.userId;
        const query = req.isAdmin ? {} : { author: userId };

        const comment = await Comment.findOne({ _id: commentId, ...query });

        if (!comment) {
            return res.json({ success: false, message: "Comment not found or not authorized" });
        }

        await Comment.findByIdAndDelete(commentId);
        res.json({ success: true, message: "Comment deleted successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
