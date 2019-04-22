import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import RecipeForm from './RecipeForm.jsx'
import NavbarPage from './NavbarPage.jsx';

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
                <NavbarPage />
                <div className="bg-dark text-white workout-margin workout-jumbo">
                    <img className="card-img" src="https://foodrevolution.org/wp-content/uploads/2019/01/iStock-855098134-marilyna-featured.jpg" alt="Workout" />
                    <div className="card-img-overlay">
                        <h5 className="card-title centered workout-text">RECIPES</h5>
                    </div>
                </div>
                <h1>All Recipes</h1>
                {this.state.recipes.map(recipe => {
                    return (
                        <div className="flex-container card-flex" style={{ marginTop: "1rem", marginLeft: "2rem;" }}>
                            <div key={recipe.id} className="flex-container card-flex">
                                <div className="card" style={{ width: "600px" }}>
                                    <img src={recipe.image_url} className="card-img-top" alt={recipe.name} />
                                    <div className="card-body">
                                        <h5 className="card-title"><Link to={`/recipes/${recipe.id}/`}>{recipe.name}</Link></h5>
                                        <p className="card-text">Cook Time: {recipe.prep_time}</p>
                                        <p className="card-text">Calories: {recipe.calories}</p>
                                        <Link to={`/recipes/${recipe.id}/`} className="btn btn-primary">Get Recipe</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <h1>Create Recipe</h1>
                <div className="jumbotron jumbotron-fluid recipe-jumbotron">
                    <div className="container">
                        <RecipeForm
                            recipe={this.state.newRecipe}
                            handleSubmit={this.createRecipe}
                            handleRecipeChange={this.handleRecipeChange}
                            submitBtnText="Create"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
