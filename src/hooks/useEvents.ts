import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api, getImageUrl } from '@/lib/axios';

export interface ImageData {
  id: number;
  url: string;
  formats?: {
    medium?: { url: string };
    small?: { url: string };
  };
}

export interface CategoryData {
  id: number;
  documentId: string;
  name: string;
  icon: ImageData | null;
}

interface EventData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  short_description?: string;
  start_date: string;
  location: string;  
  category: { name: string } | null;
  images?: ImageData[] | null;
}

export interface FormattedEvent {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  imageUrl: string;
  location: string;  
  startDate: string;  
  galleryImages: string[];
}

const fetchEventTypes = async () => {
  const { data } = await api.get('/event-types?populate=*');
  return data;
};

const fetchEvents = async (page: number, category: string) => {
  const pageSize = 8; 
  let query = `/events?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

  if (category && category !== 'All') {
    query += `&filters[category][name][$eq]=${encodeURIComponent(category)}`;
  }

  const { data } = await api.get(query);
  return data;
};

export const useEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);

  const { data: categoriesData, isLoading: isLoadingCategories } = useQuery({
    queryKey: ['event-types'],
    queryFn: fetchEventTypes,
  });

  const categories = (categoriesData?.data || []) as CategoryData[];
  const activeCategory = selectedCategory ?? categories[0]?.name ?? '';

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    setPage(1);
  };

  const { 
    data: eventsData, 
    isLoading: isLoadingEvents, 
    isError: isEventsError,
    isPlaceholderData 
  } = useQuery({
    queryKey: ['events', page, activeCategory],
    queryFn: () => fetchEvents(page, activeCategory),
    enabled: !!activeCategory,
    placeholderData: (previousData) => previousData,
  });

  const rawEvents = eventsData?.data || [];
  
  const displayEvents: FormattedEvent[] = rawEvents.map((event: EventData) => {
    // Get main image
    const mainImg = event.images && event.images.length > 0 ? event.images[0].url : null;
    
    // Get all images for gallery
    const gallery = event.images?.map(img => getImageUrl(img.url)) || [];

    return {
      id: event.id,
      title: event.title,
      description: event.short_description || event.description, 
      fullDescription: event.description,
      category: event.category?.name || 'Uncategorized',
      imageUrl: getImageUrl(mainImg),
      location: event.location || 'TBA',
      startDate: event.start_date,
      galleryImages: gallery
    };
  });

  return {
    categories,
    displayEvents,
    activeCategory,
    setActiveCategory: handleCategoryChange, 
    page,
    setPage,
    isLoading: isLoadingCategories || (isLoadingEvents && !isPlaceholderData),
    isError: !!isEventsError,
    pagination: eventsData?.meta?.pagination
  };
};