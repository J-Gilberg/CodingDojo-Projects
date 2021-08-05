class SList:
    def __init__(self):
        self.head = None
    def add_to_front(self, val):  # added this line, takes a value
        new_node = SLNode(val)
        current_head = self.head
        new_node.next = current_head
        self.head = new_node
        return self
    
    def print_values(self):
        runner = self.head # pointer to the head

class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None


L = SList()
L.add_to_front(1)
L.add_to_front(2)

print(f'Head Value:{L.head.value}, Next Value:{L.head.next.value}')