from django.db import models

# Create your models here.
class Workout(models.Model):
    name = models.CharField(default='', max_length=200)
    image_url = models.CharField(default='', max_length=200)
    target = models.CharField(default='', max_length=200)
    workout_time = models.CharField(default='', max_length=200)

    def __str__(self):
        return self.name

class Exercise(models.Model):
    name = models.CharField(default='', max_length=200)
    exercise_target = models.CharField(default='', max_length=200)
    time = models.CharField(default='', max_length=200)
    video_url = models.CharField(default='', max_length=600)
    description = models.TextField(default='', max_length=2000)
    benefits = models.TextField(default='', max_length=2000)
    workout = models.ForeignKey(Workout, on_delete='CASCADE', related_name='exercises')

    def __str__(self):
        return self.name

class Recipe(models.Model):
    name = models.CharField(default='', max_length=200)
    image_url = models.CharField(default='', max_length=200)
    calories = models.CharField(default='', max_length=200)
    prep_time = models.CharField(default='', max_length=200)
    directions = models.TextField(default='', max_length=2000)

    def __str__(self):
        return self.name

class Ingredient(models.Model):
    name = models.CharField(default='', max_length=200)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE,
                             blank=True, null=True, related_name="ingredients")
    def __str__(self):
        return self.name
