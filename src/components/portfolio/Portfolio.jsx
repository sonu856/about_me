import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title: 'Eldente - Smart Home App',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18361066--Eldente-Smart-Home-App'
  },
  {
    id:2,
    image:IMG2,
    title: 'BitPro Currency web app design',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18362569-BitPro-Currency-web-app-design'
  },
  {
    id:3,
    image:IMG3,
    title: 'Crypto Currency Service',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18365310-Crypto-Currency-Service'
  },
  {
    id:4,
    image:IMG4,
    title: 'Crypto Gaming Website - Crash Game',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18360734-Crypto-Gaming-Website-Crash-Game'
  },
  {
    id:5,
    image:IMG5,
    title: 'Cryptio ⁝ Crypto App',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18357488-Cryptio-Crypto-App'
  },
  {
    id:6,
    image:IMG6,
    title: 'Mobile app crypto wallet.',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/18358121-Mobile-app-crypto-wallet'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      {/* <h5>My Recent Work</h5> */}
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
          {
            data.map(({id,image,title,github,demo})=>{
              return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt='title' />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>        
              </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Portfolio