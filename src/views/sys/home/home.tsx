import { Button } from 'antd'
import { LoadingComponents } from '/@/components/Loading'

const Home = () => {
    return (
        <>
            <LoadingComponents
                {...{
                    tip: 'loading...',
                    background: 'rgba(111,111,111,.7)',
                    theme: 'dark',
                    loading: true,
                    absolute: false,
                }}
            />
            <Button type='primary'>1</Button>
        </>
    )
}

export default Home
