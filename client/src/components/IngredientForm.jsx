import React, { Component } from 'react'

export default function IngredientForm(props) {
    return (
        <div>
            <form onSubmit={props.handleIngredientSubmit} className="container">
                <div class="form-group">
                    <label htmlFor="name">Name:</label>
                    <input class="form-control"
                        type="text"
                        id="name"
                        name="name"
                        value={props.newIngredient.name}
                        onChange={props.handleIngredientChange}
                        placeholder="Enter email"
                    />
                </div>
                <button type="submit" class="btn btn-primary">Add Ingredient</button>
            </form>
        </div>
    )
}
