import styles from './Header.module.css'
import Link from '../Link'
import { AnimatePresence, motion } from 'framer-motion'


export default function Header() {
    return (
        <AnimatePresence exitBeforeEnter>
            <header className={styles.header}>
                <ul className={styles.headerItems}>
                    <li>
                        <Link href="/" activeClassName="active">
                            <motion.a className={styles.link}>
                                Home of sorrow
                            </motion.a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/downloads" activeClassName="active">
                            <motion.a className={styles.link}>
                                Downloads
                            </motion.a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/test" activeClassName="active">
                            <motion.a className={styles.link}>
                                Blog
                            </motion.a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/team" activeClassName="active">
                            <motion.a className={styles.link}>
                                Knowledge Base
                            </motion.a>
                        </Link>
                    </li>
                </ul>
                <svg className={styles.hamburger} width="43" height="22" viewBox="0 0 43 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="43" height="4" fill="black"/>
                    <rect y="9" width="43" height="4" fill="black"/>
                    <rect y="18" width="43" height="4" fill="black"/>
                </svg>
            </header>
        </AnimatePresence>
    )
}