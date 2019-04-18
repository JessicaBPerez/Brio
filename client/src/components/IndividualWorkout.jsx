import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import WorkoutForm from './WorkoutForm.jsx'

export default class IndividualWorkout extends Component {
    state = {
        workouts: {},
        exercises: [],
        redirectToWorkouts: false,
        isEditFormDisplayed: false
    }

    componentDidMount() {
        const workoutId = this.props.match.params.id
        this.fetchWorkout(workoutId)
    }

    fetchWorkout = async (workoutId) => {
        try {
            const response = await axios.get(`/api/v1/workouts/${workoutId}/`)
            this.setState({
                workouts: response.data,
                exercises: response.data.songs
            })
        }
        catch (err) {
            console.log(`You made an error, Jess!`, err)
        }
    }

    deleteWorkout = async () => {
        try {
            const response = await axios.delete(`/api/v1/workouts/${this.props.match.params.id}/`)
            this.setState({
                redirectToWorkouts: true
            })
        }
        catch (err) {
            console.log(`Didn't delete, Jess!`, err)
        }
    }
    render() {
        if (this.state.redirectToWorkouts === true) {
            return <Redirect to="/workouts" />
        }
        return (
            <div>
                <h1>Individual IndividualWorkout</h1>
                <button onClick={this.deleteWorkout}>
                    Delete
                </button>
                <div className="card bg-dark text-white" style={{ maxWidth: '700px' }}>
                    <img className="card-img" src={this.state.workouts.image_url} alt={this.state.workouts.name} />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{this.state.workouts.name}</h5>
                        <p className="card-text">{this.state.workouts.target}</p>
                        <p className="card-text">{this.state.workouts.workout_time}</p>
                    </div>
                </div>
            </div>
        )
    }
}
