import React from 'react'
import './Preloader.scss'

const Preloader = ({ ml }) => {
    return (
        <div className="spinner-border" style={{ marginLeft: ml }} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Preloader