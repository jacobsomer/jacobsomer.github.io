class Linked_List:
    class __Node:
          data=None
          next=None
          previous=None
          def __init__(self, val):
              self.data=val
              return

    def __init__(self):
      self.__size=0
      self.__header= self.__Node(None)
      self.__trailer=self.__Node(None)
      self.__trailer.previous=self.__header
      self.__header.next=self.__trailer
      return

    def __len__(self):
        return self.__size

    def append_element(self, val):
        new_node=self.__Node(val)
        if self.__size==0:
            new_node.previous=self.__header
            new_node.next=self.__trailer
            self.__trailer.previous=new_node
            self.__header.next=new_node
            self.__size+=1
        elif self.__size>=1:
            self.__size+=1
            new_node.next=self.__trailer
            new_node.previous=self.__trailer.previous
            self.__trailer.previous.next=new_node
            self.__trailer.previous=new_node
        return

    def insert_element_at(self, val, index):
        if index>self.__size or index<0:
            raise IndexError
        if index>=0 and index<(self.__size/2):
            cur=self.__header
            for i in range(index+1):
                cur=cur.next
        else:
            cur=self.__trailer
            for i in range(self.__size-index):
                cur=cur.previous
        new_node=self.__Node(val)
        new_node.next=cur
        new_node.previous=cur.previous
        cur.previous.next=new_node
        cur.previous=new_node
        self.__size+=1
        return


    def remove_element_at(self, index):
        if 0>index or index>=self.__size or self.__size==0:
            raise IndexError
        elif index>=0 and index<self.__size:
            if self.__size/2 >= index:
                cur=self.__header
                for i in range(index):
                    cur=cur.next
            else:
                cur=self.__trailer
                for i in range((self.__size-index)+1):
                    cur=cur.previous
            removed_node=cur.next
            cur.next.next.previous=cur
            cur.next=cur.next.next
            self.__size-=1
            return removed_node.data

    def get_element_at(self, index):
        if index>=self.__size:
            raise IndexError
        if self.__size==0:
            raise IndexError
        if index>=0 and index<=(self.__size/2):
            cur=self.__header
            for i in range(index+1):
                cur=cur.next
        else:
            cur=self.__trailer
            for i in range(self.__size-index):
                cur=cur.previous
        return cur.data

    def rotate_left(self):
        if self.__size==0:
            return
        if self.__size>0:
            first_node=self.__header.next
            self.__header.next=self.__header.next.next
            self.__header.next.previous=self.__header
            first_node.next=self.__trailer
            first_node.previous=self.__trailer.previous
            first_node.next.previous=first_node
            first_node.previous.next=first_node
            return

    def __str__(self):
        my_list='[ '
        if self.__size==0:
            return '[ ]'
        if self.__size>0:
            cur=self.__header.next
            while cur.next is not self.__trailer:
                my_list= my_list + str(cur.data)+', '
                cur=cur.next
            my_list= my_list + str(cur.data)+' ]'
            return my_list

    def __iter__(self):
        self.cur=self.__header
        return self

    def __next__(self):
        if self.cur.next is not self.__trailer:
            self.cur=self.cur.next
            return self.cur.data
        raise StopIteration

if __name__=='__main__':

    empty_list=Linked_List() #create empty list

    list_len3=Linked_List()   #list that will be 3 in length]
    list_len3.append_element(1)
    list_len3.append_element(2)
    list_len3.append_element(3)



    print('Append Test: ')


    try:

        empty_list.append_element(4)
        print(empty_list)
        print(len(empty_list))


        list_len3.append_element(4)
        print(list_len3)
        print(len(list_len3))
    except IndexError:
        print('Error: Invalid Input')
    except ValueError:
        print('Error: Invalid Input')

    print('Removing Element Test: ')



    try:
        empty_list=Linked_List()
        try:

            empty_list.remove_element_at(0) #this should cause an Error
            print(empty_list)
            print(len(empty_list))
        except IndexError:
            print('Error: Index out of range')

        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)


        list_len3.remove_element_at(0) #first element
        print(list_len3)
        print(len(list_len3))

        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)

        list_len3.remove_element_at(1) #middle element
        print(list_len3)
        print(len(list_len3))

        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)

        list_len3.remove_element_at(2) #last element
        print(list_len3)
        print(len(list_len3))

    except IndexError:
        print('Error: Invalid input')
    except ValueError:
        print('Error: Invalid Input')
    except MemoryError:
        print('Error: unexpected out of cells.')



    print('Getting Element Test: ')

    try:
        empty_list=Linked_List()

        try:

            empty_list.get_element_at(0) #this should cause an Error
            print(empty_list)
            print(len(empty_list))
        except IndexError:
            print('Error: Index out of range')

        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)

        print('index 0: ', list_len3.get_element_at(0)) #first element
        print(list_len3)
        print(len(list_len3))

        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)

        print('index 1: ', list_len3.get_element_at(1)) #middle element
        print(list_len3)
        print(len(list_len3))

        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)

        print('index 2: ', list_len3.get_element_at(2)) #last element
        print(list_len3)
        print(len(list_len3))

    except IndexError:
        print('Error: Invalid input')

    print('Inserting Element Test: ')

    try:
        empty_list=Linked_List()

        try:
            empty_list.insert_element_at(2000,1)
            print(empty_list)
            print(len(empty_list))
        except IndexError:
            print('Error: Index out of range')
        except ValueError:
            print('Error: List is empty')


        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)

        list_len3.insert_element_at(2000,0) #first element
        print(list_len3)
        print(len(list_len3))

        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)

        list_len3.insert_element_at(2000,1) #middle element
        print(list_len3)
        print(len(list_len3))

        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)

        list_len3.insert_element_at(2000,2) #last element
        print(list_len3)
        print(len(list_len3))

    except IndexError:
        print('Error: Invalid input')



    print('Rotate Left Test: ')

    try:
        empty_list=Linked_List()
        try:
            empty_list.rotate_left()
            print(empty_list)
            print(len(empty_list))
        except ValueError:
            print('Error: List is empty')

        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)

        list_len3.rotate_left() #Rotate List of Length 3
        print(list_len3)
        print(len(list_len3))

    except ValueError:
        print('Error: List is empty')

    print('Iteration Test:')



    try:
        empty_list=Linked_List()
        for i in (empty_list):
            print(i)

        list_len3=Linked_List()   #list that will be 3 in length]
        list_len3.append_element(1)
        list_len3.append_element(2)
        list_len3.append_element(3)

        for i in (list_len3):
            print(i)

    except ValueError:
        print('Error: List is empty')
