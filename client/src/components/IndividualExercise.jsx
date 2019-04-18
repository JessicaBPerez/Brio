import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class IndividualExercise extends Component {
    state = {
        exercise: {},
        redirectToWorkouts: false
    }

    componentDidMount() {
        const exerciseId = this.props.match.params.id
        this.fetchExercise(exerciseId)
    }

    fetchExercise = async (exerciseId) => {
        try {
            const response = await axios.get(`/api/v1/exercises/${exerciseId}/`)
            this.setState({
                exercise: response.data
            })
        }
        catch (err) {
            console.log(`You made an error, Jess!`, err)
        }
    }

    deleteExercise = async () => {
        try {
            const response = await axios.delete(`/api/v1/exercises/${this.props.match.params.id}/`)
            this.setState({
                redirectToWorkouts: true
            })
        }
        catch (err) {
            console.log(`Didn't delete exercises, Jess!`, err)
        }
    }

    render() {
        if (this.state.redirectToWorkouts === true) {
            return <Redirect to="/workouts" />
        }
        return (
            <div>
                <h1>Individual Exercise</h1>
                <button onClick={this.deleteExercise}>
                    Delete
                </button>
            </div>
        )
    }
}
