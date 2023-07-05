from django.db import models
from django.contrib.auth.models import User

class Balance(models.Model):
    id_balance = models.AutoField(primary_key=True)
    balance = models.FloatField(null=True)
    user = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
