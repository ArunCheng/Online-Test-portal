# Generated by Django 5.0.3 on 2024-03-26 09:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0003_login_test_taken'),
    ]

    operations = [
        migrations.CreateModel(
            name='TempLogin',
            fields=[
                ('tempID', models.EmailField(max_length=254, primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='login',
            name='test_taken',
        ),
    ]