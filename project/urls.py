from django.contrib import admin
from django.urls import path, include
from app import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register, name='register'),
    path('admin/', admin.site.urls),
    path('balance/<int:user_id>/add/', views.add_balance, name='add_balance'),
]
