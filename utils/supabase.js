import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const client = createClient(supabaseUrl, supabaseAnonKey);

const bucketName = 'rekawice';

function getPublicUrls(dataArray) {
  return dataArray.map((obj) => obj.data.publicUrl);
}

export async function getBucketUrls() {
  const bucket = client.storage.from(bucketName);
  const { data: bucketContents, error } = await bucket.list();

  if (error) {
    console.error(error);
    return [];
  }
  const jpgPngFiles = bucketContents.filter(
    (file) =>
      file.name.endsWith('.jpg') ||
      file.name.endsWith('.jpeg') ||
      file.name.endsWith('.png')
  );

  const jpgPngUrls = jpgPngFiles.map((file) =>
    client.storage.from(bucketName).getPublicUrl(file.name)
  );

  const publicUrlArray = getPublicUrls(jpgPngUrls);

  return publicUrlArray;
}
