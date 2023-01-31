from django.urls import path
# from django.contrib.auth import views as  auth_views
from .views import TaskListCreateView, TaskRetrieveUpdateDestroyView,MyTokenObtainPairView,LogoutView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('tasks/', TaskListCreateView.as_view(), name='task-list-create'),
    path('tasks/<int:pk>/', TaskRetrieveUpdateDestroyView.as_view(), name='task-detail'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),
    # path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]
