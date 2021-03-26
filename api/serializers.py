from .models import Job, Me, Site
from rest_framework import serializers

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['company', 'image', 'title', 'summary','dates']

class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Me
        fields = ['about', 'picture', 'resume', 'firstName', 'lastName']

class SiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Site
        fields = ['about']