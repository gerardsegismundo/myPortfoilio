import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './sass/main.scss'
import { gsap } from 'gsap'
import { Navbar } from './components/'
import { About, Contact, Home, Projects } from './pages'
import Flashlight from './components/Flashlight'
import { useEffectOnce } from 'react-use'
import bugerFadeInMoveLeft from './animations/bugerFadeInMoveLeft'
import RingLoaderOverlay from './components/RingLoaderOverlay'
import { connect } from 'react-redux'
import useSetDimensions from './hooks/useSetDimensions'
import { setDimensions } from './redux/ui/ui.actions'

const App = ({ isSending, dimensions, setDimensions }) => {
  useEffectOnce(() => {
    // console.clear()

    bugerFadeInMoveLeft()
  })

  // useSetDimensions(dimensions, setDimensions)

  return (
    <>
      {isSending && <RingLoaderOverlay />}

      <div className='dark-theme'>
        <div className='App'>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
            </Switch>
            <Flashlight />
          </Router>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({ isSending, dimensions }) => ({
  isSending,
  dimensions
})

export default connect(mapStateToProps, { setDimensions })(App)
