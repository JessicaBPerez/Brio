# Generated by Django 2.2 on 2019-04-15 18:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('brio_app', '0003_auto_20190415_1757'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ingredient',
            name='calories',
        ),
    ]
