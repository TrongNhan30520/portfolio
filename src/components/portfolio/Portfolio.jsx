import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio1.png'
import IMG4 from '../../assets/portfolio1.png'
import IMG5 from '../../assets/portfolio1.png'
import IMG6 from '../../assets/portfolio1.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Story List Application',
    github: 'https://github.com/TrongNhan30520/story__list',
    demo: 'https://youtu.be/l5h2m-IPbG0'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Realtime Chat Application',
    github: 'https://github.com/TrongNhan30520/realtime__chat',
    demo: 'https://youtu.be/azaqAUB0sHI'
  },
  {
    id: 3,
    image: IMG3,
    title: 'This is a portfolio item title',
    github: 'http://github.com/',
    demo: 'http://youtube.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a portfolio item title',
    github: 'http://github.com/',
    demo: 'http://youtube.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio item title',
    github: 'http://github.com/',
    demo: 'http://youtube.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio item title',
    github: 'http://github.com/',
    demo: 'http://youtube.com/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map((props) => {
            return (
              <article key={props.id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={props.image} alt="" />
                </div>
                <h3>{props.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={props.github} className='btn' target='_blank'>Github</a>
                  <a href={props.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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
