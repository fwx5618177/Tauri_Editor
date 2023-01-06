import styles from './style.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'rsuite'
import { useRef } from 'react'

const Welcome = () => {
    const { t } = useTranslation()
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    const handleEntry = () => {
        if (!wrapperRef.current) return
        const classNames = wrapperRef.current.className
        if (classNames === styles.wrapper) wrapperRef.current.className = styles['wrapper-close']
        else wrapperRef.current.className = styles['wrapper']
    }

    return (
        <>
            <div className={styles.wrapper} ref={wrapperRef}>
                <div className={styles.box}>
                    <div className={styles.img}>
                        <img />
                    </div>
                    <h2>{t('welcomeTitle')}</h2>
                    <div className={styles.desc}>{t('welcomeDesc')}</div>
                    <Button
                        className={styles.btn}
                        appearance='primary'
                        color='cyan'
                        onClick={handleEntry}
                    >
                        {t('welcomeEntry')}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Welcome
