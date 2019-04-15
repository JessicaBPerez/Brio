from django.contrib import admin
from .models import Workout, Exercise

# Register your models here.
admin.site.register([Workout, Exercise])