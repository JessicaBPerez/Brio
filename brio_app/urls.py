from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('workouts', views.WorkoutView)
router.register('exercises', views.ExerciseView)
router.register('recipes', views.RecipeView)
router.register('ingredients', views.IngredientView)

urlpatterns = [
    path('', include(router.urls))
]