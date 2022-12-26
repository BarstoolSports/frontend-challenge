import React, {useState, useEffect, SetStateAction} from "react";
import { ReactNode } from "react";
import { API_URL } from "../../constants";
import Image from "next/image";
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
      console.log(length);
      setStories(stories.slice(0, storiesLength));
  };

  useEffect(() => {
    getStories(storiesLength);
  }, [storiesLength])

  function handleClick() {
    setStoriesLength(storiesLength + 5);
    getStories(storiesLength);
  }

  const buttonStyle = {
    padding: "5px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "5px",
  };

  const buttonLoading = {
    padding: "5px",
    backgroundColor: "grey",
    color: "white",
    borderRadius: "5px",
  };

  return (
    <>
    {isLoading ? (
      <div>
        <button style={buttonLoading}>Loading...</button>
      </div>
    ) : (
      <div>
      <div>
        {
          stories.map((story) => {
            return (
              <Story story={story}/>
            );
          })
        }
      </div>
        <button style={buttonStyle} onClick={handleClick}>Load More</button>
      </div>
    )}
    </>
  )

};

export default Feed;