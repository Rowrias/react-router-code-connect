import { Link } from 'react-router'
import styles from './asidelink.module.css'

const AsideLink = ({ href, children }) => {
    return (<Link href={href} className={styles.asidelink}>
        {children}
    </Link>)
}

export default AsideLink