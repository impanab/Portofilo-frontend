import { faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import icons from './css/Icons.module.css'

const Icons = () => {
  return (
    <div className={icons.icon_Container}>
        <Link to='https://www.linkedin.com/in/impana-b-a756131a9/' className={icons.link}>
            <FontAwesomeIcon icon={faLinkedin}/>
        </Link>
        <Link to='mailto:impanabtth@gmail.com' className={icons.link}>
            <FontAwesomeIcon icon={faEnvelope}/>
        </Link>
        <Link to='https://www.instagram.com/impana_basavaraj?igsh=Y3RteDcwYnJtMmFx' className={icons.link}>
            <FontAwesomeIcon icon={faInstagram}/>
        </Link>
        <Link to="https://www.github.com/impanab" className={icons.link}> 
        <FontAwesomeIcon icon={faGithub}/></Link>
    </div>
  )
}

export default Icons