import { Button, ConfigProvider } from 'antd'
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { LoadingComponents } from './components/Loading'
import { AuthProvider } from './router/guard/authprovide'
import { RequireAuth } from './router/guard/requireauth'
import Home from './views/sys/home/home'
import ResultPage from './views/sys/result'
import SignInSide from './views/sys/signin/Signin'

const App = () => {
    return (
        <>
            <ConfigProvider>
                <BrowserRouter>
                    <AuthProvider>
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
                                    index
                                    element={
                                        <>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                }}
                                            >
                                                <Button type='primary'>
                                                    <Link to={'/signin'}>Sign In</Link>
                                                </Button>
                                                <Button type='primary'>
                                                    <Link to={'/error'}>404</Link>
                                                </Button>
                                                <Button type='primary'>
                                                    <Link to={'/home'}>Home</Link>
                                                </Button>
                                            </div>
                                        </>
                                    }
                                />
                                <Route path='/signin' element={<SignInSide />} />
                                <Route
                                    index={false}
                                    path={'/home'}
                                    element={
                                        <RequireAuth>
                                            <Home />
                                        </RequireAuth>
                                    }
                                />
                                <Route
                                    path='*'
                                    element={
                                        <ResultPage
                                            extra={
                                                <Button type='primary'>
                                                    <Link to={'/'}>Back Home</Link>
                                                </Button>
                                            }
                                        />
                                    }
                                />
                            </Routes>
                        </Suspense>
                    </AuthProvider>
                </BrowserRouter>
            </ConfigProvider>
        </>
    )
}

export default App
