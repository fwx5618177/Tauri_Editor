import styles from './header.module.scss'

const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h3>LOGO</h3>
            </div>
            <div className={styles.list}></div>
        </header>
    )
}

export default AppHeader
