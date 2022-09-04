import { Button, Result } from 'antd'
import React from 'react'
import propTypes from 'prop-types'
import { ResultPageStatus } from './types'

const ResultPage = (props: ResultPageStatus) => (
    <Result
        status={props?.status}
        title={props?.title}
        subTitle={props?.subtitle}
        extra={props?.extra}
    />
)

ResultPage.defaultProps = {
    status: '404',
    title: '404',
    subtitle: 'Sorry, the page you visited does not exist.',
    extra: <Button type='primary'>Back Home</Button>,
}

ResultPage.propTypes = {
    status: propTypes.oneOf(['403', '404', '500']),
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    extra: propTypes.node.isRequired,
}

export default ResultPage
