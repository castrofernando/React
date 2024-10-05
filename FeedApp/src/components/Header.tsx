import styles from './Header.module.css'
import Logo from '../assets/logo.svg';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo do feed app"/>
            <h2>Feed App</h2>
        </header>
    )
}