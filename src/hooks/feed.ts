import { useState, useEffect } from 'react';
import { IStory } from '../models/story-interface';
import { API_URL } from '../constants';

interface IUseLatestStoriesHook {
  stories: IStory[];
  pagination: { currentPage: number; totalPages: number; totalStories: number };
  isLoading: boolean;
  isError: boolean;
}

const useLatestStories = (page: number): IUseLatestStoriesHook => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalStories: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchStories = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}?page=${page}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json() as IStory[];
      setStories(prevStories => [...prevStories, ...(data || [])]); // Null check and default to empty array
      setPagination(prevPagination => ({
        currentPage: prevPagination.currentPage + 1,
        totalPages: Math.ceil((prevPagination.totalStories + data.length) / 25),
        totalStories: prevPagination.totalStories + data.length,
      }));
    } catch (error) {
      setIsError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStories(page);
  }, [page]);

  return { stories, pagination, isLoading, isError };
};

export default useLatestStories;
