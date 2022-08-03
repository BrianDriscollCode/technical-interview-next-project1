import styles from "../styles/Banner.module.css";
import Navbar from "./Navbar";

const Banner = () => {

    return (

        <div 
            id={styles.banner}
        >
            <Navbar />
        
            <div id={styles.banner_content}>
                <h1> The world's greatest fake site </h1>
                <p> Create the world's greatest fake site and
                    enjoy the breeze of fresh air when you complete it </p>
                <button> Do something awesome </button>
            </div>

        </div>

    )

}

export default Banner;