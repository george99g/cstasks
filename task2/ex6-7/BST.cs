using Shapes;
using System;

namespace BST
{
    public class BST
    {
        public BST(Shape value)
        {
            _root = new BSTNode(value);
        }
        public void PrintAll(Order order)
        {
            _root.PrintAll(order);
        }
        public BSTNode Root
        {
            get
            {
                return _root;
            }
        }
        public void Insert(Shape value)
        {
            _root.Insert(value);
        }
        public Shape Find(double surfaceArea)
        {
            return _root.Find(surfaceArea);
        }
        public BSTNode FindNode(double surfaceArea)
        {
            return _root.FindNode(surfaceArea);
        }
        public enum Order
        {
            Ascending, Descending
        }
        BSTNode _root;
    }
    public class BSTNode
    {
        public BSTNode(Shape value)
        {
            Value = value;
            _key = value.SurfaceArea();
        }
        public void Insert(Shape value)
        {
            double valueKey = value.SurfaceArea();
            if(valueKey < _key)
            {
                if(LeftChild == null)
                {
                    LeftChild = new BSTNode(value);
                    LeftChild.Parent = this;
                }
                else
                    LeftChild.Insert(value);
            }
            else
            {
                if(RightChild == null)
                {
                    RightChild = new BSTNode(value);
                    RightChild.Parent = this;
                }
                else
                    RightChild.Insert(value);
            }
        }
        public Shape Find(double surfaceArea)
        {
            if(Key == surfaceArea)
                return Value;
            else
            {
                if(surfaceArea < _key && LeftChild != null)
                    return LeftChild.Find(surfaceArea);
                else if(RightChild != null)
                    return RightChild.Find(surfaceArea);
            }
            return null;
        }
        public BSTNode FindNode(double surfaceArea)
        {
            if(Key == surfaceArea)
                return this;
            else
            {
                if(surfaceArea < _key && LeftChild != null)
                    return LeftChild.FindNode(surfaceArea);
                else if(RightChild != null)
                    return RightChild.FindNode(surfaceArea);
            }
            return null;
        }
        public void Remove()
        {
            if(Parent == null)
                return;
            if(LeftChild == null && RightChild == null)
                Parent.RemoveChild(this);
            else if(LeftChild == null)
                Parent.ReplaceChild(this, RightChild);
            else if(RightChild == null)
                Parent.ReplaceChild(this, LeftChild);
            else
            {
                BSTNode otherNode = MinValue(RightChild);
                Value = otherNode.Value;
                _key = otherNode.Key;
                otherNode.Remove();
            }
        }
        void RemoveChild(BSTNode node)
        {
            if(LeftChild == node)
                LeftChild = null;
            else if(RightChild == node)
                RightChild = null;
        }
        void ReplaceChild(BSTNode oldNode, BSTNode newNode)
        {
            if(LeftChild == oldNode)
                LeftChild = newNode;
            else if(RightChild == oldNode)
                RightChild = newNode;
        }
        static BSTNode MinValue(BSTNode node)
        {
            BSTNode currentNode = node;
            while(currentNode.LeftChild != null)
                currentNode = currentNode.LeftChild;
            return currentNode;
        }
        public void PrintAll(BST.Order order)
        {
            switch(order)
            {
                case BST.Order.Ascending:
                    if(LeftChild != null)
                        LeftChild.PrintAll(order);
                    Console.WriteLine("{0}:{1}", Value.GetType().Name, _key);
                    if(RightChild != null)
                        RightChild.PrintAll(order);
                    break;
                default:
                    if(RightChild != null)
                        RightChild.PrintAll(order);
                    Console.WriteLine("{0}:{1}", Value.GetType().Name, _key);
                    if(LeftChild != null)
                        LeftChild.PrintAll(order);
                    break;
            }
            
        }
        public BSTNode LeftChild {get; set;}
        public BSTNode RightChild {get; set;}
        public BSTNode Parent {get; set;}
        public Shape Value {get; set;}
        public double Key
        {
            get
            {
                return _key;
            }
        }
        double _key;
    }
}