import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'

// Styles
import { GlobalStyles } from './theme/GlobalStyles'

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', '/']} component={Home} />
    </div>
  )
}

export default App
