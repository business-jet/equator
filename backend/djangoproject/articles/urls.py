from django.urls import path
from .views import ArticlesAPIList, ArticlesAPIView

urlpatterns = [
    path('', ArticlesAPIList.as_view()),
    path('<int:pk>', ArticlesAPIView.as_view()),
]