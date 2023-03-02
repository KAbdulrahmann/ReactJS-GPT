import React from 'react'
import Section from '../../components/section/section'
import './WhatGpt.css'
const WhatGpt = () => {
  return (
    <div className='GPT section__margin' id='what_is_gpt3'>
        <div className="gpt-feature">
          <Section  title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
        </div>
        <div className="gpt-heading">
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className="gpt-container">
          <Section title='Chatbots' text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "/>
          <Section title='Knowledgebase' text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
          <Section title='Education' text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        </div>
    </div>
  )
}

export default WhatGpt