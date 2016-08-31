using System;
using List;

namespace Queue
{
    public class Queue<Type>
    {
        public Type Pop()
        {
            if(_list.IsEmpty)
                throw new InvalidOperationException("The stack is empty.");
            Type returnValue = _list.Tail;
            _list.RemoveAt(0);
            return returnValue;
        }
        public void Push(Type value)
        {
            _list.Append(value);
            return;
        }
        public Type Peek()
        {
            if(_list.IsEmpty)
                throw new InvalidOperationException("The stack is empty.");
            return _list.Tail;
        }
        public bool IsEmpty
        {
            get
            {
                return _list.IsEmpty;
            }
        }
        List<Type> _list = new List<Type>();
    }
}