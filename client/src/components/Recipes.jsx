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
                        <div key={recipe.id} className="flex-container card-flex">
                            {/* <Link to={`/recipes/${recipe.id}/`}>{recipe.name}</Link> */}
                            <div className="card bg-dark text-white" style={{ maxWidth: '600px' }}>
                                <img className="card-img" src={recipe.image_url} alt={recipe.name} />
                                <div class="card-body">
                                    <h5 className="card-title">{recipe.name}</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    <p className="card-text"><Link to={`/recipes/${recipe.id}/`}>{recipe.name}</Link></p>
                                </div>
                                <div className="card-img-overlay">
                                    <h5 className="card-title">{recipe.name}</h5>
                                    <p className="card-text"><Link to={`/recipes/${recipe.id}/`}>{recipe.name}</Link></p>
                                    <p className="card-text">{recipe.calories}</p>
                                    <p className="card-text">{recipe.prep_time}</p>
                                    {/* <p className="card-text">{recipe.directions}</p> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
                <h1>Create Recipe</h1>
                <RecipeForm
                    recipe={this.state.newRecipe}
                    handleSubmit={this.createRecipe}
                    handleRecipeChange={this.handleRecipeChange}
                    submitBtnText="Create"
                />
            </div>
        )
    }
}
