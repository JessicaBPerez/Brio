from django.contrib import admin
from .models import Workout, Exercise, Recipe, Ingredient

# Register your models here.
admin.site.register([Workout, Exercise])
admin.site.register([Recipe, Ingredient])