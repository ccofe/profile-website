from django.urls import path
from .views import index, homePageView

urlpatterns = [
    path('', index),
    path('hello', homePageView)
]
