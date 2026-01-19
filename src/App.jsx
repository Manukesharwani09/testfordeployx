import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to TestForDeployX</h1>
        <p>A simple React application ready for deployment</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>Click the button to increment the counter</p>
        </div>
        <div className="info">
          <h2>🚀 Ready to Deploy</h2>
          <p>This application can be easily deployed to:</p>
          <ul>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>GitHub Pages</li>
            <li>Any static hosting service</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App
