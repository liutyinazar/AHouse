from django.contrib import admin
from .models import User, Post, Category, Place, Room

admin.site.register(User)
admin.site.register(Post)
admin.site.register(Category)
admin.site.register(Place)
admin.site.register(Room)
