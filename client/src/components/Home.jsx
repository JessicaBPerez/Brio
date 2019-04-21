import React, { Component } from 'react'
import Workoutz from '../video/Workoutz.mov'
import VideoCover from 'react-video-cover'

class Home extends Component {

    render() {
        return (
            <div>
                {/* <div className="container-fluid background-home">
                    <video style={{ width: "100%" }} id="background-video" loop autoPlay>
                        <source src={Workoutz} type="video/mp4" />
                        <source src={Workoutz} type="video/mov" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay-desc brio-headline">
                        <h1 className="brio-text centered">Brio</h1>
                        <div className="estrellas centered">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>
                    </div>
                </div> */}
                <div class="video-wrapper">
                    <video loop autoPlay>
                        <source src={Workoutz} type="video/mp4" />
                        <source src={Workoutz} type="video/mov" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay-desc brio-headline">
                        <h1 className="brio-text centered">Brio</h1>
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
