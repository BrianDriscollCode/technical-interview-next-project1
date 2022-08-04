import Banner from "./Banner"
import Cover from "./Cover";
import Sitemap from "./Sitemap";
import Footer from "./Footer"
import styles from "../styles/Layout.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";


const Layout = ( {children} ) => {

    const [expanded, setExpanded] = useState(false)
    const [expandCover, setExpandCover] = useState(styles.cover_component_min);
    
    const router = useRouter();

    const toggleCover = () => {
        if (expanded === true) {

            setExpanded(false);
            setExpandCover(styles.cover_component_min);

        } else {

            setExpanded(true);
            setExpandCover(styles.cover_component_max);

        }   

        //Scroll up to cover
        router.push("/#Layout_cover_component_max__OzE9K")
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
        
        {/* Footer content */}
        <Sitemap />
        <Footer />
        
         

        </>

    )

}

export default Layout;