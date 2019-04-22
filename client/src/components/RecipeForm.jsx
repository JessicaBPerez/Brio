import React, { Component } from 'react'

export default function RecipeForm(props) {

    return (
        <div>
            <h1 className="text-white"></h1>
            <form onSubmit={props.handleSubmit}>
                <div class="form-group">
                    <label htmlFor="name" className="text-white">Name:</label>
                    <input className="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={props.recipe.name}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div class="form-group">
                    <label htmlFor="image_url" className="text-white">Image URL:</label>
                    <input className="form-control"
                        type="text"
                        id="image_url"
                        name="image_url"
                        value={props.recipe.image_url}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div class="form-group">
                    <label htmlFor="calories" className="text-white">Calories:</label>
                    <input className="form-control"
                        type="text"
                        id="calories"
                        name="calories"
                        value={props.recipe.calories}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div class="form-group">
                    <label htmlFor="prep_time" className="text-white">Prep Time:</label>
                    <input className="form-control"
                        type="text"
                        id="prep_time"
                        name="prep_time"
                        value={props.recipe.prep_time}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div class="form-group">
                    <label htmlFor="directions" className="text-white">Directions:</label>
                    <textarea className="form-control"
                        type="text"
                        id="directions"
                        name="directions"
                        value={props.directions}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
        </div>
    )
}
