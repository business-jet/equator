from django.db import models
from django.db.models import CharField, TextField, DateTimeField, IntegerField


class Articles(models.Model):
    title = CharField(max_length=255)
    preview = TextField(max_length=500)
    text = TextField()
    score = IntegerField()
    date = DateTimeField()
    picture_url = TextField(max_length=500)

    def __str__(self) -> str:
        return f'{self.id}: {self.title}'
