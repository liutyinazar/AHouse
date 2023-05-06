from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


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


class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=50)
    price = models.IntegerField(default=0, validators=[MinValueValidator(1)])
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    city = models.ForeignKey(Place, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=list)

    image = models.ImageField(upload_to='post_images/')

    def __str__(self):
        return self.title



