import Welcome from './views/Welcome'
import styles from '~styles/appHome.module.scss'
import { useState } from 'react'
import DirectoryMenu from './views/DirectoryMenu'
// import AppHeader from '/@/components/AppHeader/AppHeader'

const App = () => {
    const [sequence, setSequence] = useState<number>(0)

    const list = [
        {
            key: 1,
            label: 'test',
            value: 'test',
        },
    ]

    return (
        <>
            {/* <AppHeader /> */}
            <div className={styles.container}>
                <div className={styles.section}>
                    {sequence === 0 && <Welcome onClick={() => setSequence(1)} />}
                    {sequence === 1 && (
                        <DirectoryMenu
                            list={new Array(20).fill(list[0])}
                            onClick={() => setSequence(0)}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

export default App
