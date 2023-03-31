import { useEffect, useMemo, useState } from 'react';
import { API_URL } from '../constants/api';
import { Stories } from '../types/story';

export const useGetFeed = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [feed, setFeed] = useState<Stories>([]);
  const [errored, setErrored] = useState(false);

  const incrementPage = async () => {
    const nextPage = page + 1;
    const url = `${API_URL}?page=${nextPage}`;

    setLoading(true);

    try {
      const response = await fetch(url);
      const json = await response.json();
      setFeed([...feed, ...json]);
    } catch (error) {
      console.error('There was an error with the load more API call.'); // Sentry log
      setErrored(true);
    } finally {
      setLoading(false);
    }

    setPage(nextPage);
  };

  // Used for initial feed call
  useEffect(() => {
    const getInitialFeed = async () => {
      setLoading(true);

      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setFeed(json);
      } catch (error) {
        console.error('There was an error with the API call.'); // Sentry log
        setErrored(true);
      } finally {
        setLoading(false);
      }
    };

    getInitialFeed();
  }, []);

  return {
    errored,
    feed,
    incrementPage,
    loading,
  };
};
