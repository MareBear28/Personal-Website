import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/qqg.png'
import IMG2 from '../../assets/infridgement.png'
import IMG3 from '../../assets/rpg.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>QuackQuackGo</h3>
          <h5>Itinerary web application that uses Location Search, Pre/Post Checklist, and more!</h5>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Matt-Hoang/QuackQuackGo" className='btn'>Github</a>
            <a href="https://www.youtube.com/watch?v=eTzmMGJANaE" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Infridgement</h3>
          
          <div className="portfolio__item-cta">
            <a href="https://github.com/Tommy-Long4358/Infridgement" className='btn'>Github</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Text-based RPG</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MareBear28/Text-Based-RPG" className='btn'>Github</a>
          </div>
          
        </article>
      </div>
    </section>
  )
}

export default Portfolio