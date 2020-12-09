import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'

// Styles
import { GlobalStyles } from './theme/GlobalStyles'

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Route path={['/game/:id', '/']} component={Home} />
    </div>
  )
}

export default App
