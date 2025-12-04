# Downloads Folder

This folder contains downloadable resources that users can access from the Resources page.

## How to Add Files

1. Upload your files to this folder (e.g., `template.pdf`, `guide.zip`)
2. Go to `/admin/resources` page
3. Fill in the form with:
   - **ID**: A unique identifier (e.g., `template-1`)
   - **File URL**: The path starting with `/downloads/` (e.g., `/downloads/template.pdf`)
   - **File Name**: The actual filename (e.g., `template.pdf`)
   - **Title & Description**: In both Lithuanian and English
   - **Category**: Optional category name
   - **Tags**: Optional tags for searching

## File Types Supported

- PDF documents
- ZIP archives
- Images (JPG, PNG, etc.)
- Any other file type

## Note

Currently, the admin page only updates the local state. To persist changes, you need to:
1. Manually update `/data/resources.ts` with the new resource data
2. Or implement a backend API to save resources to a database

