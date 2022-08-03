import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {


    return (

        <div id={styles.navbar}>

            <div id={styles.nav_logo}>

                <img src="logo.png" />

            </div>

            <div id={styles.nav_links_and_profile}>

                <Link href="/account"> Account </Link>
                <Link href="/help"> Help </Link>
                <Link href="/profile" id={styles.profile_image}> 
                    <a id={styles.profile_image}> 
                        <img src="user.png" width="50" height="50" /> 
                    </a> 
                </Link>

            </div>


        </div>

    )

}

export default Navbar