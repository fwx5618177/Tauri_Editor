import Welcome from './views/Welcome'
import styles from '~styles/appHome.modules.scss?inline'
// import AppHeader from '/@/components/AppHeader/AppHeader'

const App = () => {
    return (
        <>
            {/* <AppHeader /> */}
            <Welcome />
            <div className={(styles as unknown as CSSModuleClasses).container}>
                <div className={(styles as unknown as CSSModuleClasses).section}>111</div>
            </div>
        </>
    )
}

export default App
