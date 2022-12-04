from django.shortcuts import render
from rest_framework import generics
from .models import Articles
from .serializers import ArticleSerializer


class ArticlesAPIList(generics.ListAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializer


class ArticlesAPIView(generics.RetrieveAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticleSerializer
