from rest_framework import viewsets
from .serializers import JobSerializer
from .models import Job


class JobImageViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    