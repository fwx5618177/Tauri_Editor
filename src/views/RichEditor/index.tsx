import { useRef } from 'react'
import { Button } from 'rsuite'
import { handleInput } from './core'
import styles from './style.module.scss'

export default () => {
    const textRef = useRef<HTMLDivElement | null>(null)

    const handleText = () => {
        if (!textRef.current) return

        const values = textRef.current.innerHTML

        handleInput(values)
    }
    return (
        <>
            <div className={styles.editorWrapper}>
                <div className={styles.editorTextWrapper}>
                    <div ref={textRef} className={styles.editeText} contentEditable></div>
                    <Button appearance='primary' color='orange' onClick={handleText}>
                        Parse
                    </Button>
                </div>
            </div>
        </>
    )
}
