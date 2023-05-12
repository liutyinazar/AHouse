from django.contrib import admin
from django.urls import path, include

from api.views import UserList, PostList, PostDetail, UserProfile, PostCity, login_view

from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/posts/", PostList.as_view()),
    path("api/posts/<int:id>/", PostDetail.as_view()),
    path("api/users/", UserList.as_view()),
    path("api/users/<str:username>", UserProfile.as_view()),
    path("api/users/auth/", include("rest_framework.urls")),
    path("api/posts/city/", PostCity.as_view()),
    path("accounts/profile/<str:username>", UserProfile.as_view()),

    path('login/', login_view, name='login'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
