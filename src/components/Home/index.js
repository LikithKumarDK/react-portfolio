import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['H', 'i', ',', '', 'I', "'", 'm', '', 'L', 'i', 'k', 'i', 't', 'h', '', 'K', 'u', 'm', 'a', 'r', '', 'D', 'K']
  const jobArray = [
    'F',
    'u',
    'l',
    'l ',
    '',
    'S',
    't',
    'a',
    'c',
    'k',
    '',
    'D',
    'e',
    'v',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
    '.',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={12}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={12}
            />
          </h1>
          <h2>Full Stack Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
