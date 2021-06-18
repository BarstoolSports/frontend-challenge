import React from 'react'
import useFeed from '../../hooks/feed'
import useInterval from '../../hooks/interval'
import Story from '../Story'

const Feed = ({ stories }) => {
  const { loadMore, refresh, loading, data } = useFeed(stories)
  useInterval(refresh, 30 * 1000)

  return (
    <>
      <div className='feed'>
        {data.map((story) => {
          return <Story key={story.id} story={story} />
        })}
        <a
          onClick={loadMore}
          className={`btn ${loading ? 'btn--loading' : ''}`}
        >
          {loading ? 'Loading...' : 'Load More'}
        </a>
      </div>
      <style jsx>{`
        .btn {
          display: block;
          padding: 15px;
          background-color: #c4232a;
          color: #fff;
          text-align: center;
          cursor: pointer;
        }
        .btn--loading {
          background-color: gray;
        }
      `}</style>
    </>
  )
}

export default Feed
