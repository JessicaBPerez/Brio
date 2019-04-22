import React, { Component } from 'react'

export default function ExerciseForm(props) {
    return (
        <div>
            <form onSubmit={props.handleExerciseSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="text-white">Name:</label>
                    <input className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={props.newExercise.name}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exercise_target" className="text-white">Exercise Target:</label>
                    <input className="form-control"
                        type="text"
                        id="exercise_target"
                        name="exercise_target"
                        value={props.newExercise.exercise_target}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time" className="text-white">Time: </label>
                    <input className="form-control"
                        type="text"
                        id="time"
                        name="time"
                        value={props.newExercise.time}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="video_url" className="text-white">Video URL:</label>
                    <input className="form-control"
                        type="text"
                        id="video_url"
                        name="video_url"
                        value={props.newExercise.video_url}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="text-white">description:</label>
                    <input className="form-control"
                        type="text"
                        id="description"
                        name="description"
                        value={props.newExercise.description}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="benefits" className="text-white">Benefits:</label>
                    <input className="form-control"
                        type="text"
                        id="benefits"
                        name="benefits"
                        value={props.newExercise.benefits}
                        onChange={props.handleExerciseChange}
                    />
                </div>
                <button className="btn btn-primary btn-block">{props.submitBtnText}</button>
            </form>
        </div>
    )

}
