import React from 'react'
import './AboutMe.scss'
import { Image } from 'react-bootstrap'

const About = () => {

    return (
        <>
            <h1 className='about-me__title'> About me </h1 >
            <div className='about-me__header'>
                <Image className='about-me__img' src={require('../../img/IMG_20220105_150240.jpg')}></Image>
                <h3 className='about-me__name'>Evgeniy Petrov</h3>
                <p className='about-me__email'>Мy email address: <a href="mailto:itpetrov77@gmail.com">itpetrov77@gmail.com</a></p>
                <p className='about-me__telegram'>Telegram: <a href='https://t.me/itpetrov77'>@itpetrov77</a></p>
                <p className='about-me__resume'>My resume: <a href='https://hh.ru/resume/1568b55fff0981f2b00039ed1f674145735653'>hh.ru/resume</a></p>
                <p className='about-me__github'><a href='https://github.com/Krelllian'>Github</a> </p>
                <p className='about-me__code-wars'><a href='https://www.codewars.com/users/Krelllian/completed_solutions'>CodeWars profile</a> </p>
            </div>
        </>
    )
}

export default About