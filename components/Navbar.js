import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {


    return (

        <div id={styles.navbar}>

            <div id={styles.nav_logo}>

                <Image src="/logo.png" alt="temp3" width="50" height="50"/>

            </div>

            <div id={styles.nav_links_and_profile}>

                <Link href="/account"> Account </Link>
                <Link href="/help"> Help </Link>
                <Link href="/profile" id={styles.profile_image}> 
                    <a id={styles.profile_image}> 
                        <Image src="/user.png" alt="temp2" width="50" height="50" /> 
                    </a> 
                </Link>

            </div>


        </div>

    )

}

export default Navbar