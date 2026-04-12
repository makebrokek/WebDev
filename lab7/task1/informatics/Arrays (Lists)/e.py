n=int(input())
arr=list(map(int,input().split()))
count=0
for i in range(len(arr)):
    if (arr[i]>0 and arr[i+1]>0) or (arr[i]<0 and arr[i+1]<0):
        print("YES")
        break
    else:
        print("NO")
        break   
