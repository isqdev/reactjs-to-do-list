import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="banner-background">
        <img src="src\assets\Logo.svg" alt="logo do todo" className="logo" />
      </header>

    </>
  )
}

export default App
