from django.contrib import admin
from .models import Job, Me, Site


# Register your models here.
admin.site.register(Job)
admin.site.register(Me)
admin.site.register(Site)