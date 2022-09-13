import { useEffect, useRef, useState } from 'react'
import G6, { Graph } from '@antv/g6'

const DragNodes = () => {
    const customToolRef = useRef<HTMLDivElement>(null)
    const [graphics, setGraphics] = useState<Graph>(null as any)

    const width = (customToolRef.current as HTMLDivElement)?.scrollWidth || 500
    const height = (customToolRef.current as HTMLDivElement)?.scrollHeight || 500

    const dataConf = {
        nodes: [
            {
                id: '0',
                label: 'node-0',
                x: 100,
                y: 100,
                description: 'This is node-0.',
                subdescription: 'This is subdescription of node-0.',
            },
            {
                id: '1',
                label: 'node-1',
                x: 250,
                y: 100,
                description: 'This is node-1.',
                subdescription: 'This is subdescription of node-1.',
            },
            {
                id: '2',
                label: 'node-2',
                x: 150,
                y: 310,
                description: 'This is node-2.',
                subdescription: 'This is subdescription of node-2.',
            },
            {
                id: '3',
                label: 'node-3',
                x: 320,
                y: 310,
                description: 'This is node-3.',
                subdescription: 'This is subdescription of node-3.',
            },
        ],
        edges: [
            {
                id: 'e0',
                source: '0',
                target: '1',
                description: 'This is edge from node 0 to node 1.',
            },
            {
                id: 'e1',
                source: '0',
                target: '2',
                description: 'This is edge from node 0 to node 2.',
            },
            {
                id: 'e2',
                source: '0',
                target: '3',
                description: 'This is edge from node 0 to node 3.',
            },
        ],
    }

    const toolBarInit = () => {
        const toolbar = new G6.ToolBar({
            // container: tc,
            className: 'g6-toolbar-ul',
            getContent: () => {
                return `
              <ul>
                <li code='add'>增加节点</li>
                <li code='undo'>撤销</li>
                <li code='redo'>回退</li>
              </ul>
            `
            },
            handleClick: (code, graph) => {
                if (code === 'add') {
                    graph.addItem('node', {
                        id: 'node2',
                        label: 'node2',
                        x: 300,
                        y: 150,
                    })
                } else if (code === 'undo') {
                    toolbar.undo()
                } else if (code === 'redo') {
                    toolbar.redo()
                }
            },
        })

        return toolbar
    }

    const init = (): void => {
        const graph = new G6.Graph({
            container: customToolRef.current as HTMLElement,
            width,
            height,
            linkCenter: true,
            // 设置为true，启用 redo & undo 栈功能
            enabledStack: true,
            // plugins: [toolbar],
            defaultNode: {
                size: [80, 40],
                type: 'rect',
                style: {
                    fill: '#DEE9FF',
                    stroke: '#5B8FF9',
                },
            },
            defaultEdge: {
                style: {
                    stroke: '#b5b5b5',
                    lineAppendWidth: 3,
                },
            },
            modes: {
                default: ['drag-node'],
            },
        })

        setGraphics(graph)
    }

    const renderGraphics = () => {
        graphics.addPlugin(toolBarInit())

        graphics.data(dataConf)
        graphics.render()

        if (typeof window !== 'undefined')
            window.onresize = () => {
                if (!graphics || graphics.get('destroyed')) return
                if (
                    !(customToolRef.current as HTMLDivElement) ||
                    !(customToolRef.current as HTMLDivElement).scrollWidth ||
                    !(customToolRef.current as HTMLDivElement).scrollHeight
                )
                    return
                graphics.changeSize(
                    (customToolRef.current as HTMLDivElement).scrollWidth,
                    (customToolRef.current as HTMLDivElement).scrollHeight,
                )
            }
    }

    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        if (graphics) {
            graphics.destroyLayout()
            renderGraphics()
        }
    }, [graphics])

    return (
        <>
            <div id='customtool' ref={customToolRef}></div>
        </>
    )
}

export default DragNodes
