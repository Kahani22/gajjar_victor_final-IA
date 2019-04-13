# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import matplotlib.pyplot as plt

labels = ('Komoka', 'Oxbow', 'Dingman')
sizes = (52, 40, 42)
colors = ('#38ff71', '#37ffa8', '#36c6ff')
explode = (0.1, 0, 0)

plt.title("A Rainbow Trout Fishing Chart 2016-2018")
plt.pie(sizes, explode=explode, labels=labels, colors=colors, shadow=True)
plt.show()
