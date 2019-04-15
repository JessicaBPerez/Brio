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
    description = models.TextField(default='', max_length=1000)
    benefits = models.TextField(default='', max_length=1000)
    workout = models.ForeignKey(Workout, on_delete='CASCADE', related_name='exercises')

    def __str__(self):
        return self.name
