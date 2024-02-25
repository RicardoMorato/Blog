from .views import PostsViewSet


routes = [
    {"regex": r"posts", "viewset": PostsViewSet, "basename": "Post"},
]
