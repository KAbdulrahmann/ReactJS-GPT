import React from 'react'

import {Footer ,Blog, Posibility,WhatGpt,Header, Feature} from './containers'
import {CTA , Brand ,NavBar} from './components'

import './App.css';

const App=()=> {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <NavBar />
            <Header />
        </div>
        <Brand />
        <WhatGpt/>
        <Feature />
        <Posibility/>
        <CTA/>
        <Blog />
        <Footer/>
    </div>
  )
}

export default App