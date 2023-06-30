from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    return render(request, 'index.html')

<<<<<<< HEAD
def login(request):
    return render(request, 'login.html')

def register(request):
    return render(request, 'register.html')
=======
def index(request):
    return render(request, 'login.html')
>>>>>>> 09c7e160ea59d154cc67e8f826af64a7847286b1
