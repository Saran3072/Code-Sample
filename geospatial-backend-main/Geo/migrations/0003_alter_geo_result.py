# Generated by Django 4.1.7 on 2023-03-22 06:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Geo', '0002_geo_created_geo_result_geo_updated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='geo',
            name='result',
            field=models.ImageField(upload_to='results'),
        ),
    ]
