from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=True, allow_blank=False, max_length=250)
    text = serializers.CharField(required=False, allow_blank=True)
    published_date = serializers.DateTimeField(required=False)
