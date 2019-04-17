import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Workout extends Component {
    state = {
        workouts: [],
        newWorkout: {
            name: '',
            image_url: '',
            target: '',
            workout_time: ''
        }
    }

    componentDidMount() {
        this.fetchWorkouts()
    }

    fetchWorkouts = async () => {
        try {
            const response = await axios.get('/api/v1/workouts/')
            this.setState({ workouts: response.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>Workout Component</h1>
            </div>
        )
    }
}
