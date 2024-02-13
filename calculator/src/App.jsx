import { useState } from 'react'
import styles from './App.module.css'
import Display from './components/Display/Display'
import Buttonbox from './components/Buttonbox/Buttonbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.calculator}>
      <Display />
      <Buttonbox />
    </div>
  )
}

export default App
