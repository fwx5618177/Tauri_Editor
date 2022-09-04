import { Spin } from 'antd'
import propTypes from 'prop-types'
import React, { useRef } from 'react'
import { LoadingProps } from './types'
import { SizeEnum } from '/@/enums/sizeEnum'
import './loading.less'

const LoadingComponents = (props: LoadingProps) => {
    const sectionRef = useRef<HTMLElement>(null)
    const { absolute, theme, loading, tip, size, background } = props

    const secStyle: React.CSSProperties = {
        display: loading ? 'inline-block' : 'none',
        backgroundColor: background ?? '',
    }

    return (
        <>
            <section
                ref={sectionRef}
                className={`xfull-loading ${absolute ? 'absolute' : ''} ${theme}`}
                style={secStyle}
            >
                <Spin tip={tip} size={size} spinning={loading} />
            </section>
        </>
    )
}

LoadingComponents.defaultProps = {
    tip: '',
    size: SizeEnum.LARGE,
    absolute: false,
    loading: false,
}

LoadingComponents.propTypes = {
    tip: propTypes.string.isRequired,
    size: propTypes.oneOf([SizeEnum.DEFAULT, SizeEnum.LARGE, SizeEnum.SMALL]).isRequired,
    absolute: propTypes.bool.isRequired,
    loading: propTypes.bool.isRequired,
    background: propTypes.string.isRequired,
    theme: propTypes.oneOf(['dark', 'light']),
}

export default LoadingComponents
