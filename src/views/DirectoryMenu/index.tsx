import { Button } from 'rsuite'
import styles from './style.module.scss'

interface MenuItem {
    key: number | string
    label: string
    value: number | string
    children?: MenuItem[]
}

interface MenuProps {
    list?: MenuItem[]
    onClick?: () => void
}

export default (props: MenuProps) => {
    return (
        <>
            <div className={styles.menuBox}>
                <div className={styles.menuHeader}>
                    <Button onClick={props?.onClick} appearance='primary' color='orange'>
                        Exit
                    </Button>
                </div>
                <div className={styles.menuBody}>
                    {props?.list?.map((ci, index) => (
                        <div className={styles.itemWrapper} key={index}>
                            {ci?.label}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
