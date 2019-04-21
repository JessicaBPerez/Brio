import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import RecipeForm from './RecipeForm'
import IngredientForm from './IngredientForm'
import NavbarPage from './NavbarPage';

export default class IndividualRecipe extends Component {
    state = {
        recipe: {},
        ingredients: [],
        newIngredient: {
            name: 'holder value',
            recipe: this.props.match.params.id
        },
        redirectToRecipes: false,
        isEditFormDisplayed: false,
        redirectToIngredientId: false,
    }

    componentDidMount() {
        const recipeId = this.props.match.params.id
        this.fetchRecipe(recipeId)
        // this.fetchIngredientz()
    }

    fetchRecipe = async (recipeId) => {
        try {
            const response = await axios.get(`/api/v1/recipes/${recipeId}/`)
            this.setState({
                recipe: response.data,
                ingredients: response.data.ingredients
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

    // Edit Recipe Handle Change
    handleRecipeChange = (event) => {
        const clonedRecipe = { ...this.state.recipe }
        clonedRecipe[event.target.name] = event.target.value

        this.setState({
            recipe: clonedRecipe
        })
    }

    updateRecipe = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.put(`/api/v1/recipes/${this.props.match.params.id}/`, this.state.recipe)
            this.setState({
                recipe: response.data,
                isEditFormDisplayed: false
            })
        }
        catch (err) {
            console.log(`You didn't update!`, err)
        }
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
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

    // Delete Ingredient
    deleteIngredient = async (ingredientId) => {
        try {
            const response = await axios.delete(`/api/v1/ingredients/${ingredientId}/`).then(() => {
                // return <Redirect to={`/recipes/${this.props.match.params.id}`} />
                this.fetchRecipe(this.props.match.params.id)
            })
            // this.setState({
            //     redirectToIngredientId: true
            // })
        }
        catch (err) {
            console.log(`Didn't delete ingredients, Jess!`, err)
        }
    }

    render() {
        if (this.state.redirectToRecipes === true) {
            return <Redirect to="/recipes" />
        }

        // if (this.state.redirectToIngredientId === true) {
        //     return <Redirect to={`/recipes/${this.props.match.params.id}`} />
        // }
        return (
            <div>
                <NavbarPage />
                <h1>Individual Recipe</h1>
                <button onClick={this.deleteRecipe}>
                    Delete Recipe
                </button>
                <div className="card bg-dark text-white" style={{ maxWidth: '700px' }}>
                    <img className="card-img" src={this.state.recipe.image_url} alt={this.state.recipe.name} />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{this.state.recipe.name}</h5>
                        <p className="card-text">{this.state.recipe.calories}</p>
                        <p className="card-text">{this.state.recipe.prep_time}</p>
                        <p className="card-text">{this.state.recipe.directions}</p>
                    </div>
                </div>
                <button onClick={this.toggleEditForm}>
                    {this.state.isEditFormDisplayed === true ? 'Hide Edit Form' : 'Edit'}
                </button>
                {
                    this.state.isEditFormDisplayed
                        ? <RecipeForm
                            recipe={this.state.recipe}
                            handleRecipeChange={this.handleRecipeChange}
                            handleSubmit={this.updateRecipe}
                            submitBtnText="Update"
                        />
                        : null
                }
                <div>
                    {this.state.ingredients.map(ingredient => {
                        return (
                            <div key={ingredient.id}>
                                {/* () => {this.deleteIngredient(ingredient.id)} */}
                                <button onClick={() => this.deleteIngredient(ingredient.id)} type="button" className="close" aria-label="Close"><h2>{ingredient.name}</h2>
                                    <span aria-hidden="true">&times;</span>
                                </button>

                            </div>
                        )
                    })}
                </div>
                <h1>Add Ingredient</h1>
                <IngredientForm
                    newIngredient={this.state.newIngredient}
                    handleIngredientChange={this.handleIngredientChange}
                    handleIngredientSubmit={this.createIngredient}
                    submitBtnText="Create"
                    ingredientId={this.props.match.params.id}
                />
            </div>
        )
    }
}
