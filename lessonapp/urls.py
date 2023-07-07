from django.urls import path
from . import views

urlpatterns = [
    path('query/', views.client_question),
    path('lesson_res/', views.lesson_query),
    path('lesson_style/', views.update_learning_style)
]
