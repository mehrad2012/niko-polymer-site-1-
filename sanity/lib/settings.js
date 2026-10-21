import { client } from './client';

export async function getSiteSettings() {
  try {
    return await client.fetch(`*[_type == "siteSettings"][0]`);
  } catch (err) {
    return null;
  }
}
