import React, { useState, useEffect } from "react";

import styles from "../styles/Layout.module.css"

const Cover = ( {toggleCover, expanded} ) => {

    const [subheaderNumber, setSubheaderNumber] = useState(0);

    useEffect(() => {

        console.log(subheaderNumber)

        const interval = setInterval(() => {

            if (subheaderNumber < 2) {

                setSubheaderNumber(subheaderNumber + 1)

            } else {

                setSubheaderNumber(0)

            }

        }, 2000)

        return () => clearInterval(interval)

    }, [subheaderNumber])


    return (

        <div id={styles.cover_container}>

          

                    {
                        expanded ? 
                            <div id={styles.box_1_true}></div>:
                            <div id={styles.box_2_false}> </div>
                    }

                    {
                        expanded ?
                            <div id={styles.box_2_true}></div>:
                            <div id={styles.box_2_false}> </div>
                    }
                    
                    
                
                    {
                        expanded ? 
                            <h1 id={styles.title_cover_true}> Submission by Brian Driscoll </h1>:
                            <h1 id={styles.title_cover_false}> Submission by Brian Driscoll </h1>

                    }

                    <div id={styles.cover_subtitles_container}>
                        <h2 style={{ 
                            opacity: subheaderNumber === 0 && expanded ? '1': '0',
                            transition: 'all 1s',
                            transform: subheaderNumber === 0 ? 'translate(0,0)': 'translate(0, 20px)'
                        }}> 
                            Web Developer 
                        </h2>

                        <h2 style={{ 
                            opacity: subheaderNumber === 1 && expanded ? '1': '0',
                            transition: 'all 1s',
                            transform: subheaderNumber === 1 ? 'translate(0,0)': 'translate(0, 20px)'
                        }}> 
                            Coffee Addict 
                        </h2>
                        
                        <h2 style={{ 
                            opacity: subheaderNumber === 2 && expanded ? '1': '0',
                            transition: 'all 1s',
                            transform: subheaderNumber === 2 ? 'translate(0,0)': 'translate(0, 20px)'
                        }}> 
                            Book Nerd 
                        </h2>
                    </div>
                    
            
                    {

                        expanded ? 
                            <button 
                                onClick={() => toggleCover()}
                                id={styles.button_cover_true}
                            > 
                                Close Cover Page
                            </button>:
                            <button 
                            onClick={() => toggleCover()}
                            id={styles.button_cover_false}
                            > 
                                Close Cover Page
                            </button>
                    }
        </div>

    )

}

export default Cover;