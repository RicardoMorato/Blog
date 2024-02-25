from django.db import models
from django.utils import timezone
from common.models import IndexedTimeStampedModel
from users.models import User

class Post(IndexedTimeStampedModel):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    text = models.TextField()
    published_date = models.DateTimeField(blank=True, null=True)

    def publish(self) -> None:
        self.published_date = timezone.now()
        self.save()

    def __str__(self) -> str:
        return self.title
