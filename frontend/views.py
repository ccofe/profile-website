from django.shortcuts import render
from django.http import HttpResponse

def homePageView(request):
    return HttpResponse('Hello, World!')

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, "frontend/index.html")