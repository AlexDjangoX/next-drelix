import { supabase } from './supabaseClient.js';

const bucketName = 'rekawice';

function getPublicUrls(dataArray) {
  return dataArray.map((obj) => obj.data.publicUrl);
}

export async function getBucketUrls() {
  const bucket = supabase.storage.from(bucketName);
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
    supabase.storage.from(bucketName).getPublicUrl(file.name)
  );

  const publicUrlArray = getPublicUrls(jpgPngUrls);

  return publicUrlArray;
}
