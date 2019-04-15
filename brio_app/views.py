from django.shortcuts import render
from rest_framework import viewsets
from .serializers import WorkoutSerializer, ExerciseSerializer, IngredientSerializer, RecipeSerializer
from .models import Workout, Exercise, Recipe, Ingredient

# Create your views here.
class WorkoutView(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

class ExerciseView(viewsets.ModelViewSet):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class RecipetView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class IngredientView(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer