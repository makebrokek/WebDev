#!/bin/python3

from datetime import datetime
from locale import format_string
import math
import os
import random
import re
import sys

# Complete the time_delta function below.
def time_delta(t1, t2):
    dt1 = datetime.strptime(t1, format_string)
    dt2 = datetime.strptime(t2, format_string)
    delta = abs((dt2 - dt1).total_seconds())
    return str(int(delta))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input())

    for t_itr in range(t):
        t1 = input()
        t2 = input()

        delta = time_delta(t1, t2)

        fptr.write(delta + '\n')

    fptr.close()
