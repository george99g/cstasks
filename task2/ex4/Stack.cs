using System;
using List;

namespace Stack
{
    public class Stack<Type>
    {
        public Type Pop()
        {
            if(_list.IsEmpty)
                throw new InvalidOperationException("The stack is empty.");
            Type returnValue = _list.Head;
            _list.RemoveAt(_list.Count - 1);
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
            return _list.Head;
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