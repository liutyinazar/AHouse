from rest_framework import generics
from .models import DjangoUser, Post
from .serializers import UserSerializer, PostSerializer


class UserList(generics.ListAPIView):
    queryset = DjangoUser.objects.all()
    serializer_class = UserSerializer


class UserProfile(generics.RetrieveAPIView):
    queryset = DjangoUser.objects.all()
    serializer_class = UserSerializer
    lookup_field = "username"


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = "id"


class PostCity(generics.ListAPIView):
    serializer_class = PostSerializer
    lookup_field = "name"
