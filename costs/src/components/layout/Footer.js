import {FaGithub, FaWhatsapp, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}><FaGithub></FaGithub></li>
                <li className={styles.item}><FaWhatsapp></FaWhatsapp></li>
                <li className={styles.item}><FaLinkedin></FaLinkedin></li>
            </ul>
            <p className={styles.copy}><span>Costs </span>&copy; 2024</p>
        </footer>
    )
}

export default Footer