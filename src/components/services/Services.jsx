import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
    <h2>Services</h2>
    {/* <h2>Services</h2> */}

    <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
        </ul>
      </article>
      {/* End of UI/UX Design */}
      <article className='service'>
        <div className='service__head'>
          <h3>Web development</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
        </ul>
      </article>
      {/* End of Web Development */}
      <article className='service'>
        <div className='service__head'>
          <h3>Content Creation</h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
          <li>
            <BiCheck/>
            <p>lorem, ipsium dolor sit amet consectreur elit.</p>
          </li>
        </ul>
      </article>
{/* End of Content Creation */}
    </div>
    </section>
  )
}

export default Services