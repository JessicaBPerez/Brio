import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <div className="margin-bottom">
                <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
                    <div class="container"><a class="navbar-brand">Brio</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right" type="button" data-toogle="collapse" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                        <div
                            class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="nav navbar-nav ml-auto text-uppercase">
                                <li class="nav-item" role="presentation"><a class="nav-link js-scroll-trigger" href="/">Home</a></li>
                                <li class="nav-item" role="presentation"><Link to={`/workouts`} className="nav-link js-scroll-trigger">
                                    workouts
                  </Link></li>
                                <li class="nav-item" role="presentation"><a class="nav-link js-scroll-trigger" href="#">About</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link js-scroll-trigger" href="#">Team</a></li>
                                <li class="nav-item" role="presentation"><a class="nav-link js-scroll-trigger" href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
