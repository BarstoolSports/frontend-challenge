import React from 'react'

const Card = ({ story }) => {
  return (
    <>
      <div className='card'>
        <img className='card__image' src={story.thumbnail.desktop} alt={story.title} />
        <div className='card__content'>
          <h2 className='card__title'>{story.title}</h2>
          <div className='card__author'>
            <img src={story.author.avatar} alt={story.author.name} />
            <p>{story.author.name}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          display: flex;
          padding: 15px;
          border: 1px solid #ddd;
          margin-bottom: 15px;
        }
        .card__image {
          width: 120px;
          height: auto;
          align-self: flex-start;
          border: 1px solid #ddd;
          margin-right: 15px;
        }
        .card__content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card__title {
          margin: 0;
          font-size: 16px;
        }
        .card__author {
          display: flex;
          align-items: center;
        }
        .card__author img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 8px;
        }
        .card__author p {
          font-size: 14px;
        }
        @media (min-width: 600px) {
          .card__image {
            width: 200px;
          }
          .card__title {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  )
}

export default Card