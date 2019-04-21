import React, { Component } from 'react'
import Workoutz from '../video/Workoutz.mov'
import Navbar from './Navbar';

class Home extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div class="video-wrapper">
                    <video loop autoPlay>
                        <source src={Workoutz} type="video/mp4" />
                        <source src={Workoutz} type="video/mov" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay-desc brio-headline">
                        <h1 className="brio-text centered">Brio</h1>
                        <div className="home-margin">
                            <a className="btn btn-primary btn-xl rounded-pill mt-5 home-margin" role="button" href="/">Change Your Life</a>
                        </div>
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
            </div >
        )
    }
}

export default Home
