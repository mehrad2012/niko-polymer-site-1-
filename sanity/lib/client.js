import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion } from '../env';

// اگه به هر دلیلی اتصال ساخته نشد، سایت کرش نمی‌کنه — فقط بخش محتوا خالی می‌مونه.
function createSafeClient() {
  if (!projectId) {
    return { fetch: async () => null };
  }
  try {
    return createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    });
  } catch (err) {
    return { fetch: async () => null };
  }
}

export const client = createSafeClient();
