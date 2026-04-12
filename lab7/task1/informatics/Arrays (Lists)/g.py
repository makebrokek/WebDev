n=int(input())
arr=list(map(int, input().split()))
i = 0
len=len(arr)
while i < len/2:
    arr[i],arr[len-1-i]= arr[len-i-1],arr[i]
    i=i+1
print(*arr) 