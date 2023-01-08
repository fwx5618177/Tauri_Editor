import styles from './style.module.scss'

const LightTransCard = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.box}>
                    <span className={styles.title}>GLASS EFFECT</span>
                    <div>
                        <strong>JOE WATSON SBF</strong>
                        <p>0000 000 000 0000</p>
                        <span>VALID</span> <span>01/28</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LightTransCard
