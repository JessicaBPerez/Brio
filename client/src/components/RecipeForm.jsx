import React, { Component } from 'react'

export default function RecipeForm(props) {

    return (
        <div>
            <h1>Recipe Form</h1>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={props.newRecipe.name}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div>
                    <label htmlFor="image_url">Image URL:</label>
                    <input
                        type="text"
                        id="image_url"
                        name="image_url"
                        value={props.newRecipe.image_url}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div>
                    <label htmlFor="calories">Calories:</label>
                    <input
                        type="text"
                        id="calories"
                        name="calories"
                        value={props.newRecipe.calories}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div>
                    <label htmlFor="prep_time">Prep Time:</label>
                    <input
                        type="text"
                        id="prep_time"
                        name="prep_time"
                        value={props.newRecipe.prep_time}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <div>
                    <label htmlFor="directions">Directions:</label>
                    <input
                        type="text"
                        id="directions"
                        name="directions"
                        value={props.newRecipe.directions}
                        onChange={props.handleRecipeChange}
                    />
                </div>
                <button>{props.submitBtnText}</button>
            </form>
        </div>
    )
}
