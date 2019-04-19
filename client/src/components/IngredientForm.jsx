import React, { Component } from 'react'

export default function IngredientForm(props) {

    return (
        <div>
            <h4>Ingredient form</h4>
            <form onSubmit={props.handleIngredientSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={props.newIngredient.name}
                        onChange={props.handleIngredientChange}
                    />
                </div>
                <button>{props.submitBtnText}</button>
            </form>
        </div>
    )

}
