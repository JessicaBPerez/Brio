import React, { Component } from 'react'
import Workoutz from '../video/Workoutz.mov'
class Home extends Component {

    render() {
        return (
            <div className="">

                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/TTUyqfaKt4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="content">
                    <h1>Heading</h1>
                    <p>Lorem ipsum...</p>
                    <button id="myBtn" onClick="myFunction()">Pause</button>
                </div> */}
                <video id="background-video" loop autoPlay>
                    <source src={Workoutz} type="video/mp4" />
                    <source src={Workoutz} type="video/mov" />
                    Your browser does not support the video tag.
                </video>
            </div >
        )
    }
}

export default Home
