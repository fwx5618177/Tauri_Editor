import styles from './style.module.scss'

export default () => {
    return (
        <>
            <div className={styles.editorWrapper}>
                <div className={styles.editorTextWrapper}>
                    <div className={styles.editeText} contentEditable></div>
                </div>
            </div>
        </>
    )
}
