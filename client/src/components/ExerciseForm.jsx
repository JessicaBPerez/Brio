import React, { Component } from 'react'

export default function ExerciseForm(props) {
    return (
        <div>
            <h1>Exercise Form</h1>
            <form onSubmit={props.handleExerciseSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={props.newExercise.name}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                {/* <div>
                    <label htmlFor="exercise_target">Exercise Target:</label>
                    <input
                        type="text"
                        id="exercise_target"
                        name="exercise_target"
                        value={props.newExercise.exercise_target}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div>
                    <label htmlFor="time">Time: </label>
                    <input
                        type="text"
                        id="time"
                        name="time"
                        value={props.newExercise.time}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div>
                    <label htmlFor="video_url">Video URL:</label>
                    <input
                        type="text"
                        id="video_url"
                        name="video_url"
                        value={props.newExercise.video_url}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={props.newExercise.description}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div>
                    <label htmlFor="benefits">Benefits:</label>
                    <input
                        type="text"
                        id="benefits"
                        name="benefits"
                        value={props.newExercise.benefits}
                        onChange={props.handleExerciseChange}
                    />
                </div> */}
                <button>{props.submitBtnText}</button>
            </form>
        </div>
    )

}
