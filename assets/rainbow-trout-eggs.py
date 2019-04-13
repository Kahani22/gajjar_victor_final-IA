# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import matplotlib.pyplot as plt
import numpy as np

year = ('2014', '2015', '2016', '2017', '2018')
categories = ('Received Eggs', 'Released Eggs')
rainbowTrout = np.arange(len(year))
receivedEggs = (100000, 150000, 100000, 50000, 150000)
releasedEggs = (80000, 120000, 90000, 40000, 140000)

plt.bar(rainbowTrout, receivedEggs, align="center", color="#4286f4") 
plt.bar(rainbowTrout, releasedEggs, align="center", color="#673eef")
plt.xticks(rainbowTrout, year)
plt.ylabel("No. of Eggs")
plt.xlabel("Years")
plt.legend(categories, loc=2)
plt.title("No. of Rainbow Trout Eggs Received and Released")
plt.show()
