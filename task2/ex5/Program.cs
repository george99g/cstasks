using System.Collections.Generic;

namespace ConsoleApplication
{
    public class Tree<Type>
    {
        public Tree(Type value)
        {
            Root = new TreeNode<Type>(value);
        }
        public TreeNode<Type> Root {get; set;}
    }
    public class TreeNode<Type>
    {
        public TreeNode(Type value)
        {
            Value = value;
        }
        public void AddChild(TreeNode<Type> node)
        {
            _children.Add(node);
            node._parent = this;
        }
        public void AddChild(Type value)
        {
            AddChild(new TreeNode<Type>(value));
        }
        public void RemoveChild(TreeNode<Type> node)
        {
            _children.Remove(node);
        }
        public List<TreeNode<Type>> Children
        {
            get
            {
                return _children;
            }
        }
        List<TreeNode<Type>> _children = new List<TreeNode<Type>>();
        public TreeNode<Type> Parent
        {
            get
            {
                return _parent;
            }
        }
        TreeNode<Type> _parent;
        public Type Value {get; set;}
    }
    public class Program
    {
        public static void Main(string[] args)
        {
            
        }
    }
}
