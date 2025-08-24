import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '../../models';
import { body, validationResult } from 'express-validator';
import slugify from 'slugify';
import fs from "fs";
import { uploadImage } from "../../utils/cloudinary";
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

// Configure multer for memory storage (to handle file uploads)
const upload = multer({ storage: multer.memoryStorage() });

// Define Cloudinary upload result type
interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
}

const prisma = new PrismaClient();

// export async function createBlog(request: Request, response: Response) {
  
//   const { title, content, category_id, tag_id, cover_image, published } = request.body;
//   const admin_id = request.user.adminId;

//   if (!admin_id) {
//     return response.status(403).json({ message: 'Unauthorized User' });
//   }

//   try {
//     const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
//     const role = check_admin?.role;

//     if (role !== 'super_admin') {
//       return response.status(403).json({ message: 'Unauthorized User' });
//     }

//     const validationRules = [
//       body('title').notEmpty().withMessage('Title is required').isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
//       body('content').notEmpty().withMessage('Content is required'),
//       body('category_id').notEmpty().withMessage('Category ID is required').isInt().withMessage('Category ID must be an integer'),
//       body('tag_id').notEmpty().withMessage('Tag ID is required').isInt().withMessage('Tag ID must be an integer'),
//       body('published').optional().isBoolean().withMessage('Published must be a boolean')
//     ];

//     await Promise.all(validationRules.map((rule) => rule.run(request)));

//     const errors = validationResult(request);
//     if (!errors.isEmpty()) {
//       return response.status(400).json({ errors: errors.array() });
//     }

//     // Generate slug from title
//     const slug = slugify(title, { lower: true, strict: true });
//     console.log("Good");

//     if (!request.file) {
//         return response.status(400).json({ message: 'Package Image is required' });
//     }

//     const image_path = request.file.path;
//     console.log(image_path);
    

//     // Upload image to Cloudinary
//     const uploadedImageUrl = await uploadImage(image_path, 'legasi/images/blog_images/');
//     console.log(uploadedImageUrl);
    

//     // Delete the local file after uploading
//     fs.unlink(image_path, (err) => {
//         if (err) {
//             console.error(`Error deleting file: ${image_path}`, err);
//         }
//     });

//     const blog = await prisma.blogs.create({
//       data: {
//         title,
//         content,
//         authorId: admin_id,
//         category_id: parseInt(category_id),
//         tag_id: parseInt(tag_id),
//         cover_image: uploadedImageUrl || null,
//         published: published || false,
//         slug
//       },
//       include: {
//         author: true,
//         category: true,
//         tags: true,
//         comments: true
//       }
//     });

//     return response.status(200).json({ message: 'Blog created successfully', data: blog });
//   } catch (error) {
//     return response.status(500).json({ message: error });
//   }
// }

