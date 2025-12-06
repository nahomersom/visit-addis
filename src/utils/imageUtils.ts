import { BASE_URL } from "@/lib/axios"; 
import type { StrapiImage } from "@/types/blog";

export const getImageUrl = (imageData: StrapiImage | undefined | null) => {
  if (!imageData) return 'https://placehold.co/600x400?text=No+Image';

  // Priority: Medium -> Small -> Original
  const url = imageData.formats?.medium?.url || 
              imageData.formats?.small?.url || 
              imageData.url;

  if (!url) return 'https://placehold.co/600x400?text=No+Image';

  // Return Cloudinary/External URL as is
  if (url.startsWith('http')) return url;

  // Append Base URL for local Strapi images
  return `${BASE_URL}${url}`;
};

export const formatDate = (dateString: string) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};