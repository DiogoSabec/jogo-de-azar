from django.urls import path
from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('login/', views.login, name='login'),
<<<<<<< HEAD
    path('register/', views.register, name='register')
    
=======
>>>>>>> 09c7e160ea59d154cc67e8f826af64a7847286b1
]


