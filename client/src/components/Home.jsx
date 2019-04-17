import React, { Component } from 'react'

class Home extends Component {

    render() {
        return (
            <div className="">
                <h1>Hey, it's me, HOMEM.</h1>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/TTUyqfaKt4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="content">
                    <h1>Heading</h1>
                    <p>Lorem ipsum...</p>
                    <button id="myBtn" onclick="myFunction()">Pause</button>
                </div>
            </div >
        )
    }
}

export default Home
