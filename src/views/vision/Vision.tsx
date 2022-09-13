import { Card } from 'antd'
import DragNodes from './DragNodes'
import MindMap from './MindMap'

const Vision = () => {
    return (
        <>
            <Card
                style={{
                    margin: 12,
                }}
            >
                <DragNodes />
            </Card>

            <Card
                style={{
                    margin: 12,
                }}
            >
                <MindMap />
            </Card>
        </>
    )
}

export default Vision
