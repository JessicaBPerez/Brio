import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class IndividualRecipe extends Component {
    state = {
        recipe: {},
        ingredients: [],
        newIngredient: {
            name: 'holder value',
            recipe: this.props.match.params.id
        },
        redirectToRecipes: false,
        isEditFormDisplayed: false
    }

    componentDidMount() {
        const recipeId = this.props.match.params.id
        this.fetchRecipe(recipeId)
    }

    fetchRecipe = async (recipeId) => {
        try {
            const response = await axios.get(`/api/v1/recipes/${recipeId}/`)
            this.setState({
                recipe: response.data,
                ingredients: response.data.exercises
            })
        }
        catch (err) {
            console.log(`You made an error, Jess!`, err)
        }
    }

    createIngredient = async (event, ingredient, id) => {
        event.preventDefault()
        console.log(this.state.newIngredient)
        try {
            const response = await axios.post('/api/v1/ingredients/', this.state.newIngredient)

            const clonedIngredients = [...this.state.ingredients]
            clonedIngredients.push(response.data)
            this.setState({
                ingredients: clonedIngredients,
                newIngredient: {
                    name: '',
                    recipe: ''
                }
            })
        }
        catch (err) {
            console.log(`You have a POST error in exercises, Jess!`, err)
        }
    }

    handleIngredientChange = (event) => {
        const clonedNewIngredient = { ...this.state.newIngredient }
        clonedNewIngredient[event.target.name] = event.target.value

        this.setState({
            newIngredient: clonedNewIngredient
        })
    }

    deleteRecipe = async () => {
        try {
            const response = await axios.delete(`/api/v1/recipes/${this.props.match.params.id}/`)
            this.setState({
                redirectToRecipes: true
            })
        }
        catch (err) {
            console.log(`Didn't delete, Jess!`, err)
        }
    }

    render() {
        if (this.state.redirectToRecipes === true) {
            return <Redirect to="/recipes" />
        }
        return (
            <div>
                <h1>Individual Recipe</h1>
                <button onClick={this.deleteRecipe}>
                    Delete Recipe
                </button>
            </div>
        )
    }
}
