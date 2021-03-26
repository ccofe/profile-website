
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from .views import GetMes, GetSites, GetJobs
from .viewset import JobImageViewSet


router = routers.DefaultRouter()
router.register('job_image', JobImageViewSet, 'image')

urlpatterns = [
    url(r'^', include(router.urls)),
    url('job-view', GetJobs.as_view()),
    url('me-view', GetMes.as_view()),
    url('site-view', GetSites.as_view())
]
