# Generated by Django 5.0.4 on 2024-04-04 00:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Drink",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("cost", models.IntegerField(default=0)),
                ("toppings", models.TextField(max_length=70)),
                ("imagePath", models.IntegerField(default=0)),
                ("temp", models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name="User",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("full_name", models.CharField(max_length=70)),
                ("pass_word", models.CharField(max_length=70)),
            ],
        ),
        migrations.CreateModel(
            name="Order",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "ordered_drink",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="menu.drink"
                    ),
                ),
                (
                    "ordered_user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="menu.user"
                    ),
                ),
            ],
        ),
    ]