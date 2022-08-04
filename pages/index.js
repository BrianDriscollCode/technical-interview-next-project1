import Axios from 'axios'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react";
import Image from "next/image"

export default function Home( { videoData } ) {


  const [videoNumber, setVideoNumber] = useState(1)
  const [showFullDescription, setShowFullDescription] = useState(false);

  //toggle through videos from API
  useEffect(() => {
    const interval = setInterval(() => {
      if (videoNumber <= videoData.length - 2) {
        setVideoNumber(videoNumber + 1);
      } else {
        setVideoNumber(0)
      }
    }, 5000)

    return () => clearInterval(interval);

  }, [videoNumber])

  //Replace <br /> in description text using a regular expression
  let description = videoData[videoNumber].description.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g,' ')

  //Toggle video description parameter
  const setDescription = () => {

    setShowFullDescription(!showFullDescription)

  }

  const openVimeoVideo = (url) => {

    window.open(url, '_blank', 'noopener,noreferrer');

  }

  return (
    <div className={styles.container}>

            {/****** Video API Display Section ******/}

            <div>

                <div id={styles.video_section}>
                  <div id={styles.video_section_left}>
                    <h1> Title: {videoData[videoNumber].title} </h1>
                    <p className={styles.video_description}> 
                      Description: {

                        description.length > 599 && !showFullDescription ?
                          description.substring(0, 610) + "...":
                          description

                      } 
                    </p>       

                    <div
                      onClick={() => setDescription()}
                      className={styles.expand_description}
                      style={{cursor: 'pointer'}}
                    >
                      {/* Shorten Description and add expander option
                          depending on character length */}
                      {
                        description.length > 599 && !showFullDescription ?
                          "(Expand Description)":
                          ""
                      }

                      { 
                        description.length > 599 && showFullDescription ?
                          "(Minimize Description)":
                          ""
                    }
                    </div>                                 
                  </div>
                  
                  <div 
                    id={styles.video_section_right}
                    style={{
                      backgroundImage: `url("${videoData[videoNumber].thumbnail_large}")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover'

                    }}
                    onClick={() => openVimeoVideo(videoData[videoNumber].url)}
                  >    
                  
                    <Image 
                      src="/playbtn.png"
                      id={styles.video_button}
                      height="175"
                      width="175"
                      alt="test5"
                    />   
                  </div>
                
                </div>

                {/****** Section 2 Title Section ******/}

                <div id={styles.section_2_title}>

                    <div id={styles.section_2_wrapper}>
                      <h3> Ready to have your cake and eat it to? </h3>
                      <p> 
                        Start by designing the experience you have in mind. We&apos;ll guide you through each step. If
                        your experience meets the quality standards, you&apos;ll hear more about what&apos;s next.
                      </p>
                    </div>
                    
                </div>
                
            </div>

    </div>
  )
}

//Pull video from Vimeo API
export const getStaticProps = async () => {
    
  const data = await Axios.get(
      "https://vimeo.com/api/v2/channel/staffpicks/videos.json"
  )

  return {

      props: {
          videoData: data.data
      }

  }

}