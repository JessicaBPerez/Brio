import React, { Component } from 'react'
import axios from 'axios'
import NavbarPage from './NavbarPage';

export default class Gyms extends Component {
    state = {
        gyms: []
    };

    componentDidMount() {
        this.fetchGyms()
    }


    render() {
        return (
            <div>
                <NavbarPage />
                <h1>Gyms</h1>

            </div>
        )
    }
}
