//Startup point for the client side application
import Home from './components/Home.js'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.hydrate(<Home />, document.querySelector('#root'))