import math
a=int(input())
b=int(input())
while a<b:  
    for i in range(a,b):
        if math.sqrt(i)%1== 0:
            print(i)
    break