import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { API_URL } from '../constants/api';
import { Stories } from '../types/story';

const POLLING_WAIT = 10000; // ms

export const useGetFeed = () => {
  const [loading, setLoading] = useState(true);
  // Page 0 and 1 return the same stores. Start at 0 to allow incrementPage to handle incrementing.
  const [page, setPage] = useState(0);
  const [feed, setFeed] = useState<Stories>([]);
  const [errored, setErrored] = useState(false);

  const incrementPage = async () => {
    setLoading(true);
    const nextPage = page + 1;
    const url = `${API_URL}?page=${nextPage}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('API Error');
      }

      const json: Stories = await response.json();
      // Uncomment to display "new stories" behavoir.
      // const jsonSliced = json.slice(24);
      setFeed((feed) => [...feed, ...json]);

      setPage(nextPage); // Only increment page in case of successful call.
    } catch (error) {
      console.error('There was an error with the load more API call.'); // Sentry log
      setErrored(true);
    } finally {
      setLoading(false);
    }
  };

  // Retrieve initial feed on load.
  let initialized = false;
  useEffect(() => {
    if (!initialized) {
      // Alleviate local dev double-load issue.
      initialized = true; // eslint-disable-line react-hooks/exhaustive-deps

      incrementPage();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Instantiate polling for new stories on load.
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fetchLatestStories = async () => {
        try {
          const response = await fetch(API_URL);

          if (!response.ok) {
            throw new Error('API Error');
          }

          const json: Stories = await response.json();
          console.log('here');

          setFeed((feed) => {
            const newStories = json.filter(
              ({ id }) => !feed.some((feedItem) => feedItem.id === id)
            );

            if (!newStories.length) {
              toast('No new stories found.', { id: 'no-new-stories' });
              return feed;
            }

            toast.success('New stories added to the top of the list.', { id: 'found-new-stories' });
            return [...newStories, ...feed];
          });
        } catch {
          console.error('There was an error with the load more API call.'); // Sentry log
          setErrored(true);
        } finally {
          setTimeout(fetchLatestStories, POLLING_WAIT);
        }
      };

      fetchLatestStories();
    }, POLLING_WAIT);

    return () => {
      clearTimeout(timeout);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isFirstLoad = !feed.length && loading;
  const noData = !feed.length && !loading && !errored;

  return {
    errored,
    feed,
    incrementPage,
    isFirstLoad,
    loading,
    noData,
  };
};
