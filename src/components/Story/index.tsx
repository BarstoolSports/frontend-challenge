import Image from "next/image";
import React from "react";
import styles from "../../../styles/Feed.module.css"

type StoryProps = {
  story: {
    title: string;
    author: {
      name: string;
      avatar: string;
    }
    thumbnail: {
      type: string;
      location: string;
      raw: string;
    }
  }
}

const Story = ({story} : StoryProps) => {
  return (
    <>
      <div className={styles.story}>
          <div className={styles.thumbnail}>
            <Image alt="Thumbnail for blog" src={story.thumbnail.raw} height="150" width="200"/>
          </div>
          <div className={styles.storyDetails}>
            <p>{story.title}</p>  
            <div className={styles.authorDetails}>
              {story.author.avatar ? (
                <Image className={styles.avatar} alt="Photo of author" src={story.author.avatar} height="30" width="30"/>
              ): (
                <div className="defaultAuthor"></div>
              )}
              <p>{story.author.name}</p>
            </div>
          </div>
       </div>
    </>
  )
};

export default Story;