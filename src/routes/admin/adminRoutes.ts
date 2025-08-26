// src/routes/authRoutes.ts
import express from 'express';
import { upload } from '../../middlewares/multerMiddleware';
import { authenticateJWT } from '../../middlewares/authMiddleware/authenticationMiddleware';
import { allProjectManager, createProjectManager, deleteProjectManager, singleProjectManager } from '../../controllers/Admininstration/projectManagerController';
import { allProject, createProject, deleteProject, singleProject, updateProject } from '../../controllers/Admininstration/projectController';
import { allDataEntry, deleteDataEntry, singleDataEntry } from '../../controllers/Admininstration/dataEntryController';
import { dashboard } from '../../controllers/Admininstration/dashboardController';
import { allTags, createTag, deleteTag, singleTag, updateTag } from '../../controllers/Admininstration/tagController';
import { allCategories, createCategory, deleteCategory, singleCategory, updateCategory } from '../../controllers/Admininstration/categoryController';
import { allBlogs, createBlog, deleteBlog, singleBlog, updateBlog } from '../../controllers/Admininstration/blogController';
import { allDonations, donationStats, singleDonation } from '../../controllers/Admininstration/donationController';
import { allComments, approveComment, deleteComment, getApprovedComments, getPendingComments, singleComment } from '../../controllers/Admininstration/commentController';
import { allVolunteers, approveVolunteer, deleteVolunteer, getApprovedVolunteers, getPendingVolunteers, singleVolunteer } from '../../controllers/Admininstration/volunteerController';

export const adminRouter = express.Router();

adminRouter.post('/create-project-manager', authenticateJWT, createProjectManager);
adminRouter.get('/project-managers', authenticateJWT, allProjectManager);
adminRouter.get('/project-manager', authenticateJWT, singleProjectManager);
adminRouter.delete('/delete-project-manager', authenticateJWT, deleteProjectManager);

adminRouter.post('/create-project', authenticateJWT, createProject);
adminRouter.get('/projects', authenticateJWT, allProject);
adminRouter.get('/project', authenticateJWT, singleProject);
adminRouter.put('/update-project', authenticateJWT, updateProject);
adminRouter.delete('/delete-project', authenticateJWT, deleteProject);

adminRouter.post('/create-tag', authenticateJWT, createTag);
adminRouter.get('/tags', authenticateJWT, allTags);
adminRouter.get('/tag', authenticateJWT, singleTag);
adminRouter.put('/update-tag', authenticateJWT, updateTag);
adminRouter.delete('/delete-tag', authenticateJWT, deleteTag);

adminRouter.post('/create-category', authenticateJWT, createCategory);
adminRouter.get('/categories', authenticateJWT, allCategories);
adminRouter.get('/category', authenticateJWT, singleCategory);
adminRouter.put('/update-category', authenticateJWT, updateCategory);
adminRouter.delete('/delete-category', authenticateJWT, deleteCategory);

adminRouter.post('/create-blog', authenticateJWT, upload.single('cover_image'), createBlog);
adminRouter.get('/blogs', authenticateJWT, allBlogs);
adminRouter.get('/blog', authenticateJWT, singleBlog);
adminRouter.put('/update-blog', authenticateJWT, upload.single('cover_image'), updateBlog);
adminRouter.delete('/delete-blog', authenticateJWT, deleteBlog);

adminRouter.get('/all-donations', authenticateJWT, allDonations);
adminRouter.get('/single-donation', authenticateJWT, singleDonation);
adminRouter.get('/donation-stats', authenticateJWT, donationStats)

adminRouter.get('/all-comments', authenticateJWT, allComments);
adminRouter.get('/single-comment', authenticateJWT, singleComment);
adminRouter.delete('/delete-comment', authenticateJWT, deleteComment);
adminRouter.put('/approve-comment', authenticateJWT, approveComment);
adminRouter.get('/approved-comments', authenticateJWT, getApprovedComments);
adminRouter.get('/pending-comment', authenticateJWT, getPendingComments)

adminRouter.get('/all-volunteers', authenticateJWT, allVolunteers);
adminRouter.get('/single-volunteer', authenticateJWT, singleVolunteer);
adminRouter.delete('/delete-volunteer', authenticateJWT, deleteVolunteer);
adminRouter.put('/approve-volunteer', authenticateJWT, approveVolunteer);
adminRouter.get('/approved-volunteers', authenticateJWT, getApprovedVolunteers);
adminRouter.get('/pending-volunteer', authenticateJWT, getPendingVolunteers)

adminRouter.get('/datas', authenticateJWT, allDataEntry);
adminRouter.get('/data', authenticateJWT, singleDataEntry);
adminRouter.delete('/delete-data', authenticateJWT, deleteDataEntry);

adminRouter.get('/dashboard',authenticateJWT, dashboard)