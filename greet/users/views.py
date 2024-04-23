from django.shortcuts import render
from .models import User

def index(request):
    if request.method == 'POST':
        name = request.POST['name']
        # Обработка ошибок (пустое имя)
        if not name:
            error_message = 'Введите имя'
        else:
            # Сохранение имени в базе данных
            user = User(name=name)
            user.save()
            print(user)
            return render(request, 'users/index.html', {'user': user})
    else:
        return render(request, 'users/index.html')