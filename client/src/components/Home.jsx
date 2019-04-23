import React, { Component } from 'react'
import Workoutz from '../video/Workoutz.mov'
import Navbar from './Navbar';
import { Link } from "react-router-dom"

class Home extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="video-wrapper">
                    <video loop autoPlay>
                        <source src={Workoutz} type="video/mp4" />
                        <source src={Workoutz} type="video/mov" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay-desc brio-headline">
                        <h1 className="brio-text centered animated fadeInDown delay-2s">Brio</h1>
                        {/* <div className="estrellas centered">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div> */}
                    </div>
                </div>
                <div className="home-margin">
                    <Link to={`/workouts`} className="btn btn-primary btn-xl rounded-pill mt-5 home-margin">Change Your Life</Link>
                </div>
            </div >
        )
    }
}

export default Home
