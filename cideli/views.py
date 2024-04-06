from django.http import HttpResponse
from django.shortcuts import render

def Home(request):

    #if not logged in
    return Login(request)
    #else
    #return Menu(request)
def Login(request):
    return render(request, 'login/login.html')


def Register(request):
    return render(request, 'register/register.html')

def Profile(request):
    return

def Menu(request):
    return

def Order(request):
    return
