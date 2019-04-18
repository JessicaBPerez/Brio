import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import WorkoutForm from './WorkoutForm.jsx'
import { Link } from 'react-router-dom'
import ExerciseForm from './ExerciseForm.jsx'

export default class IndividualWorkout extends Component {
    state = {
        workout: {},
        exercises: [],
        newExercise: {
            name: 'holder value',
            exercise_target: 'holder value',
            time: 'holder value',
            video_url: 'holder value',
            workout_time: 'holder value',
            description: 'holder value',
            benefits: 'holder value',
            workout: this.props.match.params.id
        },
        redirectToWorkouts: false,
        isEditFormDisplayed: false
    }

    componentDidMount() {
        const workoutId = this.props.match.params.id
        this.fetchWorkout(workoutId)
        // this.fetchExercises()
    }

    fetchWorkout = async (workoutId) => {
        try {
            const response = await axios.get(`/api/v1/workouts/${workoutId}/`)
            this.setState({
                workout: response.data,
                exercises: response.data.exercises
            })
        }
        catch (err) {
            console.log(`You made an error, Jess!`, err)
        }
    }

    // fetchExercises = async () => {
    //     try {
    //         const response = await axios.get('/api/v1/exercises/')
    //         this.setState({ exercises: response.data })
    //     }
    //     catch (err) {
    //         console.log(`You didn't get the exercises!`, err)
    //     }
    // }

    createExercise = async (event, exercise, id) => {
        event.preventDefault()
        console.log(this.state.newExercise)
        try {
            const response = await axios.post('/api/v1/exercises/', this.state.newExercise)

            const clonedExercises = [...this.state.exercises]
            clonedExercises.push(response.data)
            this.setState({
                exercises: clonedExercises,
                newExercise: {
                    name: '',
                    exercise_target: '',
                    time: '',
                    video_url: '',
                    workout_time: '',
                    description: '',
                    benefits: '',
                    workout: ''
                    // name: exercise.name,
                    // exercise_target: exercise.exercise_target,
                    // video_url: exercise.video_url,
                    // workout_time: exercise.workout_time,
                    // description: exercise.description,
                    // benefits: exercise.benefits,
                    // workout: id
                }
            })
        }
        catch (err) {
            console.log(`You have a POST error in exercises, Jess!`, err)
        }
    }

    handleExerciseChange = (event) => {
        const clonedNewExercise = { ...this.state.newExercise }
        clonedNewExercise[event.target.name] = event.target.value

        this.setState({
            newExercise: clonedNewExercise
        })
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

    updateWorkout = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.put(`/api/v1/workouts/${this.props.match.params.id}/`, this.state.workout)
            this.setState({
                workout: response.data,
                isEditFormDisplayed: false
            })
        }
        catch (err) {
            console.log(`You didn't update!`, err)
        }
    }
    // Edit Workout Handle Change
    handleChange = (event) => {
        const clonedWorkout = { ...this.state.workout }
        clonedWorkout[event.target.name] = event.target.value

        this.setState({
            workout: clonedWorkout
        })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    render() {
        if (this.state.redirectToWorkouts === true) {
            return <Redirect to="/workouts" />
        }

        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
            <div>
                <h1>IndividualWorkout</h1>
                <button onClick={this.deleteWorkout}>
                    Delete
                </button>
                <div className="card bg-dark text-white" style={{ maxWidth: '700px' }}>
                    <img className="card-img" src={this.state.workout.image_url} alt={this.state.workout.name} />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{this.state.workout.name}</h5>
                        <p className="card-text">{this.state.workout.target}</p>
                        <p className="card-text">{this.state.workout.workout_time}</p>
                    </div>
                </div>
                <button onClick={this.toggleEditForm}>
                    {this.state.isEditFormDisplayed === true ? 'Hide Edit Form' : 'Edit'}
                </button>
                {
                    this.state.isEditFormDisplayed
                        ? <WorkoutForm
                            workout={this.state.workout}
                            handleChange={this.handleChange}
                            handleSubmit={this.updateWorkout}
                            submitBtnText="Update"
                        />
                        : null
                }
                <div>
                    {
                        this.state.exercises.map(exercise => {
                            return (
                                <div key={exercise.id}>
                                    <h4>{exercise.name}</h4>
                                    <div>{exercise.video_url}</div>
                                    <div>{exercise.target}</div>
                                    <div>{exercise.time}</div>
                                    <Link to={`/exercise/${exercise.id}/`}>{exercise.name}</Link>
                                    {/* <div>{exercise.image_url}</div> */}
                                    <div>{exercise.description}</div>
                                    <div>{exercise.benefits}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <h1>Create Exercise</h1>
                <ExerciseForm
                    newExercise={this.state.newExercise}
                    handleExerciseChange={this.handleExerciseChange}
                    handleExerciseSubmit={this.createExercise}
                    submitBtnText="Create"
                    workoutId={this.props.match.params.id}
                />
            </div>
        )
    }
}
