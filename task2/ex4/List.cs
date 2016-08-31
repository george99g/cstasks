using System;

namespace List
{
    public class List<Type>
    {
        public void Append(Type value)
        {
            ListNode<Type> node = new ListNode<Type>(value);
            if(_head == null)
                _head = node;
            else
            {
                node.PreviousNode = _head;
                _head.NextNode = node;
                _head = node;
            }
            if(_tail == null)
                _tail = node;
            _count++;
            return;
        }
        public void Prepend(Type value)
        {
            ListNode<Type> node = new ListNode<Type>(value);
            if(_tail == null)
                _tail = node;
            else
            {
                node.NextNode = _tail;
                _tail.PreviousNode = node;
                _tail = node;
            }
            if(_head == null)
                _head = node;
            _count++;
            return;
        }
        public void InsertAt(int index, Type value)
        {
            if(_count < index || index < 0)
                throw new IndexOutOfRangeException();
            if(index == 0)
                Prepend(value);
            else if(index == _count - 1)
                Append(value);
            else
            {
                ListNode<Type> valueNode = new ListNode<Type>(value);
                ListNode<Type> previousNode = _nodeAt(index);
                valueNode.PreviousNode = previousNode;
                if(previousNode.NextNode != null)
                {
                    previousNode.NextNode.PreviousNode = valueNode;
                    valueNode.NextNode = previousNode.NextNode;
                    previousNode.NextNode = valueNode;
                }
                _count++;
            }
        }
        public void RemoveAt(int index)
        {
            ListNode<Type> node = _nodeAt(index);
            if(node.PreviousNode == null && node.NextNode == null)
            {
                _head = null;
                _tail = null;
            }
            else
            {
                if(node.PreviousNode != null)
                    node.PreviousNode.NextNode = node.NextNode;
                else
                    _tail = node.NextNode;
                if(node.NextNode != null)
                    node.NextNode.PreviousNode = node.PreviousNode;
                else
                    _head = node.PreviousNode;
            }
            _count--;
            return;
        }
        public Type At(int index)
        {
            return _nodeAt(index).Value;
        }
        private ListNode<Type> _nodeAt(int index)
        {
            if(_count < index || index < 0)
                throw new IndexOutOfRangeException();
            ListNode<Type> currentNode;
            if(index > _count/2)
            {
                currentNode = _head;
                for(int i = 0; i < _count - 1 - index; i++)
                    currentNode = currentNode.PreviousNode;
            }
            else
            {
                currentNode = _tail;
                for(int i = 0; i < index; i++)
                    currentNode = currentNode.NextNode;
            }
            return currentNode;
        }
        public Type Head
        {
            get
            {
                if(_head != null)
                    return _head.Value;
                else throw new InvalidOperationException("The head is null.");
            }
        }
        public Type Tail
        {
            get
            {
                if(_tail != null)
                    return _tail.Value;
                else throw new InvalidOperationException("The tail is null.");
            }
        }
        public bool IsEmpty
        {
            get
            {
                return _count == 0;
            }
        }
        public int Count
        {
            get
            {
                return (int)_count;
            }
        }
        private uint _count;
        private ListNode<Type> _head;
        private ListNode<Type> _tail;
    }
    public class ListNode<Type>
    {
        public ListNode(Type value)
        {
            Value = value;
        }
        public ListNode(ListNode<Type> previousNode, Type value, ListNode<Type> nextNode)
        {
            PreviousNode = previousNode;
            Value = value;
            NextNode = nextNode;
        }
        public ListNode<Type> PreviousNode {get; set;}
        public Type Value {get; set;}
        public ListNode<Type> NextNode {get; set;}
    }
}