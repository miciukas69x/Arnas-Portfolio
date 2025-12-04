# Data Persistence Guide

## Current State

### ✅ What Persists
- **File Uploads**: Files uploaded via `/admin/resources` are saved to `/public/downloads/` and persist
- **Authentication**: Login state persists via HTTP-only cookies

### ❌ What Doesn't Persist
- **Resource Metadata**: Adding/editing/deleting resources only updates React state (lost on refresh)
- **Projects/Services Changes**: Same issue - changes are temporary

## Why Changes Don't Persist

The admin panel currently:
1. Loads data from static TypeScript files (`/data/resources.ts`, etc.)
2. Updates only React component state
3. **Does NOT** write changes back to files or a database

## Solutions for Production

### Option 1: Database (Recommended)
**Best for**: Production sites with frequent updates

**Setup**:
- Use a database (PostgreSQL, MongoDB, Supabase, etc.)
- Create API routes to read/write data
- Update admin panel to call these APIs

**Pros**:
- ✅ Real persistence
- ✅ Can handle concurrent users
- ✅ Scalable
- ✅ Can add features like version history

**Cons**:
- Requires database setup
- More complex implementation

**Example**: Use Supabase (free tier available)
```typescript
// app/api/resources/route.ts
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  const supabase = createClient(url, key)
  const { data } = await supabase.from('resources').select('*')
  return Response.json(data)
}

export async function POST(request: Request) {
  const resource = await request.json()
  const supabase = createClient(url, key)
  const { data } = await supabase.from('resources').insert(resource)
  return Response.json(data)
}
```

### Option 2: File-Based API (Simple)
**Best for**: Single admin, infrequent updates

**Setup**:
- Create API routes that read/write JSON files
- Store data in `/data/resources.json` instead of `.ts`
- Update admin panel to call these APIs

**Pros**:
- ✅ Simple to implement
- ✅ No database needed
- ✅ Works with static hosting

**Cons**:
- ❌ Not suitable for concurrent edits
- ❌ File system writes may not work on all hosting (Vercel, etc.)
- ❌ No version control

**Note**: Vercel (and similar) don't allow file writes in production. This only works on self-hosted servers.

### Option 3: Headless CMS (Easiest)
**Best for**: Non-technical users, quick setup

**Setup**:
- Use a headless CMS (Contentful, Sanity, Strapi, etc.)
- Connect via API
- Admin panel becomes a frontend for the CMS

**Pros**:
- ✅ No backend code needed
- ✅ Built-in admin UI (or use your custom one)
- ✅ Handles persistence automatically
- ✅ Often has free tiers

**Cons**:
- ❌ External dependency
- ❌ May have usage limits on free tier

### Option 4: Git-Based (For Developers)
**Best for**: Developers comfortable with Git

**Setup**:
- Admin panel creates pull requests or commits
- Use GitHub API to update files
- Auto-deploy on merge

**Pros**:
- ✅ Version control built-in
- ✅ Review changes before deploying
- ✅ Works with static hosting

**Cons**:
- ❌ Requires GitHub/GitLab setup
- ❌ More complex workflow
- ❌ Not real-time

## Quick Fix: Manual Updates

**For now**, if you need to add resources:
1. Go to `/admin/resources` and fill out the form
2. Copy the resource data from the form/console
3. Manually add it to `/data/resources.ts`
4. Commit and deploy

## Recommended Path Forward

1. **Short term**: Use manual updates (edit files directly)
2. **Medium term**: Implement file-based API (if self-hosting) or use a headless CMS
3. **Long term**: Move to a database for full CMS functionality

## Implementation Help

If you want me to implement one of these solutions, let me know which option you prefer!

