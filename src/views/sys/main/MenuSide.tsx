import { Button } from 'antd'
import { Link } from 'react-router-dom'
import '/@/design/menu.less'

const MenuSide = () => {
    return (
        <>
            <div id='main_page_menu_left'>
                <Button type='primary'>
                    <Link to={'/signin'}>Sign In</Link>
                </Button>
                <Button type='primary'>
                    <Link to={'/error'}>404</Link>
                </Button>
                <Button type='primary'>
                    <Link to={'/home'}>Home</Link>
                </Button>
                <Button type='primary'>
                    <Link to={'/logicflow'}>Text</Link>
                </Button>
                <Button type='primary'>
                    <Link to={'/g6'}>g6</Link>
                </Button>
            </div>
        </>
    )
}

export default MenuSide
