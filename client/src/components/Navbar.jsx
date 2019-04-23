import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <div className="margin-bottom">
                <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
                    <div className="container">
                        <a className="navbar-brand brand-properties" href="/"></a>
                        <button
                            className="navbar-toggler navbar-toggler-right"
                            data-toggle="collapse"
                            data-target="#navbarResponsive"
                            type="button"
                            data-toogle="collapse"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        ><i className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="nav navbar-nav ml-auto text-uppercase">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link js-scroll-trigger" href="/">Home</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link to={`/workouts`} className="nav-link js-scroll-trigger">Workout</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link to={`/recipes`} className="nav-link js-scroll-trigger">Recipes</Link>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <Link to={`/gyms`} className="nav-link js-scroll-trigger">Gyms</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
