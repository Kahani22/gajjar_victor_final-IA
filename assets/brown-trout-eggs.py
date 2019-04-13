# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import matplotlib.pyplot as plt
import numpy as np

year = ('2014', '2015', '2016', '2017', '2018')
categories = ('Received Eggs', 'Released Eggs')
brownTrout = np.arange(len(year))
receivedEggs = (100000, 80000, 70000, 80000, 100000)
releasedEggs = (70000, 70000, 70000, 70000, 90000)

plt.bar(brownTrout, receivedEggs, align="center", color="#ff5742") 
plt.bar(brownTrout, releasedEggs, align="center", color="#ff8f39")
plt.xticks(brownTrout, year)
plt.ylabel("No. of Eggs")
plt.xlabel("Years")
plt.legend(categories, loc=2)
plt.title("No. of Brown Trout Eggs Received and Released")
plt.show()
