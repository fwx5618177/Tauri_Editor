import React from 'react'
import styles from './style.module.scss'

type ThemeType = 'light' | 'dark'

interface ThemeStatusProps {
    status?: ThemeType
}

const ThemeStatus = (_props: ThemeStatusProps) => {
    return (
        <>
            <label className={styles.container}>
                <input
                    // checked={props?.status === 'dark' ? true : false}
                    type='checkbox'
                    id={styles.check}
                />
                <span></span>
                <label className={styles.shadow} htmlFor={styles.check}></label>
            </label>
        </>
    )
}

export default ThemeStatus
