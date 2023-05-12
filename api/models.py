from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone
from django.contrib.auth.models import User as DjangoUser


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Place(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Room(models.Model):
    quantity = models.IntegerField(
        default=1, validators=[MinValueValidator(0), MaxValueValidator(5)]
    )

    def __str__(self):
        return str(self.quantity)


class District(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class HouseType(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class State(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Walls(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=25)
    price = models.IntegerField(default=1, validators=[MinValueValidator(1)])
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    city = models.ForeignKey(Place, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=list)
    content = models.TextField(max_length=2000, default="")
    area = models.IntegerField(default=1, validators=[MinValueValidator(1)])
    floor = models.IntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(99)]
    )
    created_date = models.DateTimeField(default=timezone.now)
    district = models.ForeignKey(District, on_delete=models.CASCADE)  # район Львова
    address = models.CharField(max_length=100)  # Адреса
    address_number = models.IntegerField(
        default=1, validators=[MinValueValidator(1)]
    )  # Адреса Номер Будинку
    house_type = models.ForeignKey(
        HouseType,
        on_delete=models.CASCADE,
    )  # тип квартири або будинку

    state = models.ForeignKey(State, on_delete=models.CASCADE, default=None)
    balcony = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(5)]
    )
    walls = models.ForeignKey(Walls, on_delete=models.CASCADE, default=None)
    premium = models.BooleanField(default=False)

    user = models.ForeignKey(DjangoUser, on_delete=models.CASCADE, default=None)

    def get_default_user(self):
        return DjangoUser.objects.get(id=1)

    def save(self, *args, **kwargs):
        if not self.user_id:
            self.user = self.get_default_user()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class Image(models.Model):
    file = models.ImageField(upload_to="post_images/", default=None)
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
