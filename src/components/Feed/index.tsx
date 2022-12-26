import React, {useState, useEffect} from "react";
import { API_URL } from "../../constants";
import styles from "../../../styles/Feed.module.css"
import Story from "../Story";

type StoryProps = {
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

const Feed: React.FC = () => {
  const [stories, setStories] = useState<StoryProps[]>([]);
  const [storiesLength, setStoriesLength] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  async function getStories(length:number) {
      setIsLoading(true);
      const response = await fetch(API_URL, {
        method: "GET"
      });

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const stories = await response.json();
      setIsLoading(false);
      setStories(stories.slice(0, storiesLength));
  };

  useEffect(() => {
    getStories(storiesLength);
  }, [storiesLength])

  function handleClick() {
    setStoriesLength(storiesLength + 5);
    getStories(storiesLength);
  }


  return (
    <>
    {isLoading ? (
      <div className={styles.loading}>
        <button className={styles.loading}>Loading...</button>
      </div>
    ) : (
      <div className={styles.feed}>
      <div>
        {
          stories.map((story, i) => {
            return (
              <Story story={story} key={i}/>
            );
          })
        }
      </div>
        <button className={styles.button} onClick={handleClick}>Load More</button>
      </div>
    )}
    </>
  )

};

export default Feed;