from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status, serializers
from .models import Job, Me, Site
from rest_framework.response import Response
from .serializers import JobSerializer, MeSerializer, SiteSerializer

# Create your views here.
class GetMes(APIView):
    serializer_class = MeSerializer
    def get(self, request, format=None):
        mes = Me.objects.all()
        mes_list = GetQuerySetList(mes, self.serializer_class)
        return Response(mes_list, status=status.HTTP_200_OK)

class GetJobs(APIView):
    serializer_class = JobSerializer
    def get(self, request, format=None):
        jobs = Job.objects.all()
        jobs_list = GetQuerySetList(jobs, self.serializer_class)
        return Response(jobs_list, status=status.HTTP_200_OK)

class GetSites(APIView):
    serializer_class = SiteSerializer
    def get(self, request, format=None):
        sites = Site.objects.all()
        sites_list = GetQuerySetList(sites, self.serializer_class)
        return Response(sites_list, status=status.HTTP_200_OK)


# ---------------------------------------------
#       HELPER FUNCTIONS
# ---------------------------------------------

def GetQuerySetList(q_set, the_serializer):
        output_array = []
        for ind in range(len(q_set)):
            output_array.append(the_serializer(q_set[ind]).data)

        return output_array