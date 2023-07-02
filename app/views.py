from django.shortcuts import redirect, render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import *
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_django
from django.contrib.auth.decorators import login_required

# Create your views here.

def register(request):
    if request.method == "GET":
        return render(request, 'register.html')
    else:
        username = request.POST.get('username') 
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = User.objects.get(username=username)
        if user:
            return HttpResponse('Já existe um usuário com este nome')
        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        return redirect('http://127.0.0.1:8000/login/')

def login(request):
    if request.method == "GET":
        return render(request, 'login.html')
    else:
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(username=username, password=password)
        
        if user:
            login_django(request, user)
            return redirect('http://127.0.0.1:8000/index/')
        else:
            return HttpResponse("errado")

@login_required 
def index(request):
    if request.user.is_authenticated:
        return render(request, 'index.html')
    return redirect('http://127.0.0.1:8000/login/')
    
