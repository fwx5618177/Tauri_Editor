import { Button } from 'antd'
import { Navigate } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <div>
                <Button type='primary' onClick={() => <Navigate to={'/home'} replace />}>
                    Home
                </Button>
                <Button type='primary' onClick={() => <Navigate to={'/text'} replace />}>
                    Text
                </Button>
                <Button type='primary' onClick={() => <Navigate to={'/signin'} replace />}>
                    SignIn
                </Button>
            </div>
        </>
    )
}

export default Main
