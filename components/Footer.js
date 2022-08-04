import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {

    return (

        <div>

            <div id={styles.footer_wrapper}>

                <hr />

                <div id={styles.footer_content_wrapper}>

                    <div id={styles.left_footer_logo}>
                        <Image src="/logo.png" alt="temp3" width="50" height="50"/>
                    </div>

                    <div id={styles.right_footer_section}>
                        <p> Terms </p>
                        <p> Privacy </p>
                        <p> Sitemap </p> 

                    </div>

                </div>


            </div>

        </div>


    )

}

export default Footer;