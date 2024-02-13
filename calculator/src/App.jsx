import { useState } from 'react'
import styles from './App.module.css'
import Display from './components/Display/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.calculator}>
      <Display />
      <div className={styles.buttonbox}>
        <button className={styles.button}>c</button>
        <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>+</button>
      </div>
    </div>
  )
}

export default App
