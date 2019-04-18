import React, { Component } from 'react'

export default function WorkoutForm(props) {

    return (
        <div>
            <h1>Workout Form</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={props.workout.name}
                        onChange={props.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="target">Target:</label>
                    <input
                        type="text"
                        id="target"
                        name="target"
                        value={props.workout.target}
                        onChange={props.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="image_url">Image URL:</label>
                    <input
                        type="text"
                        id="image_url"
                        name="image_url"
                        value={props.workout.image_url}
                        onChange={props.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="workout_time">Workout Time:</label>
                    <input
                        type="text"
                        id="workout_time"
                        name="workout_time"
                        value={props.workout.workout_time}
                        onChange={props.handleChange}
                    />
                </div>
                <button>{props.submitBtnText}</button>
            </form>
        </div>
    )
}
