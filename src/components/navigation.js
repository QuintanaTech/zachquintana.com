import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className={"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"}>
            <Link className="navbar-brand" to={'/'}>Zach Quintana</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/'}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/twitter'}>
                            Twitter
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://www.quintana.tech/portfolio" target="_blank">
                            Portfolio
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
