from django.contrib import admin
from .models import (
    Category,
    Place,
    Room,
    District,
    HouseType,
    State,
    Walls,
    Post,
    Image,
)


admin.site.register(Post)
admin.site.register(Category)
admin.site.register(Place)
admin.site.register(Room)
admin.site.register(District)
admin.site.register(HouseType)
admin.site.register(State)
admin.site.register(Walls)
admin.site.register(Image)
