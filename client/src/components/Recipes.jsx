import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import RecipeForm from './RecipeForm.jsx'

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

    componentDidMount() {
        this.fetchRecipes()
    }


    fetchRecipes = async () => {
        try {
            const response = await axios.get(`/api/v1/recipes`)
            this.setState({
                recipes: response.data,
            })
        }
        catch (err) {
            console.log(`You made an error, Jess!`, err)
        }
    }
    // Recipe Handle Change
    handleRecipeChange = (event) => {
        const clonedNewRecipe = { ...this.state.newRecipe }
        clonedNewRecipe[event.target.name] = event.target.value

        this.setState({
            newRecipe: clonedNewRecipe
        })
    }

    createRecipe = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('/api/v1/recipes/', this.state.newRecipe)

            const clonedRecipes = [...this.state.recipes]
            clonedRecipes.push(response.data)
            this.setState({
                recipes: clonedRecipes,
                newRecipe: {
                    name: '',
                    image_url: '',
                    calories: '',
                    prep_time: '',
                    directions: ''
                }
            })
        }
        catch (err) {
            console.log(`You have a POST error, Jess!`, err)
        }
    }
    render() {
        return (
            <div>
                <h1>All Recipes</h1>
                {this.state.recipes.map(recipe => {
                    return (
                        <div key={recipe.id}>
                            {/* <h3>{workout.name}</h3>
                            <img src={workout.image_url} alt={workout.name} /> */}
                            <Link to={`/recipes/${recipe.id}/`}>{recipe.name}</Link>
                            <div className="card bg-dark text-white" style={{ maxWidth: '700px' }}>
                                <img className="card-img" src={recipe.image_url} alt={recipe.name} />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">{recipe.name}</h5>
                                    <p className="card-text"><Link to={`/recipes/${recipe.id}/`}>{recipe.name}</Link></p>
                                    <p className="card-text">{recipe.calories}</p>
                                    <p className="card-text">{recipe.prep_time}</p>
                                    <p className="card-text">{recipe.directions}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <h1>Create Recipe</h1>
                <RecipeForm
                    newRecipe={this.state.newRecipe}
                    handleSubmit={this.createRecipe}
                    handleRecipeChange={this.handleRecipeChange}
                    submitBtnText="Create"
                />
            </div>
        )
    }
}
