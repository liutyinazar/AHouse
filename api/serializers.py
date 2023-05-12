from rest_framework import serializers
from .models import (
    DjangoUser,
    Post,
    Category,
    Place,
    Room,
    District,
    HouseType,
    Walls,
    State,
    Image,
)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = DjangoUser
        fields = "__all__"


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = "__all__"


class WallsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Walls
        fields = "__all__"


class DistrictSerializer(serializers.ModelSerializer):
    class Meta:
        model = District
        fields = "__all__"


class HouseTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseType
        fields = "__all__"


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = "__all__"

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('file',)


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    city = PlaceSerializer()
    room = RoomSerializer()
    district = DistrictSerializer()
    house_type = HouseTypeSerializer()
    walls = WallsSerializer()
    state = StateSerializer()
    user = UserSerializer(read_only=True)

    images = ImageSerializer(source='image_set', many=True, read_only=True)

    # image = serializers.ImageField(max_length=None, use_url=True)
    # username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Post
        fields = "__all__"
