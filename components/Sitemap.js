import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Sitemap = () => {

    return (

        <div >

            <div id={styles.sitemap_wrapper}>

                <div className={styles.sitemap_section}>
                    <h4> Fakesite </h4>
                    <ul>
                        <li>
                            <Link href="/">
                                <a> About us </a>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/">
                                <a> Press </a>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/">
                                <a> Policies </a>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/">
                                <a> Help </a>
                            </Link>
                        </li>
                    </ul>

                </div>

                <div className={styles.sitemap_section}>
                <h4> Account </h4>
                    <ul>
                        <li>
                            <Link href="/">
                                <a> Edit Profile  </a>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/">
                                <a> Friends </a>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/">
                                <a> Social </a>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href="/">
                                <a> Delete Profile </a>
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>

        </div>

    )


}

export default Sitemap;