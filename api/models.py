from django.db import models

# Create your models here.
class Job(models.Model):
    company = models.CharField(max_length=100)
    image = models.ImageField(upload_to='')
    title = models.CharField(max_length=100)
    summary = models.TextField()
    dates = models.CharField(max_length=100)

class Me(models.Model):
    about = models.TextField()
    picture = models.ImageField(upload_to='')
    resume = models.FileField(upload_to='')
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=20)

class Site(models.Model):
    about = models.TextField()
