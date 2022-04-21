import React from 'react'
import './Preloader.scss'

const Preloader = ({ ml }) => {
    //console.log('style', style)
    return (
        <div className="spinner-border" style={{ marginLeft: ml }} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Preloader