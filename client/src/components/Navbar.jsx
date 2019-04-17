import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="nav nav-pills flex-column flex-sm-row bg-dark">
                    <a class="flex-sm-fill text-sm-center nav-link" href="/">Home</a>
                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Workouts</a>
                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Recipes</a>
                    <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
                    <a class="flex-sm-fill text-sm-center nav-link" href="#" tabindex="-1">Disabled</a>
                </nav>

            </div>
        )
    }
}

export default Navbar
