from django.contrib import admin
from django.urls import path

from api.views import UserList, PostList, PostDetail

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/users/", UserList.as_view()),
    path("api/posts/", PostList.as_view()),
    path("api/posts/<int:id>/", PostDetail.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
