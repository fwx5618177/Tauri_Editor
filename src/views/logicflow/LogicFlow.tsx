import { Graph } from '@antv/x6'
import { useEffect, useRef, useState } from 'react'

const LogicFlow = () => {
    const graphRef = useRef<HTMLDivElement>(null)
    const [graphObj, setGraphObj] = useState<Graph>(null as unknown as Graph)

    const initial = () => {
        ;(graphRef.current as HTMLDivElement).style.width = document.body.clientWidth + 'px'
        ;(graphRef.current as HTMLDivElement).style.height = document.body.clientHeight + 'px'

        window.addEventListener('resize', () => {
            ;(graphRef.current as HTMLDivElement).style.width = document.body.clientWidth + 'px'
            ;(graphRef.current as HTMLDivElement).style.height = document.body.clientHeight + 'px'
        })

        const graph = new Graph({
            container: graphRef.current as HTMLDivElement,
            grid: true,
            autoResize: true,
        })

        setGraphObj(graph)
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
            text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
        },
        {
            text: `fwx`,
        },
    ]

    const conf = nodes.map((ci, index) => ({
        x: 160 + index * 20,
        y: 220 + index * 20,
        // width: 360,
        // height: 120,
        width: ci.text.length * 40 > 300 ? 300 : ci.text.length * 40,
        height: (ci.text.length * 40 - 300) / 50 > 100 ? (ci.text.length * 40 - 300) / 50 : 100,
        shape: 'text-block',
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

    const graphNode = () => {
        graphObj.addNodes(conf)
    }

    useEffect(() => {
        initial()
    }, [])

    useEffect(() => {
        if (graphObj) {
            graphObj.clearBackground()
            graphNode()
        }
    }, [graphObj])

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
                }}
                ref={graphRef}
            ></div>
        </>
    )
}

export default LogicFlow
