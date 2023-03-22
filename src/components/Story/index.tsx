import React from 'react';
import { IStory } from '../../models/story-interface';

interface StoryProps {
  story: IStory;
}

const Story: React.FC<StoryProps> = ({ story }) => {
  return (
    <div className='feed-card'>
      {/* added an href wrapper - i would assume prod ready a user would click a card and be taken to the news article/modal would open up */}
      {/* after looking at the res it looks like _some_ of the mock data have articles so threw it in just because */}
      <a href={story.branch_url} target='_blank'>
        <div className='feed-card-wrapper'>
          <img
            className='feed-card-image'
            src={`${story.thumbnail.location}${story.thumbnail.images.small}`}
            alt={`${story.title} image`}
          />
          <div className='feed-card-content'>
            <h3
              className='feed-card-title'
              aria-label={story.title}
            >
              {story.title}
            </h3>
            <div className='feed-card-author-wrapper'>
              {story.author.avatar ? (
                <img
                  className='feed-card-author-image'
                  src={story.author.avatar}
                  alt={`${story.title} author`}
                />
              ) : (
                <p className='feed-card-author-image-not-found'>🥺 No image found</p>
              )}
              <p className='feed-card-author'>{story.author.name}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Story;
