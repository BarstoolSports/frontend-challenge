import React, { useState } from 'react';
import useLatestStories from '../../hooks/feed';
import { IStory } from '../../models/story-interface';
import Story from '../Story';

const Feed = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { stories, isLoading, isError } = useLatestStories(currentPage);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  if (isLoading) {
    return <div className='feed-loading'>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading stories.</div>;
  }
  return (
    <div>
      {stories.map((story: IStory, index: number) => (
        <Story story={story} key={`${story.id}-${index}`} />
      ))}
      <button className='load-more-button' onClick={handleLoadMore}>Load more</button>
    </div>
  );
};

export default Feed;
