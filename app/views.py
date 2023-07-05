from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse


from django.shortcuts import render, redirect
from app.forms import UserRegistrationForm
from app.forms import AddBalanceForm
from django.contrib import messages
from django.contrib.auth.models import User

from .models import Balance

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()

            messages.success(request, 'Registro efetuado com sucesso. Faça login para acessar sua conta.')
            return redirect('login')
        else:
            messages.error(request, 'Erro no formulário. Verifique os dados informados.')
    else:
        form = UserRegistrationForm()
        
    context = {
        'form': form
    }
    return render(request, 'register.html', context)

def login_view(request):
    if request.method == "GET":
        return render(request, 'login.html')
    elif request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(username=username, password=password)
        
        if user is not None:
            login(request, user)  # Pass the user object to the login() function
            return redirect('http://127.0.0.1:8000/index/')
        else:
            return HttpResponse("errado")

@login_required 
def index(request):
    return render(request, 'index.html')

from django.shortcuts import render, redirect
from .models import Balance


def balance(request):
    # Lógica para lidar com a exibição do saldo do usuário
    # e permitir adicionar ou retirar dinheiro

    return render(request, 'balance.html')