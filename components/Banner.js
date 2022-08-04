import styles from "../styles/Banner.module.css";
import Navbar from "./Navbar";

const Banner = ( { toggleCover } ) => {

    return (

        <div 
            id={styles.banner}
        >
            <Navbar />
        
            <div id={styles.banner_content}>
                <h1> The world&apos;s greatest fake site </h1>
                <p> Create the world&apos;s greatest fake site and
                    enjoy the breeze of fresh air when you complete it </p>
                <button onClick={() => toggleCover()}> Do something awesome (click me!) </button>
            </div>

        </div>

    )

}

export default Banner;