# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import matplotlib.pyplot as plt
import numpy as np

year = (2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018)
members = [52, 48, 67, 45, 45, 50, 55, 67, 65, 70, 60, 60, 55, 60, 65, 75, 80]
plt.plot(year, members, color='#777777')
plt.xlabel("Years")
plt.ylabel("No. of Members")
plt.title("Anglers Membership Rate")
plt.show()
