import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import WorkoutForm from './WorkoutForm.jsx'
import { Link } from 'react-router-dom'
import ExerciseForm from './ExerciseForm.jsx'
import NavbarPage from './NavbarPage.jsx';

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
                <NavbarPage />
                <div className="bg-dark text-white workout-margin workout-jumbo">
                    <img className="card-img" src={this.state.workout.image_url} alt={this.state.workout.name} />
                    <div className="card-img-overlay">
                        <h5 className="card-title centered workout-text">{this.state.workout.name}</h5>
                    </div>
                </div>
                <button className="btn btn-outline-danger btn-lg workout-delete-margin" onClick={this.deleteWorkout}>
                    Delete Workout
                </button>

                {/* Edit Workout and Toggle */}
                <button className="btn btn-outline-warning btn-lg workout-delete-margin" onClick={this.toggleEditForm}>
                    {this.state.isEditFormDisplayed === true ? 'Hide Edit Form' : 'Edit Workout'}
                </button>
                {
                    this.state.isEditFormDisplayed
                        ?
                        <div className="container">
                            <WorkoutForm
                                workout={this.state.workout}
                                handleChange={this.handleChange}
                                handleSubmit={this.updateWorkout}
                                submitBtnText="Update"
                            />
                        </div>
                        : null
                }
                <hr className="individual-underline container"></hr>



                {/* <div className="row align-items-center d-flex justify-content-center individual-recipe-margin">
                    <div className="col-md-5"><img className="img-thumbnail" src={this.state.workout.image_url} alt="" /></div>
                    <div className="col-md-5" style={{ width: "400px;" }}>
                        <h3>{this.state.workout.name}</h3>
                        <div className="getting-started-info">
                            <p className="card-text">Target: {this.state.workout.target}</p>
                            <p>Workout Time: {this.state.workout.workout_time}</p>
                        </div>
                        <button className="btn btn-outline-danger btn-lg" onClick={this.deleteWorkout}>Delete Workout</button>
                    </div>
                </div>
                <hr className="individual-underline container"></hr> */}




                <div>
                    {
                        this.state.exercises.map(exercise => {
                            return (
                                <div key={exercise.id}>
                                    <div className="row align-items-center d-flex justify-content-center individual-recipe-margin">
                                        <div className="col-md-5">
                                            <iframe width="560" height="315" src={exercise.video_url}></iframe>
                                        </div>
                                        <div className="col-md-5" style={{ width: "400px;" }}>
                                            <h3>{exercise.name}</h3>
                                            <Link to={`/exercise/${exercise.id}/`}>{exercise.name}</Link>
                                            <div className="getting-started-info">
                                                <p className="card-text"><strong>Target:</strong> {exercise.exercise_target}</p>
                                                <p><strong>Exercise Time:</strong> {exercise.time}</p>
                                                <p><strong>Exercise Description:</strong> {exercise.description}</p>
                                                <p><strong>Exercise Benefits:</strong> {exercise.benefits}</p>
                                            </div>
                                            <button className="btn btn-outline-danger btn-lg" onClick={this.deleteWorkout}>Delete Workout</button>
                                        </div>
                                    </div>
                                    <hr className="individual-underline container"></hr>





                                </div>
                            )
                        })
                    }
                </div>
                <h1>Create Exercise</h1>
                <div className="jumbotron jumbotron-fluid recipe-jumbotron">
                    <div className="container">
                        <ExerciseForm
                            newExercise={this.state.newExercise}
                            handleExerciseChange={this.handleExerciseChange}
                            handleExerciseSubmit={this.createExercise}
                            submitBtnText="Create"
                            workoutId={this.props.match.params.id}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