export async function createBlog(request: Request, response: Response) {
  // Don't destructure cover_image from request.body since it comes from the file upload
  const { title, content, category_id, tag_id, published } = request.body;
  const admin_id = request.user.adminId;

  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    const check_admin = await prisma.admin.findUnique({ where: { id: parseInt(admin_id) } });
    const role = check_admin?.role;

    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const validationRules = [
      body('title').notEmpty().withMessage('Title is required').isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
      body('content').notEmpty().withMessage('Content is required'),
      body('category_id').notEmpty().withMessage('Category ID is required').isInt().withMessage('Category ID must be an integer'),
      body('tag_id').notEmpty().withMessage('Tag ID is required').isInt().withMessage('Tag ID must be an integer'),
      body('published').optional().isBoolean().withMessage('Published must be a boolean')
    ];

    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    // Generate slug from title and ensure uniqueness
    let slug = slugify(title, { lower: true, strict: true });
    let slugCounter = 1;
    const originalSlug = slug;

    // Check if slug already exists
    while (await prisma.blogs.findUnique({ where: { slug } })) {
      slug = `${originalSlug}-${slugCounter}`;
      slugCounter++;
    }

    let uploadedImageUrl = null;

    // Handle file upload if exists
    if (request.file) {
      const image_path = request.file.path;
      console.log('Uploading image from path:', image_path);

      try {
        // Upload image to Cloudinary
        uploadedImageUrl = await uploadImage(image_path, 'legasi/images/blog_images/');
        console.log('Image uploaded to:', uploadedImageUrl);

        // Delete the local file after uploading
        fs.unlink(image_path, (err) => {
          if (err) {
            console.error(`Error deleting file: ${image_path}`, err);
          } else {
            console.log(`Successfully deleted local file: ${image_path}`);
          }
        });
      } catch (uploadError) {
        console.error('Cloudinary upload error:', uploadError);
        // Clean up the file if upload failed
        if (fs.existsSync(image_path)) {
          fs.unlinkSync(image_path);
        }
        return response.status(500).json({ message: 'Failed to upload cover image' });
      }
    } else {
      return response.status(400).json({ message: 'Cover image is required' });
    }

    // Convert published to boolean properly
    const isPublished = published === 'true' || published === true || published === '1';

    const blog = await prisma.blogs.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        authorId: parseInt(admin_id), // Ensure this is an integer
        category_id: parseInt(category_id),
        tag_id: parseInt(tag_id),
        cover_image: uploadedImageUrl,
        published: isPublished,
        slug: slug
      },
      include: {
        author: {
          select: {
            id: true,
            fullname: true,
            email: true
          }
        },
        category: {
          select: {
            id: true,
            name: true
          }
        },
        tags: {
          select: {
            id: true,
            name: true
          }
        },
        comments: true
      }
    });

    return response.status(201).json({ message: 'Blog created successfully', data: blog });
  } catch (error) {
    console.error('Blog creation error:', error);
    
    // Handle Prisma validation errors specifically
    if (error instanceof Prisma.PrismaClientValidationError) {
      return response.status(400).json({ 
        message: 'Validation error - check your input data',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
    
    // Handle other Prisma errors
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return response.status(400).json({ 
        message: 'Database error',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }

    return response.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
}

// export async function updateBlog(request: Request, response: Response) {
//   const { title, content, category_id, tag_id, cover_image, published } = request.body;
//   const admin_id = request.user.adminId;
//   const id: number = parseInt(request.query.blog_id as string, 10);

//   if (!admin_id) {
//     return response.status(403).json({ message: 'Unauthorized User' });
//   }

//   try {
//     const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
//     const role = check_admin?.role;

//     if (role !== 'super_admin') {
//       return response.status(403).json({ message: 'Unauthorized User' });
//     }

//     const validationRules = [
//       body('title').optional().isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
//       body('category_id').optional().isInt().withMessage('Category ID must be an integer'),
//       body('tag_id').optional().isInt().withMessage('Tag ID must be an integer'),
//       body('published').optional().isBoolean().withMessage('Published must be a boolean')
//     ];

//     await Promise.all(validationRules.map((rule) => rule.run(request)));

//     const errors = validationResult(request);
//     if (!errors.isEmpty()) {
//       return response.status(400).json({ errors: errors.array() });
//     }

//     let slug;
//     if (title) {
//       // Generate new slug if title is updated
//       slug = slugify(title, { lower: true, strict: true });
//     }

//     const blog = await prisma.blogs.update({
//       where: { id },
//       data: {
//         title,
//         content,
//         category_id: category_id ? parseInt(category_id) : undefined,
//         tag_id: tag_id ? parseInt(tag_id) : undefined,
//         cover_image,
//         published,
//         ...(slug && { slug }) // Only update slug if title was changed
//       },
//       include: {
//         author: true,
//         category: true,
//         tags: true,
//         comments: true
//       }
//     });

//     return response.status(200).json({ message: 'Blog updated successfully', data: blog });
//   } catch (error) {
//     return response.status(500).json({ message: error });
//   }
// }

export async function updateBlog(request: Request, response: Response) {
  try {
    const admin_id = request.user.adminId;
    const id: number = parseInt(request.query.blog_id as string, 10);

    if (!admin_id) {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    // Check admin role
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    // Parse form data
    const { title, content, category_id, tag_id, published } = request.body;
    const cover_image_file = (request as any).file; // Use type assertion for multer file

    const validationRules = [
      body('title').optional().isLength({ min: 3 }).withMessage('Title must be at least 3 characters'),
      body('category_id').optional().isInt().withMessage('Category ID must be an integer'),
      body('tag_id').optional().isInt().withMessage('Tag ID must be an integer'),
      body('published').optional().isBoolean().withMessage('Published must be a boolean')
    ];

    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    let slug;
    if (title) {
      slug = slugify(title, { lower: true, strict: true });
    }

    let coverImageUrl: string | undefined = undefined;

    // Handle cover image upload to Cloudinary if file was provided
    if (cover_image_file) {
      // Upload to Cloudinary with proper typing
      const uploadResult = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: 'blog-covers',
            transformation: [
              { width: 1200, height: 630, crop: 'fill' },
              { quality: 'auto' }
            ]
          },
          (error, result) => {
            if (error) {
              reject(error);
            } else if (result) {
              resolve(result as CloudinaryUploadResult);
            } else {
              reject(new Error('Upload failed: No result returned'));
            }
          }
        );

        uploadStream.end(cover_image_file.buffer);
      });

      coverImageUrl = uploadResult.secure_url;
    }

    // Get existing blog to check if we need to delete old image
    const existingBlog = await prisma.blogs.findUnique({
      where: { id },
      select: { cover_image: true }
    });

    // Update blog data
    const updateData: any = {
      ...(title && { title }),
      ...(content && { content }),
      ...(category_id && { category_id: parseInt(category_id) }),
      ...(tag_id && { tag_id: parseInt(tag_id) }),
      ...(published !== undefined && { published: published === 'true' }),
      ...(slug && { slug })
    };

    // Only update cover_image if a new file was uploaded
    if (coverImageUrl) {
      updateData.cover_image = coverImageUrl;
      
      // Delete old image from Cloudinary if it exists
      if (existingBlog?.cover_image) {
        try {
          // Extract public ID from the URL
          const urlParts = existingBlog.cover_image.split('/');
          const publicIdWithExtension = urlParts[urlParts.length - 1];
          const publicId = publicIdWithExtension.split('.')[0];
          
          if (publicId) {
            await cloudinary.uploader.destroy(`blog-covers/${publicId}`);
          }
        } catch (deleteError) {
          console.error('Error deleting old cover image:', deleteError);
          // Continue with update even if deletion fails
        }
      }
    }

    const blog = await prisma.blogs.update({
      where: { id },
      data: updateData,
      include: {
        author: true,
        category: true,
        tags: true,
        comments: true
      }
    });

    return response.status(200).json({ message: 'Blog updated successfully', data: blog });
  } catch (error) {
    console.error('Error updating blog:', error);
    return response.status(500).json({ 
      message: error instanceof Error ? error.message : 'Internal server error' 
    });
  }
}

export async function allBlogs(request: Request, response: Response) {
  const admin_id = request.user.adminId;

  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const blogs = await prisma.blogs.findMany({
      include: {
        author: true,
        category: true,
        tags: true,
        comments: true
      },
      orderBy: { createdAt: 'desc' }
    });

    return response.status(200).json({ message: 'Blogs fetched successfully', data: blogs });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function singleBlog(request: Request, response: Response) {
  const id: number = parseInt(request.query.blog_id as string, 10);
  const admin_id = request.user.adminId;

  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const blog = await prisma.blogs.findUnique({
      where: { id },
      include: {
        author: true,
        category: true,
        tags: true,
        comments: true
      }
    });

    if (!blog) {
      return response.status(404).json({ message: 'Blog not found' });
    }

    return response.status(200).json({ message: 'Blog fetched successfully', data: blog });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}

export async function deleteBlog(request: Request, response: Response) {
  const id: number = parseInt(request.query.blog_id as string, 10);
  const admin_id = request.user.adminId;

  if (!admin_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  }

  try {
    const check_admin = await prisma.admin.findUnique({ where: { id: admin_id } });
    const role = check_admin?.role;

    if (role !== 'super_admin') {
      return response.status(403).json({ message: 'Unauthorized User' });
    }

    const blog = await prisma.blogs.delete({
      where: { id }
    });

    return response.status(200).json({ message: 'Blog deleted successfully', data: blog });
  } catch (error) {
    return response.status(500).json({ message: error });
  }
}