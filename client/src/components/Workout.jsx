import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import WorkoutForm from './WorkoutForm.jsx'
import NavbarPage from './NavbarPage.jsx';

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

    createWorkout = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('/api/v1/workouts/', this.state.newWorkout)

            const clonedWorkouts = [...this.state.workouts]
            clonedWorkouts.push(response.data)
            this.setState({
                workouts: clonedWorkouts,
                newWorkout: {
                    name: '',
                    image_url: '',
                    target: '',
                    workout_time: ''
                }
            })
        }
        catch (err) {
            console.log(`You have a POST error, Jess!`, err)
        }
    }

    handleChange = (event) => {
        const clonedNewWorkout = { ...this.state.newWorkout }
        clonedNewWorkout[event.target.name] = event.target.value

        this.setState({
            newWorkout: clonedNewWorkout
        })
    }

    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }

        return (
            <div>
                <NavbarPage />
                <div className="bg-dark text-white workout-margin workout-jumbo">
                    <img className="card-img" src="https://media.self.com/photos/57dc11208a461ae034a90dc8/8:3/w_1280,c_limit/sub-channel-fitness-workouts.jpg" alt="Workout" />
                    <div className="card-img-overlay">
                        <h5 className="card-title centered workout-text workout-all-margin">WORKOUTS</h5>
                    </div>
                </div>
                <hr className="individual-underline container audio-card-margin"></hr>
                <div className="card-flex">
                    {this.state.workouts.map(workout => {
                        return (
                            <div key={workout.id} className="card-flex">
                                <div className="card bg-dark text-white audio-card-margin" style={{ maxWidth: '650px' }}>
                                    <img className="card-img" src={workout.image_url} alt={workout.name} />
                                    <div className="card-img-overlay">
                                        <h3 className="card-title centered scale"><Link to={`/workouts/${workout.id}/`} className="workout-link">{workout.name}</Link></h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h1>Create Workout</h1>
                <div className="jumbotron jumbotron-fluid recipe-jumbotron">
                    <div className="container">
                        <WorkoutForm
                            workout={this.state.newWorkout}
                            handleChange={this.handleChange}
                            handleSubmit={this.createWorkout}
                            submitBtnText="Create"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
