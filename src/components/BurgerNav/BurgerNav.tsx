import React, { useState, } from 'react'
import './BurgerNav.scss'
import './burger.scss'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faAddressCard } from '@fortawesome/free-solid-svg-icons'


const BurgerNav = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleBurgerActive = (e) => {
        setIsActive(!isActive)
    }

    return (
        <>
            <div className={'sidebar-nav' + (isActive ? ' active' : '')}>
                <div onClick={toggleBurgerActive} className={"sidebar-nav__burger burger" + (isActive ? ' active' : '')}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='sidebar-nav__links'>
                    <Link className='sidebar-nav__link' to="/"><FontAwesomeIcon style={{ width: '50px', height: '50px' }}
                        icon={faImage}></FontAwesomeIcon>{isActive ? <p>Gallery</p> : ''}</Link>
                    <Link className='sidebar-nav__link' to="/about"><FontAwesomeIcon style={{ width: '50px', height: '50px' }}
                        icon={faAddressCard}></FontAwesomeIcon>{isActive ? <p>Evgeniy Petrov</p> : ''}</Link>
                </div>
            </div>
        </>
    )
}

export default BurgerNav