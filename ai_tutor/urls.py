from django.contrib import admin
from django.urls import path, include
from lessonapp.views import home
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('api/', include('lessonapp.urls')),
    path('manifest.json', serve, kwargs={'path': 'manifest.json', 'document_root': settings.STATIC_ROOT}),
    path('logo192.png', serve, kwargs={'path': 'logo192.png', 'document_root': settings.STATIC_ROOT}),
    path('avatars/user1.png', serve, kwargs={'path': '/avatars/user1.png','document_root': settings.STATIC_ROOT }),
    path('favicon.ico', serve, kwargs={'path': 'favicon.ico','document_root': settings.STATIC_ROOT })
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

