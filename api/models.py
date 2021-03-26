from django.db import models

# Create your models here.
class Job(models.Model):
    company = models.CharField(max_length=100)
    image = models.ImageField(upload_to='api/static/')
    title = models.CharField(max_length=100)
    summary = models.CharField(max_length=600)
    dates = models.CharField(max_length=100)

class Me(models.Model):
    about = models.CharField(max_length=200)
    picture = models.ImageField(upload_to='api/static/')
    resume = models.FileField(upload_to='api/static/')
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=20)

class Site(models.Model):
    about = models.CharField(max_length=200)
