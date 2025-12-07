import { useQuery } from '@tanstack/react-query';
import { api, getImageUrl } from '@/lib/axios';

interface ImageData {
  url: string;
}

interface ApiEvent {
  id: number;
  title: string;
  description: string;
  short_description?: string;
  start_date: string;
  images?: ImageData[] | null;
}

export interface FeaturedEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

// FETCH FUNCTION 
const fetchFeaturedEvents = async () => {
  // Filter by featured=true and populate images
  const { data } = await api.get('/events?filters[featured][$eq]=true&populate=*');
  return data;
};

//HOOK 
export const useFeaturedEvents = () => {
  const { data: apiData, isLoading, error } = useQuery({
    queryKey: ['featured-events'],
    queryFn: fetchFeaturedEvents,
  });

  // Transform Data
  const events: FeaturedEvent[] = apiData?.data?.map((item: ApiEvent) => {
    // Get Image using helper
    const imagePath = item.images && item.images.length > 0 ? item.images[0].url : null;
    
    // Format Date
    const dateObj = new Date(item.start_date);
    const dateStr = dateObj.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });

    return {
      id: item.id,
      title: item.title,
      description: item.short_description || item.description,
      date: dateStr,
      imageUrl: getImageUrl(imagePath),
    };
  }) || [];

  return {
    events,
    isLoading,
    isError: !!error,
  };
};