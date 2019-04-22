import React, { Component } from 'react'

export default function WorkoutForm(props) {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name" className="text-white">Name:</label>
                    <input className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={props.workout.name}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="target" className="text-white">Target:</label>
                    <input className="form-control"
                        type="text"
                        id="target"
                        name="target"
                        value={props.workout.target}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image_url" className="text-white">Image URL:</label>
                    <input className="form-control"
                        type="text"
                        id="image_url"
                        name="image_url"
                        value={props.workout.image_url}
                        onChange={props.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="workout_time" className="text-white">Workout Time:</label>
                    <input className="form-control"
                        type="text"
                        id="workout_time"
                        name="workout_time"
                        value={props.workout.workout_time}
                        onChange={props.handleChange}
                    />
                </div>
                <button className="btn btn-primary btn-block">{props.submitBtnText}</button>
            </form>
        </div>
    )
}
