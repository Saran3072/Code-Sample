# Generated by Django 4.1.7 on 2023-03-24 23:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Geo', '0004_alter_geo_result'),
    ]

    operations = [
        migrations.AlterField(
            model_name='geo',
            name='result',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]