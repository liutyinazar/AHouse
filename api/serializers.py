from rest_framework import serializers
from .models import User, Post, Category, Place, Room


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'
        
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    city = PlaceSerializer()
    room = RoomSerializer()
    image = serializers.ImageField(max_length=None, use_url=True)

    class Meta:
        model = Post
        fields = '__all__'
