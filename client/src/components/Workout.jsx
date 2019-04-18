import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import WorkoutForm from './WorkoutForm.jsx'

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
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }

        return (
            <div>
                <h1>All Workouts</h1>
                {this.state.workouts.map(workout => {
                    return (
                        <div key={workout.id}>
                            {/* <h3>{workout.name}</h3>
                            <img src={workout.image_url} alt={workout.name} /> */}
                            <Link to={`/workouts/${workout.id}/`}>{workout.name}</Link>
                            <div class="card bg-dark text-white" style={{ maxWidth: '700px' }}>
                                <img class="card-img" src={workout.image_url} alt={workout.name} />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">{workout.name}</h5>
                                    <p class="card-text"><Link to={`/workouts/${workout.id}/`}>{workout.name}</Link></p>
                                    <p class="card-text">{workout.target}</p>
                                    <p class="card-text">{workout.workout_time}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <h1>Create Workout</h1>
                <WorkoutForm
                    workout={this.state.newWorkout}
                    handleChange={this.handleChange}
                    handleSubmit={this.createWorkout}
                    submitBtnText="Create"
                />
            </div>
        )
    }
}
