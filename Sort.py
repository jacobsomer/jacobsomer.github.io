#!/usr/bin/env python
# coding: utf-8

# In[3]:


import random
import time

def insertion_sort(arr):
    for k in range(1, len(arr)):
        cur = arr[k]
        j = k
        while j > 0 and arr[j-1] > cur:
            arr[j] = arr[j-1]
            j = j - 1
            arr[j] = cur

def selection_sort(arr):
    for k in range(0,len(arr)):
        min_val=min(arr[k:len(arr)])
        j=arr[k:len(arr)].index(min_val)+k
        swapped_val=arr[k]
        while arr[k]>min_val:
            arr[k]=arr[j]
            arr[j]=swapped_val
if __name__ == '__main__':
    
    def increasing(length):
        i=0
        my_list=[]
        while len(my_list)<length:
            val= i
            my_list.append(val)
            i+=1
        return my_list

    def decreasing(length):
        i=length
        my_list=[]
        while len(my_list)<length:
            val=i
            my_list.append(val)
            i-=1
        return my_list

    def ran(length):
        my_list=[]
        while len(my_list)<length:
            x=random.randint(0, length)
            my_list.append(x)
        return my_list

    def averages(arr):
        for k in range(0,len(arr)):
            j=arr[k][-8:]
            arr[k]= float(j)

    def main(arr):
        for k in range(0,30):
            if k<=5:
                l=1000
                inc=increasing(l)
                dec=decreasing(l)
                rand=ran(l)
                if k==0:
                    start= time.process_time()
                    insertion_sort(inc)
                    end= time.process_time()
                    arr[k]=('One Thousand Increasing Insertion: ' + '{:.6f}'.format(end-start))
                if k==1:
                    start= time.process_time()
                    selection_sort(inc)
                    end= time.process_time()
                    arr[k]=('One Thousand Increasing Selection: ' + '{:.6f}'.format(end-start))
                if k==2:
                    start= time.process_time()
                    insertion_sort(dec)
                    end= time.process_time()
                    arr[k]=('One Thousand Decreasing Insertion: ' + '{:.6f}'.format(end-start))
                if k==3:
                    start= time.process_time()
                    selection_sort(dec)
                    end= time.process_time()
                    arr[k]=('One Thousand Decreasing Selection: ' + '{:.6f}'.format(end-start))
                if k==4:
                    start= time.process_time()
                    insertion_sort(rand)
                    end= time.process_time()
                    arr[k]=('One Thousand Random Insertion: ' + '{:.6f}'.format(end-start))
                if k==5:
                    start= time.process_time()
                    selection_sort(rand)
                    end= time.process_time()
                    arr[k]=('One Thousand Random Selection: ' + '{:.6f}'.format(end-start))
            if 5<k<12:
                l=2500
                inc=increasing(l)
                dec=decreasing(l)
                rand=ran(l)
                if k==6:
                    start= time.process_time()
                    insertion_sort(inc)
                    end= time.process_time()
                    arr[k]=('Two Thousand Five Hundred Increasing Insertion: ' + '{:.6f}'.format(end-start))
                if k==7:
                    start= time.process_time()
                    selection_sort(inc)
                    end= time.process_time()
                    arr[k]=('Two Thousand Five Hundred Increasing Selection: ' + '{:.6f}'.format(end-start))
                if k==8:
                    start= time.process_time()
                    insertion_sort(dec)
                    end= time.process_time()
                    arr[k]=('Two Thousand Five Hundred Decreasing Insertion: ' + '{:.6f}'.format(end-start))
                if k==9:
                    start= time.process_time()
                    selection_sort(dec)
                    end= time.process_time()
                    arr[k]=('Two Thousand Five Hundred Decreasing Selection: ' + '{:.6f}'.format(end-start))
                if k==10:
                    start= time.process_time()
                    insertion_sort(rand)
                    end= time.process_time()
                    arr[k]=('Two Thousand Five Hundred Random Insertion: ' + '{:.6f}'.format(end-start))
                if k==11:
                    start= time.process_time()
                    selection_sort(rand)
                    end= time.process_time()
                    arr[k]=('Two Thousand Five Hundred Random Selection: ' + '{:.6f}'.format(end-start))
            if 11<k<18:
                l=5000
                inc=increasing(l)
                dec=decreasing(l)
                rand=ran(l)
                if k==12:
                    start= time.process_time()
                    insertion_sort(inc)
                    end= time.process_time()
                    arr[k]=('Five Thousand Increasing Insertion: ' + '{:.6f}'.format(end-start))
                if k==13:
                    start= time.process_time()
                    selection_sort(inc)
                    end= time.process_time()
                    arr[k]=('Five Thousand Increasing Selection: ' + '{:.6f}'.format(end-start))
                if k==14:
                    start= time.process_time()
                    insertion_sort(dec)
                    end= time.process_time()
                    arr[k]=('Five Thousand Decreasing Insertion: ' + '{:.6f}'.format(end-start))
                if k==15:
                    start= time.process_time()
                    selection_sort(dec)
                    end= time.process_time()
                    arr[k]=('Five Thousand Decreasing Selection: ' + '{:.6f}'.format(end-start))
                if k==16:
                    start= time.process_time()
                    insertion_sort(rand)
                    end= time.process_time()
                    arr[k]=('Five Thousand Random Insertion: ' + '{:.6f}'.format(end-start))
                if k==17:
                    start= time.process_time()
                    selection_sort(rand)
                    end= time.process_time()
                    arr[k]=('Five Thousand Random Selection: ' + '{:.6f}'.format(end-start))
            if 17<k<24:
                l=7500
                inc=increasing(l)
                dec=decreasing(l)
                rand=ran(l)
                if k==18:
                    start= time.process_time()
                    insertion_sort(inc)
                    end= time.process_time()
                    arr[k]=('Seven Thousand Five Hundred Increasing Insertion: ' + '{:.6f}'.format(end-start))
                if k==19:
                    start= time.process_time()
                    selection_sort(inc)
                    end= time.process_time()
                    arr[k]=('Seven Thousand Five Hundred Increasing Selection: ' + '{:.6f}'.format(end-start))
                if k==20:
                    start= time.process_time()
                    insertion_sort(dec)
                    end= time.process_time()
                    arr[k]=('Seven Thousand Five Hundred Decreasing Insertion: ' + '{:.6f}'.format(end-start))
                if k==21:
                    start= time.process_time()
                    selection_sort(dec)
                    end= time.process_time()
                    arr[k]=('Seven Thousand Five Hundred Decreasing Selection: ' + '{:.6f}'.format(end-start))
                if k==22:
                    start= time.process_time()
                    insertion_sort(rand)
                    end= time.process_time()
                    arr[k]=('Seven Thousand Five Hundred Random Insertion: ' + '{:.6f}'.format(end-start))
                if k==23:
                    start= time.process_time()
                    selection_sort(rand)
                    end= time.process_time()
                    arr[k]=('Seven Thousand Five Hundred Random Selection: ' + '{:.6f}'.format(end-start))
            if 23<k<30:
                l=10000
                inc=increasing(l)
                dec=decreasing(l)
                rand=ran(l)
                if k==24:
                    start= time.process_time()
                    insertion_sort(inc)
                    end= time.process_time()
                    arr[k]=('Ten Thousand Increasing Insertion: ' + '{:.6f}'.format(end-start))
                if k==25:
                    start= time.process_time()
                    selection_sort(inc)
                    end= time.process_time()
                    arr[k]=('Ten Thousand Increasing Selection: ' + '{:.6f}'.format(end-start))
                if k==26:
                    start= time.process_time()
                    insertion_sort(dec)
                    end= time.process_time()
                    arr[k]=('Ten Thousand Decreasing Insertion: ' + '{:.6f}'.format(end-start))
                if k==27:
                    start= time.process_time()
                    selection_sort(dec)
                    end= time.process_time()
                    arr[k]=('Ten Thousand Decreasing Selection: ' + '{:.6f}'.format(end-start))
                if k==28:
                    start= time.process_time()
                    insertion_sort(rand)
                    end= time.process_time()
                    arr[k]=('Ten Thousand Random Insertion: ' + '{:.6f}'.format(end-start))
                if k==29:
                    start= time.process_time()
                    selection_sort(rand)
                    end= time.process_time()
                    arr[k]=('Ten Thousand Random Selection: ' + '{:.6f}'.format(end-start))
        return arr



    list_=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    main(list_)
    print(list_)



# In[ ]:




