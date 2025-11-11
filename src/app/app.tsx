import { ThemeProvider, ThemeToggle } from '../modules/theme'
import { CounterProvider, CounterWithContext, CounterWithHook } from '../modules/counter'
import styles from './app.module.css'

function MainPage() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                Урок 3: Context API и кастомные хуки
            </h1>

            <ThemeToggle />
            <h2>Счетчик с Context</h2>
            <CounterWithContext />
            <CounterWithContext />
            <h2>Счетчик с Hook</h2>
            <CounterWithHook />
            <CounterWithHook />
        </div>
    )
}

function App() {
    return (
        <ThemeProvider>
            <CounterProvider>
                <MainPage />
            </CounterProvider>   
        </ThemeProvider>
    )
}

export default App