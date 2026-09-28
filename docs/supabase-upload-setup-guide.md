# Supabase Upload Setup Guide

This guide explains how to fix the image upload issue in your Next.js app and how to set it up step by step.

## 1. What is wrong

Your app is trying to upload an image to a Supabase Storage bucket named `project-images`.

If the bucket does not exist, is not public, or does not have the correct row-level security policy, the upload will fail with errors like:

- `Storage bucket "project-images" is missing or not public.`
- `new row violates row-level security policy`

## 2. Confirm your Supabase project

Open your Supabase project:
https://poqntodynxtbxybqxdea.supabase.co

Make sure you are logged in and working in the correct project.

## 3. Create the storage bucket

1. Open the sidebar.
2. Click `Storage`.
3. Click `Create a bucket`.
4. Name the bucket exactly:
   `project-images`
5. Set the bucket to `Public`.
6. Click `Create`.

If you want a different bucket name, then update your app config:

```env
NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=my_bucket_name
```

Then make sure the bucket name matches exactly.

## 4. Check the bucket is public

After creating the bucket, open the bucket settings.

Make sure the bucket is marked as `Public`.

This is required if you want public image URLs.

## 5. Create the upload policy

You need a policy that allows signed-in users to upload files to the bucket.

### Option A: SQL editor

Open SQL Editor in Supabase and run this:

```sql
create policy "Allow authenticated uploads"
on storage.objects
for insert
with check (
  bucket_id = 'project-images'
  and auth.role() = 'authenticated'
);
```

Then add a read policy:

```sql
create policy "Allow public reads"
on storage.objects
for select
using (
  bucket_id = 'project-images'
);
```

### Option B: Dashboard policy builder

1. Go to `Storage`
2. Open your bucket
3. Open `Policies`
4. Click `New policy`
5. Choose `For insert`
6. Use custom expression
7. Paste:

```sql
bucket_id = 'project-images' and auth.role() = 'authenticated'
```

8. Save

Then add another policy for `Select` with:

```sql
bucket_id = 'project-images'
```

## 6. Check your app environment variables

Open your local `.env` file and verify the values are present:

```env
NEXT_PUBLIC_SUPABASE_URL=https://poqntodynxtbxybqxdea.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key_here
```

Your app uses the URL and publishable key from this file.

## 7. Restart the app

After setting up the bucket and policy, stop and restart your app.

```bash
npm run dev
```

## 8. Test the upload flow

1. Sign in to the admin page.
2. Open the project form.
3. Fill in title, year, description.
4. Choose an image.
5. Click Post project.

If all is correct, the image uploads and the project is saved.

## 9. The app code expectations

This project is currently looking for a bucket named `project-images` by default.

The upload code in the app does this:

```ts
const BUCKET =
  process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET ?? "project-images";
```

That means:

- if no custom bucket is set, it uses `project-images`
- if you use another name, set the env variable

## 10. Common problems

### Problem: bucket missing

Create a bucket with the exact name used in the app.

### Problem: bucket not public

Turn on `Public` for the bucket.

### Problem: RLS error

Create the correct insert and select policy.

### Problem: wrong bucket name

Update `.env` with:

```env
NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET=project-images
```

## 11. Final checklist

Before testing again, confirm:

- [ ] Bucket exists
- [ ] Bucket is public
- [ ] Policy allows `insert` for authenticated users
- [ ] Policy allows `select` for public reads
- [ ] `.env` values are correct
- [ ] App restarted

## 12. If it still fails

Check the exact Supabase error message.

Most often, the issue is one of these:

1. bucket not created
2. bucket not public
3. missing insert policy
4. wrong bucket name in `.env`

## 13. Summary

The fix is usually:

- create bucket `project-images`
- make it public
- add SQL policy to allow authenticated inserts
- add select policy for reading the images
- restart app

Once this is done, image uploads should work correctly.
