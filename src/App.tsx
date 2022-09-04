import { ConfigProvider } from 'antd'
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoadingComponents } from './components/Loading'

const App = () => {
    return (
        <>
            <ConfigProvider>
                <BrowserRouter>
                    <Suspense
                        fallback={
                            <LoadingComponents
                                {...{
                                    tip: 'loading...',
                                    background: 'rgba(111,111,111,.7)',
                                    theme: 'dark',
                                    loading: false,
                                    absolute: false,
                                }}
                            />
                        }
                    >
                        <Routes>
                            <Route
                                index={false}
                                path={'/'}
                                element={
                                    <LoadingComponents
                                        {...{
                                            tip: 'loading...',
                                            background: 'rgba(111,111,111,.7)',
                                            theme: 'dark',
                                            loading: true,
                                            absolute: false,
                                        }}
                                    />
                                }
                            />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </ConfigProvider>
        </>
    )
}

export default App
