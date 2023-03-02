import React from 'react'
import './header.css'

import ai from '../../assets/ai.png'
import people from '../../assets/people.png'
const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Lets Build Something Amazing with GPT-3 OpenAI</h1>
       <p>Yet bed any for Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus libero consectetur pariatur quo perspiciatis maiores!</p>

       <div className="header-content__input">
        <input type="email" placeholder='Your email address' /><button type='button'>Get Started</button>
        </div> 

        <div className="header-content__people">
          <img src={people}/>
          <p>600 people requested access a visitvin last 24 hours</p>
        </div>
      </div>
      <div className="header-img">
        <img src={ai} alt=""  />
      </div>
    </div>
  )
}

export default Header