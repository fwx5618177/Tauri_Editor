import { Graph } from '@antv/x6'
import { useEffect, useRef } from 'react'

const LogicFlow = () => {
    const graphRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log(graphRef.current)
        const graph = new Graph({
            container: graphRef.current as HTMLDivElement,
            grid: true,
            autoResize: true,
        })

        graph.addNode({
            x: 160,
            y: 220,
            width: 360,
            // height: 520,
            shape: 'text-block',
            text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
            attrs: {
                body: {
                    fill: '#efdbff',
                    stroke: '#9254de',
                    rx: 4,
                    ry: 4,
                },
            },
        })
    }, [])

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

export default LogicFlow
