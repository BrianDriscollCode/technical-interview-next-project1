import Banner from "./Banner"
import Cover from "./Cover";
import styles from "../styles/Layout.module.css";

import React, { useState } from "react";


const Layout = ( {children} ) => {

    const [expanded, setExpanded] = useState(false)
    const [expandCover, setExpandCover] = useState(styles.cover_component_min);

    const toggleCover = () => {
        if (expanded === true) {

            setExpanded(false);
            setExpandCover(styles.cover_component_min);

        } else {

            setExpanded(true);
            setExpandCover(styles.cover_component_max);

        }   
    }

    return (

        <>

        {/* When "Do something awesome" button is clicked */}
        <div id={expandCover}>
            <Cover toggleCover={toggleCover} expanded={expanded}/>
        </div>
        
        

        {/* Main content of page */}
        <Banner toggleCover={toggleCover}/>
        <div> {children} </div>
     
        
         

        </>

    )

}

export default Layout;