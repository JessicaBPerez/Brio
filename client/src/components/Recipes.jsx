import React, { Component } from 'react'

export default class Recipes extends Component {
    state = {
        recipes: [],
        newRecipe: {
            name: '',
            image_url: '',
            calories: '',
            prep_time: '',
            directions: ''
        }
    }
    render() {
        return (
            <div>
                <h1>Recipes</h1>
            </div>
        )
    }
}
