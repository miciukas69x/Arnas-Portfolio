# Admin System Documentation

## Overview

The admin system provides a CMS-like interface for managing website content and resources.

## Login

- **URL**: `/login`
- **Default Username**: `arnas`
- **Default Password**: `admin123`

### Changing Credentials

To change the admin credentials, set environment variables in `.env.local`:

```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_password
```

**Important**: Do NOT use `NEXT_PUBLIC_` prefix - these credentials must stay server-side only. The authentication is handled server-side via API routes, so credentials are never exposed to the client.

## Admin Dashboard

- **URL**: `/admin`
- **Features**:
  - Resources Management
  - Projects Management (coming soon)
  - Services Management (coming soon)
  - Analytics (coming soon)

## Resources Management

- **URL**: `/admin/resources`
- **Features**:
  - Upload files directly through the interface
  - Add metadata (title, description, category, tags)
  - Bilingual support (Lithuanian/English)
  - Remove resources

### File Upload

1. Click "Add" button
2. Click "Choose File" to select a file
3. File will be uploaded to `/public/downloads/`
4. Form will auto-fill with file information
5. Complete the form and save

### File Storage

Uploaded files are stored in `/public/downloads/` directory. Make sure this directory exists and has write permissions.

## Protected Routes

All admin routes are protected and require authentication. Unauthenticated users will be redirected to `/login`.

## Security Notes

⚠️ **Important**: The current authentication system is basic and suitable for development only. For production:

1. Use a proper authentication library (NextAuth.js, Auth0, etc.)
2. Implement proper session management
3. Use secure password hashing
4. Add rate limiting
5. Implement CSRF protection
6. Use HTTPS only
7. Store credentials securely (not in environment variables)

