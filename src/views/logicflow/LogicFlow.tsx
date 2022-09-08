import propTypes from 'prop-types'
import { Graph } from '@antv/x6'
import { useEffect, useRef, useState } from 'react'

const LogicFlow = () => {
    const graphRef = useRef<HTMLDivElement>(null)
    const [graphNode, setGraphNode] = useState<Graph>(null as unknown as Graph)

    const init = () => {
        ;(graphRef.current as HTMLDivElement).style.width = document.body.clientWidth + 'px'
        ;(graphRef.current as HTMLDivElement).style.height = document.body.clientHeight / 2 + 'px'

        const graph = new Graph({
            container: graphRef.current as HTMLDivElement,
            grid: true,
            autoResize: true,
        })

        window.addEventListener('resize', () => {
            ;(graphRef.current as HTMLDivElement).style.width = document.body.clientWidth + 'px'
            ;(graphRef.current as HTMLDivElement).style.height =
                document.body.clientHeight / 2 + 'px'
        })

        setGraphNode(graph)
    }

    interface NodeInfo {
        x?: number
        y?: number
        width?: number
        height?: number
        text: string
    }

    const nodes: NodeInfo[] = [
        {
            text: 'fwx',
        },
        {
            text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        },
    ]

    const addNodes = nodes.map((ci, index) => ({
        x: 160 + index * 10,
        y: 220 + index * 5,
        shape: 'text-block',
        width: ci?.text?.length * 5 > 300 ? 300 : ci?.text?.length * 20,
        height: (ci?.text?.length * 5) / 5 > 100 ? ci?.text?.length : 100,
        text: ci.text,
        attrs: {
            body: {
                fill: '#efdbff',
                stroke: '#9254de',
                rx: 4,
                ry: 4,
            },
        },
    }))

    useEffect(() => {
        init()
    }, [])
    useEffect(() => {
        if (graphNode) {
            graphNode.clearBackground()
            graphNode.addNodes(addNodes)
        }
    }, [graphNode])

    return (
        <>
            <div
                style={{
                    margin: 8,
                }}
            >
                人物逻辑图
            </div>
            <div
                id='container'
                style={{
                    display: 'flex',
                    minHeight: 800,
                }}
                ref={graphRef}
            ></div>
        </>
    )
}

LogicFlow.defultPropTypes = {
    text: [],
}

LogicFlow.propTypes = {
    text: propTypes.array.isRequired,
}

export default LogicFlow
