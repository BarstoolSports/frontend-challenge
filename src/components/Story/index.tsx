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

const storyStyle = {
  border: "solid black .5px",
  borderColor: "grey",
  margin: "10px",
  display:"flex",
  flexDirection: 'row' as 'row'
};

const Story = ({story} : StoryProps) => {
  return (
    <>
      <div style={styles.story}>
          <div style={{padding:"10px"}}>
            <img src={story.thumbnail.raw} height="150px" width="150px"/>
          </div>
          <div>
            <p style={{fontWeight:"bold", margin:"10px 0 50px 0"}}>{story.title}</p>  
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
              <img style={{borderRadius:"50%", margin:"0 10px 0 0"}} src={story.author.avatar} height="20px" width="30px"/>
              <p>{story.author.name}</p>
            </div>
          </div>
       </div>
    </>
  )
};

export default Story;