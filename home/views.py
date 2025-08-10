from django.shortcuts import render

def base(request):
    return render(request, 'home/base.html')

def home(request):
    return render(request, 'home/index.html')
