from rest_framework import serializers
from .models import Workout, Exercise, Recipe, Ingredient

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('id', 'name', 'recipe')

class RecipeSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True, read_only=True)
    class Meta:
        model = Recipe
        fields = ('id', 'name', 'image_url', 'calories', 'prep_time', 'directions', 'ingredients')


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id', 'name', 'exercise_target', 'time', 'video_url', 'description', 'benefits', 'workout')


class WorkoutSerializer(serializers.ModelSerializer):
    exercises = ExerciseSerializer(many=True, read_only=True)
    class Meta:
        model = Workout
        fields = ('id', 'name', 'image_url', 'target', 'workout_time')