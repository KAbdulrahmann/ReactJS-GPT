import React from 'react'
import './section.css'
const Section = ({title,text}) => {
  return (
    <div className='features-container__feature'>
      <div className="feature-title">
        <div className="dash"></div>
        <h1>{title}</h1>
      </div>
      <div className="feature-text">
        {text}
      </div>
    </div>
  )
}

export default Section
