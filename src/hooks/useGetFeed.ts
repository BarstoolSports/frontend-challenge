import { useEffect, useState } from 'react';
import { API_URL } from '../constants/api';
import { Stories } from '../types/story';

export const useGetFeed = ({}) => {
  const [feed, setFeed] = useState<Stories>([]);

  useEffect(() => {
    const getFeed = async () => {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setFeed(json);
      } catch (error) {
        // TODO: Further handle API call
        console.error('There was an error with the API call.');
      }
    };

    getFeed();
  }, []);

  return {
    feed,
  };
};
