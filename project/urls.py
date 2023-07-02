
from django.contrib import admin
from django.urls import path, include
from app import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
]
